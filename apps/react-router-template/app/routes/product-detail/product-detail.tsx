import { authenticate } from "~/thor.server";

import { AppPage, Section } from "@thor-commerce/ui";
import { Link, Text } from "@primer/react";
import type { Route } from "./+types/product-detail";
import { RouterLink } from "~/components";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { admin } = await authenticate.admin(request);

  const productRepsonse = await admin.graphql(
    /* GraphQL */ `
      query GetProductDetail($id: ID!) {
        product(id: $id) {
          id
          name
          description
        }
      }
    `,
    {
      variables: {
        id: params.id,
      },
    },
  );

  const graphqlResponse = await productRepsonse.json();

  if (!graphqlResponse.data?.product) {
    throw new Response("Product not found", { status: 404 });
  }

  return {
    product: graphqlResponse.data?.product,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <AppPage
      title={loaderData.product.name}
      contextArea={
        <Link as={RouterLink} to="/">
          Products
        </Link>
      }
    >
      <Section title="Product details">
        <Text as="p">{loaderData.product.description}</Text>
      </Section>
    </AppPage>
  );
}
