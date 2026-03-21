/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as ThorAdminTypes from './admin.types.js';

export type GetProductsQueryVariables = ThorAdminTypes.Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { products: { nodes?: ThorAdminTypes.Maybe<Array<(
      Pick<ThorAdminTypes.Product, 'id' | 'name'>
      & { variants: (
        Pick<ThorAdminTypes.ProductVariantConnection, 'totalCount'>
        & { nodes?: ThorAdminTypes.Maybe<Array<Pick<ThorAdminTypes.ProductVariant, 'id' | 'barcode'>>> }
      ) }
    )>> } };

export type GetProductDetailQueryVariables = ThorAdminTypes.Exact<{
  id: ThorAdminTypes.Scalars['ID']['input'];
}>;


export type GetProductDetailQuery = { product?: ThorAdminTypes.Maybe<Pick<ThorAdminTypes.Product, 'id' | 'name' | 'description'>> };

interface GeneratedQueryTypes {
  "\n    query GetProducts {\n      products {\n        nodes {\n          id\n          name\n          # slug // automatic typegen and schema validation\n          variants {\n            totalCount\n            nodes {\n              id\n              barcode\n            }\n          }\n        }\n      }\n    }\n  ": {return: GetProductsQuery, variables: GetProductsQueryVariables},
  "\n      query GetProductDetail($id: ID!) {\n        product(id: $id) {\n          id\n          name\n          description\n        }\n      }\n    ": {return: GetProductDetailQuery, variables: GetProductDetailQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@thor-commerce/admin-client' {
  type InputMaybe<T> = ThorAdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
declare module '@thor-commerce/thor-app-react-router/server' {
  type InputMaybe<T> = ThorAdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
