import { authenticate } from "~/thor.server";
import type { Route } from "./+types/home";
import { AppPage, DataTable, Section } from "@thor-commerce/ui";
import { Link } from "@primer/react";
import { RouterLink } from "~/components";

export async function loader({ request }: Route.LoaderArgs) {
  //authenticates autommatically handles the OAuth flow for the app and returns an authenticated admin client that can be used to make API requests to Thor Commerce
  const { admin } = await authenticate.admin(request);

  const products = await admin.graphql(/* GraphQL */ `
    query GetProducts {
      products {
        nodes {
          id
          name
          # slug // automatic typegen and schema validation
          variants {
            totalCount
            nodes {
              id
              barcode
            }
          }
        }
      }
    }
  `);

  const graphqlResponse = await products.json();

  return {
    products: graphqlResponse.data?.products.nodes || [],
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <AppPage title="Products">
      <Section title="Products" flush>
        <DataTable
          data={loaderData.products}
          columns={[
            {
              header: "Product",
              field: "name",
              rowHeader: true,
              renderCell: (row) => (
                <Link as={RouterLink} to={`products/${row.id}`}>
                  {row.name}
                </Link>
              ),
            },
            {
              id: "variants",
              header: "Variants",
              renderCell: (row) => row.variants.totalCount,
            },
          ]}
        />
      </Section>
    </AppPage>
  );
}
