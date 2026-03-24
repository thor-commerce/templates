/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as AdminTypes from './admin.types.js';

export type GetProductsQueryVariables = AdminTypes.Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { products: { nodes?: AdminTypes.Maybe<Array<(
      Pick<AdminTypes.Product, 'id' | 'name'>
      & { variants: (
        Pick<AdminTypes.ProductVariantConnection, 'totalCount'>
        & { nodes?: AdminTypes.Maybe<Array<Pick<AdminTypes.ProductVariant, 'id' | 'barcode'>>> }
      ) }
    )>> } };

export type GetProductDetailQueryVariables = AdminTypes.Exact<{
  id: AdminTypes.Scalars['ID']['input'];
}>;


export type GetProductDetailQuery = { product?: AdminTypes.Maybe<Pick<AdminTypes.Product, 'id' | 'name' | 'description'>> };

interface GeneratedQueryTypes {
  "\n    query GetProducts {\n      products {\n        nodes {\n          id\n          name\n          # slug // automatic typegen and schema validation\n          variants {\n            totalCount\n            nodes {\n              id\n              barcode\n            }\n          }\n        }\n      }\n    }\n  ": {return: GetProductsQuery, variables: GetProductsQueryVariables},
  "\n      query GetProductDetail($id: ID!) {\n        product(id: $id) {\n          id\n          name\n          description\n        }\n      }\n    ": {return: GetProductDetailQuery, variables: GetProductDetailQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@thor-commerce/admin-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
