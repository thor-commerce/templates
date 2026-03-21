import { authenticate } from "~/thor.server";

import { Link, PageLayout } from "@primer/react";
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
    <PageLayout>
      <PageLayout.Content>
        <Link as={RouterLink} to="/">
          Back to products
        </Link>
        <div>Product details</div>
        <div>Name: {loaderData.product.name}</div>
        <div>Description: {loaderData.product.description}</div>
      </PageLayout.Content>
    </PageLayout>
  );
}
