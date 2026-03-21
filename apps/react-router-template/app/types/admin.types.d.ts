export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Long: { input: any; output: any; }
  TimeSpan: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AbsoluteShippingMethodRate = ShippingMethodRate & {
  __typename?: 'AbsoluteShippingMethodRate';
  /** The price of the shipping method rate. */
  amount: Money;
  /** The currency code for the shipping method rate. */
  currencyCode: Scalars['String']['output'];
  /** The unique identifier for the shipping method rate. */
  id: Scalars['ID']['output'];
  /** The predicate of the shipping method rate. Predicates are used to filter shipping methods based on certain criteria. */
  predicate?: Maybe<Scalars['String']['output']>;
  /** The priority of the shipping method rate. Lower values indicate higher priority. */
  priority: Scalars['Int']['output'];
  /** The tax behavior of the shipping method rate, indicating whether the rate is inclusive or exclusive of tax. */
  taxBehavior: TaxBehavior;
};

export type AddProductVariantMediaInput = {
  mediaIds: Array<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

export type AddressAlreadyExistsError = UserError & {
  __typename?: 'AddressAlreadyExistsError';
  message: Scalars['String']['output'];
};

export type AddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type AddressNotFoundError = UserError & {
  __typename?: 'AddressNotFoundError';
  message: Scalars['String']['output'];
};

export type ApiCommentEvent = OrderEvent & {
  __typename?: 'ApiCommentEvent';
  /** The comment associated with the event. */
  comment: Scalars['String']['output'];
  /** The date and time when the order event was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user or system that created the order event. */
  createdBy: Scalars['String']['output'];
  /** The unique identifier for the event. */
  id: Scalars['ID']['output'];
};

export type ApiKey = Node & {
  __typename?: 'ApiKey';
  /** The unique identifier of the api key. */
  id: Scalars['ID']['output'];
  /** Gets the last four characters of the API key */
  key: Scalars['String']['output'];
  /** The user-defined name of the API key. */
  name: Scalars['String']['output'];
  /** A list of permissions associated with the API key. */
  permissions: Array<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ApiKeyEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ApiKey>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoV2;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ApiKeyCreateError = CreateApiKeyFailedError | CreateApiKeyInvalidPermissionError | CreateApiKeyUserDoesNotHavePermissionToPerformActionError;

/** Represents the input for creating a new API key. */
export type ApiKeyCreateInput = {
  name: Scalars['String']['input'];
  permissions: Array<Scalars['String']['input']>;
};

export type ApiKeyCreatePayload = {
  __typename?: 'ApiKeyCreatePayload';
  apiKey?: Maybe<ApiKey>;
  errors?: Maybe<Array<ApiKeyCreateError>>;
};

export type ApiKeyDeleteError = DeleteApiKeyNotFoundError;

/** Represents the input for deleting an API key. */
export type ApiKeyDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ApiKeyDeletePayload = {
  __typename?: 'ApiKeyDeletePayload';
  apiKey?: Maybe<ApiKey>;
  errors?: Maybe<Array<ApiKeyDeleteError>>;
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ApiKey;
};

export type ApiKeyUpdateError = UpdateApiKeyInvalidPermissionError | UpdateApiKeyNotFoundError | UpdateApiKeyUserDoesNotHavePermissionToPerformActionError;

/** Represents the input for updating an existing API key. */
export type ApiKeyUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ApiKeyUpdatePayload = {
  __typename?: 'ApiKeyUpdatePayload';
  apiKey?: Maybe<ApiKey>;
  errors?: Maybe<Array<ApiKeyUpdateError>>;
};

/** Defines a product attribute in Thor, such as color, size, or material, that describes a specific aspect of a product. Attributes are used to distinguish between different variants of the same product—each unique combination of attribute values represents a distinct variant. This enables flexible filtering, grouping, and enrichment of product data across the catalog. */
export type Attribute = Node & {
  __typename?: 'Attribute';
  /** The unique identifier of the attribute. */
  id: Scalars['ID']['output'];
  /** Gets the metadata associated with the attribute. */
  metadata: Array<MetadataItem>;
  /** The name of the attribute. */
  name: Scalars['String']['output'];
  /** The type of the attribute. */
  type: ProductAttributeType;
  /** A list of values associated with the attribute. */
  values: AttributeValueConnection;
  /** The number of values that are associated with the attribute. */
  valuesCount: Scalars['Long']['output'];
};


/** Defines a product attribute in Thor, such as color, size, or material, that describes a specific aspect of a product. Attributes are used to distinguish between different variants of the same product—each unique combination of attribute values represents a distinct variant. This enables flexible filtering, grouping, and enrichment of product data across the catalog. */
export type AttributeMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Defines a product attribute in Thor, such as color, size, or material, that describes a specific aspect of a product. Attributes are used to distinguish between different variants of the same product—each unique combination of attribute values represents a distinct variant. This enables flexible filtering, grouping, and enrichment of product data across the catalog. */
export type AttributeValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeAssigmentVariantValueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  variantId: Scalars['ID']['input'];
};

/**
 * Represents an attribute assignment for a product, encapsulating the details of the attribute assigned to the product.
 *
 * Each attribute assignment includes the unique identifier of the attribute, its name, and the values assigned to the product. This allows for flexible and dynamic product attributes that can be used across different products and variants.
 */
export type AttributeAssignment = {
  __typename?: 'AttributeAssignment';
  /** Gets the unique identifier of the attribute. */
  id: Scalars['ID']['output'];
  /** The name of the attribute */
  name: Scalars['String']['output'];
  /** The values assigned to the product, based on which values the variants have. */
  values: AttributeValueConnection;
};


/**
 * Represents an attribute assignment for a product, encapsulating the details of the attribute assigned to the product.
 *
 * Each attribute assignment includes the unique identifier of the attribute, its name, and the values assigned to the product. This allows for flexible and dynamic product attributes that can be used across different products and variants.
 */
export type AttributeAssignmentValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AttributeAssignmentFailedError = UserError & {
  __typename?: 'AttributeAssignmentFailedError';
  message: Scalars['String']['output'];
};

export type AttributeAssignmentInput = {
  id: Scalars['ID']['input'];
  variantValues: Array<AttributeAssigmentVariantValueInput>;
};

export type AttributeAssignmentsAddError = AttributeAssignmentFailedError | AttributeNotFoundError | ProductNotFoundError;

export type AttributeAssignmentsAddInput = {
  attributes: Array<AttributeAssignmentInput>;
  productId: Scalars['ID']['input'];
};

export type AttributeAssignmentsAddPayload = {
  __typename?: 'AttributeAssignmentsAddPayload';
  errors?: Maybe<Array<AttributeAssignmentsAddError>>;
  product?: Maybe<Product>;
};

export type AttributeAssignmentsRemoveError = DuplicateVariantCombinationError | ProductNotFoundError;

export type AttributeAssignmentsRemoveInput = {
  attributes: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};

export type AttributeAssignmentsRemovePayload = {
  __typename?: 'AttributeAssignmentsRemovePayload';
  errors?: Maybe<Array<AttributeAssignmentsRemoveError>>;
  product?: Maybe<Product>;
};

export type AttributeAssignmentsReorderError = ProductNotFoundError;

export type AttributeAssignmentsReorderInput = {
  attributes: Array<AttributeReorderInput>;
  productId: Scalars['ID']['input'];
};

export type AttributeAssignmentsReorderPayload = {
  __typename?: 'AttributeAssignmentsReorderPayload';
  errors?: Maybe<Array<AttributeAssignmentsReorderError>>;
  product?: Maybe<Product>;
};

/** A connection to a list of items. */
export type AttributeConnection = {
  __typename?: 'AttributeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AttributeEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Attribute>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type AttributeCreateError = AttributeNotFoundError;

export type AttributeCreateInput = {
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name: Scalars['String']['input'];
  type: ProductAttributeType;
};

export type AttributeCreatePayload = {
  __typename?: 'AttributeCreatePayload';
  attribute?: Maybe<Attribute>;
  errors?: Maybe<Array<AttributeCreateError>>;
};

export type AttributeDeleteError = AttributeInUseError | AttributeNotFoundError;

export type AttributeDeleteInput = {
  id: Scalars['ID']['input'];
};

export type AttributeDeletePayload = {
  __typename?: 'AttributeDeletePayload';
  attribute?: Maybe<Attribute>;
  errors?: Maybe<Array<AttributeDeleteError>>;
};

export type AttributeEdge = {
  __typename?: 'AttributeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Attribute;
};

export type AttributeInUseError = UserError & {
  __typename?: 'AttributeInUseError';
  message: Scalars['String']['output'];
};

export type AttributeNotFoundError = UserError & {
  __typename?: 'AttributeNotFoundError';
  message: Scalars['String']['output'];
};

export type AttributeReorderInput = {
  id: Scalars['ID']['input'];
  values: Array<AttributeValueReorderInput>;
};

export type AttributeUpdateError = AttributeNotFoundError;

export type AttributeUpdateInput = {
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name: Scalars['String']['input'];
};

export type AttributeUpdatePayload = {
  __typename?: 'AttributeUpdatePayload';
  attribute?: Maybe<Attribute>;
  errors?: Maybe<Array<AttributeUpdateError>>;
};

export type AttributeValue = {
  /** The unique identifier of the attribute value. */
  id: Scalars['ID']['output'];
  /** Gets the metadata associated with the attribute value. */
  metadata: Array<MetadataItem>;
  /** The value of the attribute. */
  value: Scalars['String']['output'];
  /** A list of references to variants associated with the attribute value. */
  variantReferences: ProductVariantConnection;
  /** The number of references to variants that are associated with the attribute value. */
  variantReferencesCount: Scalars['Long']['output'];
};


export type AttributeValueMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type AttributeValueVariantReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type AttributeValueConnection = {
  __typename?: 'AttributeValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AttributeValueEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<AttributeValue>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type AttributeValueEdge = {
  __typename?: 'AttributeValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AttributeValue;
};

export type AttributeValueInput = {
  swatch?: InputMaybe<AttributeValueSwatchInput>;
  text?: InputMaybe<AttributeValueTextInput>;
};

export type AttributeValueReorderInput = {
  id: Scalars['ID']['input'];
};

export type AttributeValueSwatchInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  mediaId?: InputMaybe<Scalars['ID']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueTakenError = UserError & {
  __typename?: 'AttributeValueTakenError';
  message: Scalars['String']['output'];
};

export type AttributeValueTextInput = {
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AttributeValueTypeMismatchError = UserError & {
  __typename?: 'AttributeValueTypeMismatchError';
  message: Scalars['String']['output'];
};

export type AttributeValueUpdateInput = {
  attributeValueId: Scalars['ID']['input'];
  value: AttributeValueInput;
};

export type AttributeValuesBulkCreateError = AttributeNotFoundError | AttributeValueTakenError | AttributeValueTypeMismatchError;

export type AttributeValuesBulkCreateInput = {
  attributeId: Scalars['ID']['input'];
  values: Array<AttributeValueInput>;
};

export type AttributeValuesBulkCreatePayload = {
  __typename?: 'AttributeValuesBulkCreatePayload';
  attribute?: Maybe<Attribute>;
  errors?: Maybe<Array<AttributeValuesBulkCreateError>>;
};

export type AttributeValuesBulkDeleteError = AttributeNotFoundError | AttributeValuesInUseError;

export type AttributeValuesBulkDeleteInput = {
  attributeId: Scalars['ID']['input'];
  attributeValueIds: Array<Scalars['ID']['input']>;
};

export type AttributeValuesBulkDeletePayload = {
  __typename?: 'AttributeValuesBulkDeletePayload';
  attribute?: Maybe<Attribute>;
  errors?: Maybe<Array<AttributeValuesBulkDeleteError>>;
};

export type AttributeValuesBulkUpdateError = AttributeNotFoundError | AttributeValueTypeMismatchError;

export type AttributeValuesBulkUpdateInput = {
  attributeId: Scalars['ID']['input'];
  values: Array<AttributeValueUpdateInput>;
};

export type AttributeValuesBulkUpdatePayload = {
  __typename?: 'AttributeValuesBulkUpdatePayload';
  attribute?: Maybe<Attribute>;
  errors?: Maybe<Array<AttributeValuesBulkUpdateError>>;
};

export type AttributeValuesInUseError = UserError & {
  __typename?: 'AttributeValuesInUseError';
  message: Scalars['String']['output'];
};

export type AuthorizationTransaction = Transaction & {
  __typename?: 'AuthorizationTransaction';
  /** The amount of the transaction. */
  amount: Money;
  /** The date and time when the authorization expires. */
  authorizationExpiresAt: Scalars['DateTime']['output'];
  /** The unique identifier for the transaction. */
  id: Scalars['ID']['output'];
  /** Indicates whether the authorization can be captured multiple times. */
  multiCapturable: Scalars['Boolean']['output'];
  /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};

export type BaseAddress = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Name of the city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Name of the company. */
  company?: Maybe<Scalars['String']['output']>;
  /** Two-digit country code as per  ISO 3166-1 alpha-2 */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Email address of the contact. */
  email?: Maybe<Scalars['String']['output']>;
  /** Given name (first name) of the contact. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Formatted address. */
  formatted?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the address. */
  id: Scalars['ID']['output'];
  /** Family name (last name) of the contact. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Gets the metadata associated with the address. */
  metadata: Array<MetadataItem>;
  /** Phone number of the contact. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Name of the state, for example, Colorado. */
  state?: Maybe<Scalars['String']['output']>;
};


export type BaseAddressMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BulkOperationLimitExceededError = UserError & {
  __typename?: 'BulkOperationLimitExceededError';
  message: Scalars['String']['output'];
};

export type BulkUpdateValidationFailedError = UserError & {
  __typename?: 'BulkUpdateValidationFailedError';
  failures: Array<BulkUpdateValidationFailure>;
  message: Scalars['String']['output'];
};

export type BulkUpdateValidationFailure = {
  __typename?: 'BulkUpdateValidationFailure';
  id: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
};

export type CaptureTransaction = Transaction & {
  __typename?: 'CaptureTransaction';
  /** The amount of the transaction. */
  amount: Money;
  /** The unique identifier for the transaction. */
  id: Scalars['ID']['output'];
  /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};

/**
 * Represents a cart in Thor, encapsulating all information required to display and manage items across storefronts and sales channels.
 *
 * Each cart includes details such as the total price, line items, shipping address, and available shipping methods. Carts can be used to track items before purchase, allowing customers to review and modify their selections.
 */
export type Cart = Node & {
  __typename?: 'Cart';
  /** Gets the billing address associated with the cart. This may be the same as the shipping address. */
  billingAddress?: Maybe<CartAddress>;
  /** Gets the currency of the cart. */
  currency: Scalars['String']['output'];
  /** Gets the customer email associated with the cart, if any. */
  customerEmail?: Maybe<Scalars['String']['output']>;
  /** Gets the customer ID associated with the cart, if any. */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** Retrieves a paginated list of discount applications for the order */
  discountApplications: DiscountApplicationConnection;
  /** Gets the discount codes applied to the cart. */
  discountCodes: Array<DiscountCode>;
  /** The unique identifier of the cart */
  id: Scalars['ID']['output'];
  /** Retrieves a paginated list of line items for a specific cart. */
  lineItems: CartLineItemConnection;
  /** Sum of all LineItem quantities. */
  lineItemsQuantity: Scalars['Long']['output'];
  /** Gets the metadata associated with the cart. Once the cart is ordered, this metadata is transferred to the order. */
  metadata: Array<MetadataItem>;
  /** Gets the shipping address associated with the cart. */
  shippingAddress?: Maybe<CartAddress>;
  /** Gets the shipping lines applied to the cart. */
  shippingLines: Array<CartShippingLine>;
  /** Gets the current state of the cart. */
  state: CartState;
  /** Gets the total price of the cart before discounts and taxes. */
  subtotal: Money;
  /** Gets the taxed price of the cart. This may be null if the cart does not yet have a taxed price. */
  taxedPrice?: Maybe<TaxedPrice>;
  /** Gets the total price of the cart after discounts and taxes. */
  total: Money;
};


/**
 * Represents a cart in Thor, encapsulating all information required to display and manage items across storefronts and sales channels.
 *
 * Each cart includes details such as the total price, line items, shipping address, and available shipping methods. Carts can be used to track items before purchase, allowing customers to review and modify their selections.
 */
export type CartDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Represents a cart in Thor, encapsulating all information required to display and manage items across storefronts and sales channels.
 *
 * Each cart includes details such as the total price, line items, shipping address, and available shipping methods. Carts can be used to track items before purchase, allowing customers to review and modify their selections.
 */
export type CartLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Represents a cart in Thor, encapsulating all information required to display and manage items across storefronts and sales channels.
 *
 * Each cart includes details such as the total price, line items, shipping address, and available shipping methods. Carts can be used to track items before purchase, allowing customers to review and modify their selections.
 */
export type CartMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CartAddress = BaseAddress & {
  __typename?: 'CartAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Name of the city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Name of the company. */
  company?: Maybe<Scalars['String']['output']>;
  /** Two-digit country code as per  ISO 3166-1 alpha-2 */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Email address of the contact. */
  email?: Maybe<Scalars['String']['output']>;
  /** Given name (first name) of the contact. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Formatted address. */
  formatted?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the address. */
  id: Scalars['ID']['output'];
  /** Family name (last name) of the contact. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Gets the metadata associated with the address. */
  metadata: Array<MetadataItem>;
  /** Phone number of the contact. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Name of the state, for example, Colorado. */
  state?: Maybe<Scalars['String']['output']>;
};


export type CartAddressMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CartCustomLineItemDiscountedPriceInput = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['String']['input'];
};

export type CartCustomLineItemInput = {
  price: CartCustomLineItemPriceInput;
  product: CartCustomLineItemProductInput;
  quantity: Scalars['Int']['input'];
};

export type CartCustomLineItemPriceInput = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['String']['input'];
  discountedPrice?: InputMaybe<CartCustomLineItemDiscountedPriceInput>;
  taxBehavior: TaxBehavior;
};

export type CartCustomLineItemProductInput = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  productSlug?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  variantId?: InputMaybe<Scalars['ID']['input']>;
  variantName?: InputMaybe<Scalars['String']['input']>;
  weightInKg?: InputMaybe<Scalars['Decimal']['input']>;
};

export type CartCustomLineItemsAddError = CartNotFoundError;

export type CartCustomLineItemsAddInput = {
  cartId: Scalars['ID']['input'];
  lineItems: Array<CartCustomLineItemInput>;
};

export type CartCustomLineItemsAddPayload = {
  __typename?: 'CartCustomLineItemsAddPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartCustomLineItemsAddError>>;
};

export type CartCustomShippingLineInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name: Scalars['String']['input'];
  price: CartCustomShippingLinePriceInput;
  sku?: InputMaybe<Scalars['String']['input']>;
};

export type CartCustomShippingLinePriceInput = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['String']['input'];
  taxBehavior: TaxBehavior;
};

export type CartCustomShippingLinesSetError = CartNotFoundError;

export type CartCustomShippingLinesSetInput = {
  cartId: Scalars['ID']['input'];
  shippingLines: Array<CartCustomShippingLineInput>;
};

export type CartCustomShippingLinesSetPayload = {
  __typename?: 'CartCustomShippingLinesSetPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartCustomShippingLinesSetError>>;
};

export type CartDiscount = Node & {
  __typename?: 'CartDiscount';
  /** Gets a list of channels associated with the specified cart discount. */
  channels: ChannelConnection;
  /** A list of discount codes associated with the cart discount. */
  discountCodes: CartDiscountCodeConnection;
  /** The display name of the cart discount. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the cart discount. */
  id: Scalars['ID']['output'];
  /** The name of the cart discount. */
  name: Scalars['String']['output'];
  /**
   * The predicate that defines the conditions under which the cart discount is applied.
   * For example, a predicate could specify that the discount only applies if the cart total exceeds a certain amount or if specific products are in the cart.
   */
  predicate: Scalars['String']['output'];
  /** The priority of the cart discount, which determines the order in which discounts are applied. Lower priority discounts are applied first. */
  priority: Scalars['Int']['output'];
  /** True if the cart discount requires a discount code before it applies. */
  requiresDiscountCode: Scalars['Boolean']['output'];
  /**
   * The target of the cart discount, which specifies what the discount applies to.
   * For example: shipping, total price or all/specific line items.
   */
  target: CartDiscountTarget;
  /** The date and time the discount is valid from. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time the discount is valid until. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  /** The value of the cart discount, which can be an absolute or relative discount. */
  value: CartDiscountValue;
};


export type CartDiscountChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CartDiscountDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CartDiscountAbsoluteValueInput = {
  amounts: Array<MoneyInput>;
};

export type CartDiscountCode = Node & {
  __typename?: 'CartDiscountCode';
  /** A list of discount codes associated with the cart discount. */
  discountCodes: Array<CartDiscountInputCode>;
  /** the ID of the cart discount code. */
  id: Scalars['ID']['output'];
  /** The maximum amount of applications that can be discount. */
  maxApplications?: Maybe<Scalars['Int']['output']>;
  /** The maximum number of applications allowed per customer for the cart discount code. */
  maxApplicationsPerCustomer?: Maybe<Scalars['Int']['output']>;
  /** The name of the cart discount code. */
  name: Scalars['String']['output'];
  /** The date and time when the cart discount code becomes valid. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time when the cart discount code expires. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

/** A connection to a list of items. */
export type CartDiscountCodeConnection = {
  __typename?: 'CartDiscountCodeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CartDiscountCodeEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<CartDiscountCode>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CartDiscountCodeCreateError = CartDiscountCodesInvalidValidityPeriodError;

export type CartDiscountCodeCreateInput = {
  codes: Array<Scalars['String']['input']>;
  maxApplications?: InputMaybe<Scalars['Int']['input']>;
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartDiscountCodeCreatePayload = {
  __typename?: 'CartDiscountCodeCreatePayload';
  cartDiscountCode?: Maybe<CartDiscountCode>;
  errors?: Maybe<Array<CartDiscountCodeCreateError>>;
};

export type CartDiscountCodeDeleteError = CartDiscountCodesNotFoundError;

export type CartDiscountCodeDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CartDiscountCodeDeletePayload = {
  __typename?: 'CartDiscountCodeDeletePayload';
  cartDiscountCode?: Maybe<CartDiscountCode>;
  errors?: Maybe<Array<CartDiscountCodeDeleteError>>;
};

export type CartDiscountCodeEdge = {
  __typename?: 'CartDiscountCodeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CartDiscountCode;
};

export type CartDiscountCodeUpdateError = CartDiscountCodesInvalidValidityPeriodError | CartDiscountCodesNotFoundError;

export type CartDiscountCodeUpdateInput = {
  codes?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  maxApplications?: InputMaybe<Scalars['Int']['input']>;
  maxApplicationsPerCustomer?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartDiscountCodeUpdatePayload = {
  __typename?: 'CartDiscountCodeUpdatePayload';
  cartDiscountCode?: Maybe<CartDiscountCode>;
  errors?: Maybe<Array<CartDiscountCodeUpdateError>>;
};

export type CartDiscountCodesInvalidValidityPeriodError = UserError & {
  __typename?: 'CartDiscountCodesInvalidValidityPeriodError';
  message: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type CartDiscountCodesNotFoundError = UserError & {
  __typename?: 'CartDiscountCodesNotFoundError';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type CartDiscountConnection = {
  __typename?: 'CartDiscountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CartDiscountEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<CartDiscount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CartDiscountCreateError = CartDiscountInvalidPredicateError;

export type CartDiscountCreateInput = {
  absoluteValue?: InputMaybe<CartDiscountAbsoluteValueInput>;
  discountCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  lineItemTarget?: InputMaybe<LineItemTargetInput>;
  name: Scalars['String']['input'];
  predicate: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  relativeValue?: InputMaybe<CartDiscountRelativeValueInput>;
  requiresDiscountCode?: InputMaybe<Scalars['Boolean']['input']>;
  targetType: CartDiscountTargetType;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartDiscountCreatePayload = {
  __typename?: 'CartDiscountCreatePayload';
  cartDiscount?: Maybe<CartDiscount>;
  errors?: Maybe<Array<CartDiscountCreateError>>;
};

export type CartDiscountDeleteError = CartDiscountNotFoundError;

export type CartDiscountDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CartDiscountDeletePayload = {
  __typename?: 'CartDiscountDeletePayload';
  cartDiscount?: Maybe<CartDiscount>;
  errors?: Maybe<Array<CartDiscountDeleteError>>;
};

export type CartDiscountEdge = {
  __typename?: 'CartDiscountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CartDiscount;
};

/** Represents a group for cart discounts with stacking behavior. */
export type CartDiscountGroup = Node & {
  __typename?: 'CartDiscountGroup';
  /** Gets the cart discounts that are members of this group. */
  discounts: CartDiscountConnection;
  /** Gets the count of cart discounts that are members of this group. */
  discountsCount: Scalars['Long']['output'];
  /** Gets the ID of the cart discount group. */
  id: Scalars['ID']['output'];
  /** Gets the name of the cart discount group. */
  name: Scalars['String']['output'];
  /** Gets the stacking mode of the cart discount group. */
  stackingMode: StackingMode;
};


/** Represents a group for cart discounts with stacking behavior. */
export type CartDiscountGroupDiscountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type CartDiscountGroupConnection = {
  __typename?: 'CartDiscountGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CartDiscountGroupEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<CartDiscountGroup>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CartDiscountGroupCreateInput = {
  name: Scalars['String']['input'];
  stackingMode: StackingMode;
};

export type CartDiscountGroupCreatePayload = {
  __typename?: 'CartDiscountGroupCreatePayload';
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
};

export type CartDiscountGroupDeleteError = CartDiscountGroupNotFoundError;

export type CartDiscountGroupDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CartDiscountGroupDeletePayload = {
  __typename?: 'CartDiscountGroupDeletePayload';
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
  errors?: Maybe<Array<CartDiscountGroupDeleteError>>;
};

export type CartDiscountGroupEdge = {
  __typename?: 'CartDiscountGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CartDiscountGroup;
};

export type CartDiscountGroupMemberAddError = CartDiscountGroupNotFoundError;

export type CartDiscountGroupMemberAddInput = {
  cartDiscountId: Scalars['ID']['input'];
  groupId: Scalars['ID']['input'];
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type CartDiscountGroupMemberAddPayload = {
  __typename?: 'CartDiscountGroupMemberAddPayload';
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
  errors?: Maybe<Array<CartDiscountGroupMemberAddError>>;
};

export type CartDiscountGroupMemberMoveInput = {
  cartDiscountId: Scalars['ID']['input'];
  sortOrder: Scalars['Int']['input'];
};

export type CartDiscountGroupMemberRemoveError = CartDiscountGroupNotFoundError;

export type CartDiscountGroupMemberRemoveInput = {
  cartDiscountId: Scalars['ID']['input'];
  groupId: Scalars['ID']['input'];
};

export type CartDiscountGroupMemberRemovePayload = {
  __typename?: 'CartDiscountGroupMemberRemovePayload';
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
  errors?: Maybe<Array<CartDiscountGroupMemberRemoveError>>;
};

export type CartDiscountGroupMembersReorderError = CartDiscountGroupNotFoundError;

export type CartDiscountGroupMembersReorderInput = {
  groupId: Scalars['ID']['input'];
  moves: Array<CartDiscountGroupMemberMoveInput>;
};

export type CartDiscountGroupMembersReorderPayload = {
  __typename?: 'CartDiscountGroupMembersReorderPayload';
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
  errors?: Maybe<Array<CartDiscountGroupMembersReorderError>>;
};

export type CartDiscountGroupNotFoundError = UserError & {
  __typename?: 'CartDiscountGroupNotFoundError';
  message: Scalars['String']['output'];
};

export type CartDiscountGroupUpdateError = CartDiscountGroupNotFoundError;

export type CartDiscountGroupUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  stackingMode?: InputMaybe<StackingMode>;
};

export type CartDiscountGroupUpdatePayload = {
  __typename?: 'CartDiscountGroupUpdatePayload';
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
  errors?: Maybe<Array<CartDiscountGroupUpdateError>>;
};

export type CartDiscountInputCode = {
  __typename?: 'CartDiscountInputCode';
  /** Returns the value of the cart discount input code. */
  value: Scalars['String']['output'];
};

export type CartDiscountInvalidPredicateError = UserError & {
  __typename?: 'CartDiscountInvalidPredicateError';
  message: Scalars['String']['output'];
};

export type CartDiscountInvalidValidityPeriodError = UserError & {
  __typename?: 'CartDiscountInvalidValidityPeriodError';
  message: Scalars['String']['output'];
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  validUntil?: Maybe<Scalars['DateTime']['output']>;
};

export type CartDiscountLineItemTarget = {
  __typename?: 'CartDiscountLineItemTarget';
  /** The predicate defines which line items this discount applies to. */
  predicate: Scalars['String']['output'];
};

export type CartDiscountNotFoundError = UserError & {
  __typename?: 'CartDiscountNotFoundError';
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export type CartDiscountRelativeValueInput = {
  factor: Scalars['Decimal']['input'];
};

export type CartDiscountTarget = CartDiscountLineItemTarget | CartDiscountTotalPriceTarget;

export enum CartDiscountTargetType {
  LineItem = 'LINE_ITEM',
  Total = 'TOTAL'
}

export type CartDiscountTotalPriceTarget = {
  __typename?: 'CartDiscountTotalPriceTarget';
  /** The discriminator for the total price target type. */
  discriminator: Scalars['String']['output'];
};

export type CartDiscountUpdateError = CartDiscountInvalidPredicateError | CartDiscountInvalidValidityPeriodError | CartDiscountNotFoundError | CartDiscountValidityPeriodMustHaveBothValuesError;

export type CartDiscountUpdateInput = {
  absoluteValue?: InputMaybe<CartDiscountAbsoluteValueInput>;
  discountCodes?: InputMaybe<Array<Scalars['ID']['input']>>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lineItemTarget?: InputMaybe<LineItemTargetInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  predicate?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  relativeValue?: InputMaybe<CartDiscountRelativeValueInput>;
  requiresDiscountCode?: InputMaybe<Scalars['Boolean']['input']>;
  targetType?: InputMaybe<CartDiscountTargetType>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CartDiscountUpdatePayload = {
  __typename?: 'CartDiscountUpdatePayload';
  cartDiscount?: Maybe<CartDiscount>;
  errors?: Maybe<Array<CartDiscountUpdateError>>;
};

export type CartDiscountValidityPeriodMustHaveBothValuesError = UserError & {
  __typename?: 'CartDiscountValidityPeriodMustHaveBothValuesError';
  message: Scalars['String']['output'];
  providedValidFrom: Scalars['Boolean']['output'];
  providedValidUntil: Scalars['Boolean']['output'];
};

export type CartDiscountValue = {
  /** Returns the discriminator for the cart discount value type. */
  discriminator: Scalars['String']['output'];
};

export type CartDiscountValueAbsolute = CartDiscountValue & {
  __typename?: 'CartDiscountValueAbsolute';
  /** A list of amounts that represent the absolute discount values in each of the currencies this value targets. */
  amounts: Array<Money>;
  /** Returns the discriminator for the cart discount value type. */
  discriminator: Scalars['String']['output'];
};

export type CartDiscountValueRelative = CartDiscountValue & {
  __typename?: 'CartDiscountValueRelative';
  /** Returns the discriminator for the cart discount value type. */
  discriminator: Scalars['String']['output'];
  /** The factor (F) by which the cart discount is applied. Following condition are met about factor: 0 < F < 1. */
  factor: Scalars['Decimal']['output'];
};

/**
 * Represents a line item in a cart, which includes details about the product, variant, and any associated discounts.
 *
 * Each line item contains information such as the product name, variant details, total price, and any applicable discounts. This allows for detailed tracking of items within a cart, including their pricing and discount applications.
 */
export type CartLineItem = Node & {
  __typename?: 'CartLineItem';
  /** Retrieves a paginated list of payments for a specific order. */
  discountApplications: DiscountApplicationConnection;
  /** The unique identifier of the line item */
  id: Scalars['ID']['output'];
  /** Gets the metadata associated with the cart line item. */
  metadata: Array<MetadataItem>;
  /** The unique identifier of the product associated with the cart line item. */
  productId: Scalars['ID']['output'];
  /** The name of the product */
  productName: Scalars['String']['output'];
  /** Retrieves the slug of the product associated with a cart line item. This is useful for generating URLs or displaying product information. */
  productSlug: Scalars['String']['output'];
  /** Retrieves the quantity of the cart line item. */
  quantity: Scalars['Int']['output'];
  /** Retrieves the SKU (Stock Keeping Unit) of the variant associated with a cart line item. The SKU is a unique identifier for the variant, often used for inventory management. */
  sku: Scalars['String']['output'];
  /** The line items total excluding discounts and taxes. */
  subtotal: Money;
  /** Gets the tax behavior of the cart line item, which indicates how taxes are applied to the item. */
  taxBehavior: TaxBehavior;
  /** Retrieves the tax rate applied to the cart line item. This may be null if the line item does not have a tax rate defined. */
  taxRate?: Maybe<TaxRate>;
  /** Gets the taxed price of the cart line item. This may be null if the cart does not yet have a taxed price. */
  taxedPrice?: Maybe<TaxedPrice>;
  /** Gets the total price of the cart line item after discounts and taxes. */
  total: Money;
  /** Retrieves the unit price of the cart line item. */
  unitPrice: UnitPrice;
  /** The unique identifier of the variant associated with the cart line item. */
  variantId: Scalars['ID']['output'];
  /** Retrieves the name of the variant associated with a cart line item. This is useful for displaying the specific variant details to the user. */
  variantName: Scalars['String']['output'];
};


/**
 * Represents a line item in a cart, which includes details about the product, variant, and any associated discounts.
 *
 * Each line item contains information such as the product name, variant details, total price, and any applicable discounts. This allows for detailed tracking of items within a cart, including their pricing and discount applications.
 */
export type CartLineItemDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Represents a line item in a cart, which includes details about the product, variant, and any associated discounts.
 *
 * Each line item contains information such as the product name, variant details, total price, and any applicable discounts. This allows for detailed tracking of items within a cart, including their pricing and discount applications.
 */
export type CartLineItemMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A connection to a list of items. */
export type CartLineItemConnection = {
  __typename?: 'CartLineItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CartLineItemEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<CartLineItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CartLineItemEdge = {
  __typename?: 'CartLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CartLineItem;
};

export type CartNotFoundError = UserError & {
  __typename?: 'CartNotFoundError';
  cartId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

/** Represents a shipping line on a cart, including method and totals. */
export type CartShippingLine = {
  __typename?: 'CartShippingLine';
  /** The unique identifier of the cart shipping line. */
  id: Scalars['ID']['output'];
  /** The shipping method selected for this shipping line. */
  shippingMethod: LineShippingMethod;
  /** The subtotal of the shipping line before discounts and taxes. */
  subtotal: Money;
  /** The tax behavior used to calculate this shipping line. */
  taxBehavior: TaxBehavior;
  /** The taxed price (net, gross, tax) of this shipping line, if available. */
  taxedPrice?: Maybe<TaxedPrice>;
  /** The total amount for the shipping line after discounts and taxes. */
  total: Money;
};

export enum CartState {
  Active = 'ACTIVE',
  Ordered = 'ORDERED'
}

/** Represents a grouping of products within Thor Commerce, enabling merchants to organize and showcase items across storefronts and sales channels. Categories can be defined manually or dynamically via rules based on product attributes, tags, or metadata. Each category supports hierarchical relationships, custom fields, and localization to optimize navigation and personalize the shopping experience. */
export type Category = Node & {
  __typename?: 'Category';
  /** The ancestors of the category. */
  ancestors: Array<Category>;
  /** The direct children of the category. */
  children: Array<Category>;
  /** The number of direct children of the category. */
  childrenCount: Scalars['Long']['output'];
  /** The descendants of the category. */
  descendants: Array<Category>;
  /** The number of descendants of the category. */
  descendantsCount: Scalars['Long']['output'];
  /** The unique identifier of the category. */
  id: Scalars['ID']['output'];
  /** Returns the level of the category in the category tree. */
  level: Scalars['Int']['output'];
  /** The name of the category. */
  name: Scalars['String']['output'];
  /** The parent category of the category. */
  parent?: Maybe<Category>;
  /** Returns the path of the category in the category tree. */
  path: Scalars['String']['output'];
  /** Retrieves a paged list of products associated with the category. */
  products: ProductConnection;
  /** The number of products that are associated with the category. */
  productsCount: Scalars['Long']['output'];
  /** The slug of the category. */
  slug: Scalars['String']['output'];
};


/** Represents a grouping of products within Thor Commerce, enabling merchants to organize and showcase items across storefronts and sales channels. Categories can be defined manually or dynamically via rules based on product attributes, tags, or metadata. Each category supports hierarchical relationships, custom fields, and localization to optimize navigation and personalize the shopping experience. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection: SortDirection;
  sortKey: ProductCategorySortKeys;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CategoryEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Category>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CategoryCreateError = DuplicateSlugError;

export type CategoryCreateInput = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCreatePayload = {
  __typename?: 'CategoryCreatePayload';
  category?: Maybe<Category>;
  errors?: Maybe<Array<CategoryCreateError>>;
};

export type CategoryDeleteError = CategoryNotFoundError;

export type CategoryDeleteInput = {
  /** The ID of the category to delete. */
  id: Scalars['ID']['input'];
};

export type CategoryDeletePayload = {
  __typename?: 'CategoryDeletePayload';
  category?: Maybe<Category>;
  errors?: Maybe<Array<CategoryDeleteError>>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
};

export type CategoryNotFoundError = UserError & {
  __typename?: 'CategoryNotFoundError';
  message: Scalars['String']['output'];
};

export type CategoryProductMoveInput = {
  newPosition: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
};

export type CategoryReorderProductsError = CategoryNotFoundError;

export type CategoryReorderProductsInput = {
  categoryId: Scalars['ID']['input'];
  moves: Array<CategoryProductMoveInput>;
};

export type CategoryReorderProductsPayload = {
  __typename?: 'CategoryReorderProductsPayload';
  category?: Maybe<Category>;
  errors?: Maybe<Array<CategoryReorderProductsError>>;
};

export type CategoryUpdateError = CategoryNotFoundError | DuplicateSlugError;

export type CategoryUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdatePayload = {
  __typename?: 'CategoryUpdatePayload';
  category?: Maybe<Category>;
  errors?: Maybe<Array<CategoryUpdateError>>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  /** The flags of the channel. */
  flags: Array<ChannelFlag>;
  /** The unique identifier of the channel. */
  id: Scalars['ID']['output'];
  /** The name of the channel. */
  name: Scalars['String']['output'];
  /** The slug of the channel. */
  slug: Scalars['String']['output'];
  /** The status of the channel. */
  status: ChannelStatus;
};

/** A connection to a list of items. */
export type ChannelConnection = {
  __typename?: 'ChannelConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ChannelEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Channel>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ChannelCreateError = ChannelNotFoundError;

export type ChannelCreateInput = {
  flags: Array<ChannelFlag>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ChannelStatus>;
};

export type ChannelCreatePayload = {
  __typename?: 'ChannelCreatePayload';
  channel?: Maybe<Channel>;
  errors?: Maybe<Array<ChannelCreateError>>;
};

export type ChannelDeleteError = ChannelNotFoundError;

export type ChannelDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ChannelDeletePayload = {
  __typename?: 'ChannelDeletePayload';
  channel?: Maybe<Channel>;
  errors?: Maybe<Array<ChannelDeleteError>>;
};

export type ChannelEdge = {
  __typename?: 'ChannelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Channel;
};

export enum ChannelFlag {
  Distribution = 'DISTRIBUTION',
  Price = 'PRICE',
  Supply = 'SUPPLY'
}

export type ChannelNotFoundError = UserError & {
  __typename?: 'ChannelNotFoundError';
  message: Scalars['String']['output'];
};

export enum ChannelStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ChannelUpdateError = ChannelNotFoundError;

export type ChannelUpdateInput = {
  flags?: InputMaybe<Array<ChannelFlag>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ChannelStatus>;
};

export type ChannelUpdatePayload = {
  __typename?: 'ChannelUpdatePayload';
  channel?: Maybe<Channel>;
  errors?: Maybe<Array<ChannelUpdateError>>;
};

/** Defines a set of products in our catalog that can be grouped either manually or automatically based on criteria such as tags, categories, or attributes. Collections enable flexible organization and presentation of items across storefronts, marketing campaigns, and custom sales channels. Manual collections let administrators assign products directly, while automated collections update dynamically as product data changes. */
export type Collection = Node & {
  __typename?: 'Collection';
  /** The unique identifier of the collection. */
  id: Scalars['ID']['output'];
  /** The name of the collection. */
  name: Scalars['String']['output'];
  /** A list of products associated with the collection. */
  products: ProductConnection;
  /** The number of products that are associated with the collection. */
  productsCount: Scalars['Long']['output'];
  /** The slug of the collection. */
  slug: Scalars['String']['output'];
};


/** Defines a set of products in our catalog that can be grouped either manually or automatically based on criteria such as tags, categories, or attributes. Collections enable flexible organization and presentation of items across storefronts, marketing campaigns, and custom sales channels. Manual collections let administrators assign products directly, while automated collections update dynamically as product data changes. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection: SortDirection;
  sortKey: ProductCollectionSortKeys;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CollectionEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Collection>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CollectionCreateError = DuplicateSlugError | InvalidSlugError | MaxLengthExceededError;

export type CollectionCreateInput = {
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionCreatePayload = {
  __typename?: 'CollectionCreatePayload';
  collection?: Maybe<Collection>;
  errors?: Maybe<Array<CollectionCreateError>>;
};

export type CollectionDeleteError = CollectionNotFoundError;

export type CollectionDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CollectionDeletePayload = {
  __typename?: 'CollectionDeletePayload';
  collection?: Maybe<Collection>;
  errors?: Maybe<Array<CollectionDeleteError>>;
};

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
};

export type CollectionNotFoundError = UserError & {
  __typename?: 'CollectionNotFoundError';
  message: Scalars['String']['output'];
};

export type CollectionProductMoveInput = {
  newPosition: Scalars['Int']['input'];
  productId: Scalars['ID']['input'];
};

export type CollectionReorderProductsError = CollectionNotFoundError;

export type CollectionReorderProductsInput = {
  collectionId: Scalars['ID']['input'];
  moves: Array<CollectionProductMoveInput>;
};

export type CollectionReorderProductsPayload = {
  __typename?: 'CollectionReorderProductsPayload';
  collection?: Maybe<Collection>;
  errors?: Maybe<Array<CollectionReorderProductsError>>;
};

export type CollectionUpdateError = CollectionNotFoundError | DuplicateSlugError | InvalidSlugError;

export type CollectionUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionUpdatePayload = {
  __typename?: 'CollectionUpdatePayload';
  collection?: Maybe<Collection>;
  errors?: Maybe<Array<CollectionUpdateError>>;
};

export type Column = {
  __typename?: 'Column';
  dataType: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CommentEvent = OrderEvent & {
  __typename?: 'CommentEvent';
  /** The comment of the order event. */
  comment: Scalars['String']['output'];
  /** The date and time when the order event was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user or system that created the order event. */
  createdBy: Scalars['String']['output'];
  /** The external identifier of the user who created the comment event, if available. */
  createdByExternalId?: Maybe<Scalars['String']['output']>;
  /** Email of the user who created the comment event, if available. */
  email?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the event. */
  id: Scalars['ID']['output'];
};

export type CreateApiKeyFailedError = UserError & {
  __typename?: 'CreateApiKeyFailedError';
  message: Scalars['String']['output'];
};

export type CreateApiKeyInvalidPermissionError = UserError & {
  __typename?: 'CreateApiKeyInvalidPermissionError';
  message: Scalars['String']['output'];
};

export type CreateApiKeyUserDoesNotHavePermissionToPerformActionError = UserError & {
  __typename?: 'CreateApiKeyUserDoesNotHavePermissionToPerformActionError';
  message: Scalars['String']['output'];
};

export type CreateStripeGatewayFailedError = UserError & {
  __typename?: 'CreateStripeGatewayFailedError';
  message: Scalars['String']['output'];
};

export type CreditCardPaymentMethod = PaymentMethod & {
  __typename?: 'CreditCardPaymentMethod';
  /** The expiration month of the credit card. */
  expMonth?: Maybe<Scalars['String']['output']>;
  /** The expiration year of the credit card. */
  expYear?: Maybe<Scalars['String']['output']>;
  /** The last 4 digits of the credit card. */
  last4?: Maybe<Scalars['String']['output']>;
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

export type Currency = {
  __typename?: 'Currency';
  /** The currency code compliant to ISO 4217. */
  code: Scalars['String']['output'];
  fractionDigits: Scalars['Int']['output'];
  /** The name of the currency. */
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CurrencyEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Currency>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Currency;
};

export type CustomPaymentMethod = PaymentMethod & {
  __typename?: 'CustomPaymentMethod';
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

export type Customer = Node & {
  __typename?: 'Customer';
  /** The addresses associated with the customer. */
  addresses: CustomerAddressConnection;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Retrieves a paged list of customers associated with the customer group. */
  customerGroups: CustomerGroupConnection;
  /** The default billing address associated with the customer. */
  defaultBillingAddress?: Maybe<CustomerAddress>;
  /** The default shipping address associated with the customer. */
  defaultShippingAddress?: Maybe<CustomerAddress>;
  /** The email address of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the customer has an associated account identity. */
  hasAccountIdentity: Scalars['Boolean']['output'];
  /** The unique identifier for the customer. */
  id: Scalars['ID']['output'];
  /** The date and time when the customer was last modified. */
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Gets the metadata associated with the customer. */
  metadata: Array<MetadataItem>;
  /** A list of orders associated with the customer. */
  orders: OrderConnection;
  /** The number of orders that are associated with the customer. */
  ordersCount: Scalars['Long']['output'];
};


export type CustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerCustomerGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type CustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<OrderSortKeys>;
};

export type CustomerAccountCreateError = CustomerAccountCreationFailedError | CustomerMissingEmailError | CustomerNotFoundError | InvalidPasswordError;

export type CustomerAccountCreateInput = {
  customerId: Scalars['ID']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type CustomerAccountCreatePayload = {
  __typename?: 'CustomerAccountCreatePayload';
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<CustomerAccountCreateError>>;
};

export type CustomerAccountCreationFailedError = UserError & {
  __typename?: 'CustomerAccountCreationFailedError';
  message: Scalars['String']['output'];
};

export type CustomerAddress = BaseAddress & Node & {
  __typename?: 'CustomerAddress';
  /** The first line of the address. */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. */
  address2?: Maybe<Scalars['String']['output']>;
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']['output']>;
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']['output']>;
  /** The two-letter code for the country of the address. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The email address of the address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Formatted address. */
  formatted?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the address. */
  id: Scalars['ID']['output'];
  /** The last name of the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Gets the metadata associated with the address. */
  metadata: Array<MetadataItem>;
  /** The name of the address. */
  name?: Maybe<Scalars['String']['output']>;
  /** The phone number of the address. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The zip or postal code of the address. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The region of the address, such as the province, state, or district. */
  state?: Maybe<Scalars['String']['output']>;
};


export type CustomerAddressMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A connection to a list of items. */
export type CustomerAddressConnection = {
  __typename?: 'CustomerAddressConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CustomerAddressEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<CustomerAddress>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CustomerAddressCreateError = AddressAlreadyExistsError | CustomerNotFoundError;

export type CustomerAddressCreateInput = {
  address: CustomerAddressInput;
  customerId: Scalars['ID']['input'];
};

export type CustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload';
  customerAddress?: Maybe<CustomerAddress>;
  errors?: Maybe<Array<CustomerAddressCreateError>>;
};

export type CustomerAddressDeleteError = AddressNotFoundError | CustomerNotFoundError;

export type CustomerAddressDeleteInput = {
  addressId: Scalars['ID']['input'];
  customerId: Scalars['ID']['input'];
};

export type CustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload';
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<CustomerAddressDeleteError>>;
};

export type CustomerAddressEdge = {
  __typename?: 'CustomerAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CustomerAddress;
};

export type CustomerAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isDefaultBilling?: InputMaybe<Scalars['Boolean']['input']>;
  isDefaultShipping?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerAddressUpdateError = AddressAlreadyExistsError | AddressNotFoundError | CustomerNotFoundError;

export type CustomerAddressUpdateInput = {
  address: CustomerAddressInput;
  addressId: Scalars['ID']['input'];
  customerId: Scalars['ID']['input'];
};

export type CustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload';
  customerAddress?: Maybe<CustomerAddress>;
  errors?: Maybe<Array<CustomerAddressUpdateError>>;
};

/** A connection to a list of items. */
export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CustomerEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Customer>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CustomerCreateError = EmailAlreadyInUseError;

export type CustomerCreateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata: Array<KeyValuePairOfStringAndStringInput>;
};

export type CustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload';
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<CustomerCreateError>>;
};

export type CustomerDeleteError = CustomerNotFoundError;

export type CustomerDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CustomerDeletePayload = {
  __typename?: 'CustomerDeletePayload';
  deletedCustomerId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<Array<CustomerDeleteError>>;
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Customer;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  /** Retrieves a paged list of customers associated with the customer group. */
  customers: CustomerConnection;
  /** The number of customers that are associated with the customer group. */
  customersCount: Scalars['Long']['output'];
  /** The description of the customer group. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the customer. */
  id: Scalars['ID']['output'];
  /** The name of the customer group. */
  name: Scalars['String']['output'];
};


export type CustomerGroupCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type CustomerGroupConnection = {
  __typename?: 'CustomerGroupConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CustomerGroupEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<CustomerGroup>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type CustomerGroupCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CustomerGroupCreatePayload = {
  __typename?: 'CustomerGroupCreatePayload';
  customerGroup?: Maybe<CustomerGroup>;
};

export type CustomerGroupDeleteError = CustomerGroupNotFoundError;

export type CustomerGroupDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CustomerGroupDeletePayload = {
  __typename?: 'CustomerGroupDeletePayload';
  deletedCustomerGroupId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<Array<CustomerGroupDeleteError>>;
};

export type CustomerGroupEdge = {
  __typename?: 'CustomerGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CustomerGroup;
};

export type CustomerGroupNotFoundError = UserError & {
  __typename?: 'CustomerGroupNotFoundError';
  message: Scalars['String']['output'];
};

export enum CustomerGroupSortKeys {
  Id = 'ID',
  Name = 'NAME'
}

export type CustomerGroupUpdateError = CustomerGroupNotFoundError;

export type CustomerGroupUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CustomerGroupUpdatePayload = {
  __typename?: 'CustomerGroupUpdatePayload';
  customerGroup?: Maybe<CustomerGroup>;
  errors?: Maybe<Array<CustomerGroupUpdateError>>;
};

export type CustomerGroupsNotFoundError = UserError & {
  __typename?: 'CustomerGroupsNotFoundError';
  message: Scalars['String']['output'];
};

export type CustomerMissingEmailError = UserError & {
  __typename?: 'CustomerMissingEmailError';
  message: Scalars['String']['output'];
};

export type CustomerNotFoundError = UserError & {
  __typename?: 'CustomerNotFoundError';
  message: Scalars['String']['output'];
};

export type CustomerPasswordResetError = CustomerNotFoundError | PasswordResetTokenCustomerNotFoundError | PasswordResetTokenGenerationFailedError;

export type CustomerPasswordResetInput = {
  customerId: Scalars['ID']['input'];
};

export type CustomerPasswordResetPayload = {
  __typename?: 'CustomerPasswordResetPayload';
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<CustomerPasswordResetError>>;
};

export enum CustomerSortKeys {
  Id = 'ID',
  Name = 'NAME'
}

export type CustomerUpdateError = CustomerGroupsNotFoundError | CustomerNotFoundError | EmailAlreadyInUseError;

export type CustomerUpdateInput = {
  customerGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
};

export type CustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload';
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<CustomerUpdateError>>;
};

export type DeleteApiKeyNotFoundError = UserError & {
  __typename?: 'DeleteApiKeyNotFoundError';
  message: Scalars['String']['output'];
};

export type DeleteUserFailedError = UserError & {
  __typename?: 'DeleteUserFailedError';
  message: Scalars['String']['output'];
};

export type DeleteUserNotFoundError = UserError & {
  __typename?: 'DeleteUserNotFoundError';
  message: Scalars['String']['output'];
};

export type DiscountApplication = {
  __typename?: 'DiscountApplication';
  /** The cart discount that was applied. If the original cart discount has been deleted, this field is null. */
  cartDiscount?: Maybe<CartDiscount>;
  /** The code of the discount that was applied. If it was an automatic discount, this field is null. */
  discountCode?: Maybe<Scalars['String']['output']>;
  /** The discounted amount. */
  discountedAmount: Money;
  /** The title of the discount that was applied. */
  label: Scalars['String']['output'];
  /** The value of the discount application, either absolute or relative (Money value). */
  value: DiscountApplicationValue;
};

/** A connection to a list of items. */
export type DiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<DiscountApplicationEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<DiscountApplication>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type DiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DiscountApplication;
};

/** The value of the discount application, either absolute or relative. */
export type DiscountApplicationValue = Money | RelativeValue;

export type DiscountCode = {
  __typename?: 'DiscountCode';
  /** The discount code applied to the cart. */
  code: Scalars['String']['output'];
  /** An error state describing why the discount code could not be applied, if applicable. */
  error?: Maybe<DiscountCodeError>;
};

export enum DiscountCodeError {
  ExcludedByDiscountPolicy = 'EXCLUDED_BY_DISCOUNT_POLICY',
  MaxApplicationsPerCustomerReached = 'MAX_APPLICATIONS_PER_CUSTOMER_REACHED',
  MaxApplicationsReached = 'MAX_APPLICATIONS_REACHED',
  None = 'NONE',
  NotFound = 'NOT_FOUND',
  NoMatch = 'NO_MATCH',
  Unknown = 'UNKNOWN'
}

/** Represents a discounted price for a product variant. */
export type DiscountedPrice = {
  __typename?: 'DiscountedPrice';
  /** used for fusion only. */
  discount: ProductDiscount;
  /** Money value of the discounted price. */
  value: Money;
};

export type DuplicateInventoryEntriesError = UserError & {
  __typename?: 'DuplicateInventoryEntriesError';
  message: Scalars['String']['output'];
};

export type DuplicateSkuError = UserError & {
  __typename?: 'DuplicateSkuError';
  message: Scalars['String']['output'];
};

export type DuplicateSlugError = UserError & {
  __typename?: 'DuplicateSlugError';
  message: Scalars['String']['output'];
};

export type DuplicateVariantCombinationError = UserError & {
  __typename?: 'DuplicateVariantCombinationError';
  message: Scalars['String']['output'];
};

export type EmailAlreadyInUseError = UserError & {
  __typename?: 'EmailAlreadyInUseError';
  message: Scalars['String']['output'];
};

export type ExactlyOneOfTwoRequiredError = UserError & {
  __typename?: 'ExactlyOneOfTwoRequiredError';
  message: Scalars['String']['output'];
};

export type ExternalTaxConfiguration = Node & {
  __typename?: 'ExternalTaxConfiguration';
  /** The external tax API URL. */
  externalApiUrl: Scalars['String']['output'];
  /** The unique identifier of the external tax configuration. */
  id: Scalars['ID']['output'];
  /** The store associated with this configuration. */
  store?: Maybe<Store>;
};

/** A connection to a list of items. */
export type ExternalTaxConfigurationConnection = {
  __typename?: 'ExternalTaxConfigurationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ExternalTaxConfigurationEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ExternalTaxConfiguration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ExternalTaxConfigurationCreateError = ExternalTaxConfigurationInvalidExternalApiUrlError;

export type ExternalTaxConfigurationCreateInput = {
  externalApiUrl: Scalars['String']['input'];
  storeId: Scalars['ID']['input'];
};

export type ExternalTaxConfigurationCreatePayload = {
  __typename?: 'ExternalTaxConfigurationCreatePayload';
  errors?: Maybe<Array<ExternalTaxConfigurationCreateError>>;
  externalTaxConfiguration?: Maybe<ExternalTaxConfiguration>;
};

export type ExternalTaxConfigurationDeleteError = ExternalTaxConfigurationNotFoundError;

export type ExternalTaxConfigurationDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ExternalTaxConfigurationDeletePayload = {
  __typename?: 'ExternalTaxConfigurationDeletePayload';
  errors?: Maybe<Array<ExternalTaxConfigurationDeleteError>>;
  externalTaxConfiguration?: Maybe<ExternalTaxConfiguration>;
};

export type ExternalTaxConfigurationEdge = {
  __typename?: 'ExternalTaxConfigurationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExternalTaxConfiguration;
};

export type ExternalTaxConfigurationInvalidExternalApiUrlError = UserError & {
  __typename?: 'ExternalTaxConfigurationInvalidExternalApiUrlError';
  externalApiUrl?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type ExternalTaxConfigurationNotFoundError = UserError & {
  __typename?: 'ExternalTaxConfigurationNotFoundError';
  message: Scalars['String']['output'];
};

export type ExternalTaxConfigurationUpdateError = ExternalTaxConfigurationInvalidExternalApiUrlError | ExternalTaxConfigurationNotFoundError;

export type ExternalTaxConfigurationUpdateInput = {
  externalApiUrl?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  storeId?: InputMaybe<Scalars['ID']['input']>;
};

export type ExternalTaxConfigurationUpdatePayload = {
  __typename?: 'ExternalTaxConfigurationUpdatePayload';
  errors?: Maybe<Array<ExternalTaxConfigurationUpdateError>>;
  externalTaxConfiguration?: Maybe<ExternalTaxConfiguration>;
};

export type Facet = Node & {
  __typename?: 'Facet';
  /** The field of the facet. */
  field: FacetField;
  /** The unique identifier for the facet. */
  id: Scalars['ID']['output'];
  /** The name of the facet. */
  name: Scalars['String']['output'];
  /** The values of the facet. */
  values: Array<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type FacetConnection = {
  __typename?: 'FacetConnection';
  /** A list of edges. */
  edges?: Maybe<Array<FacetEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Facet>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type FacetCreateInput = {
  field: FacetField;
  name: Scalars['String']['input'];
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FacetCreatePayload = {
  __typename?: 'FacetCreatePayload';
  facet?: Maybe<Facet>;
};

export type FacetDeleteError = FacetNotFoundError;

export type FacetDeleteInput = {
  id: Scalars['ID']['input'];
};

export type FacetDeletePayload = {
  __typename?: 'FacetDeletePayload';
  errors?: Maybe<Array<FacetDeleteError>>;
  facet?: Maybe<Facet>;
};

export type FacetEdge = {
  __typename?: 'FacetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Facet;
};

export enum FacetField {
  Price = 'PRICE',
  Tag = 'TAG',
  Vendor = 'VENDOR'
}

export type FacetNotFoundError = UserError & {
  __typename?: 'FacetNotFoundError';
  facetId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export type FacetReorderValuesError = FacetNotFoundError | FacetValueDoesNotExistError;

export type FacetReorderValuesInput = {
  facetId: Scalars['ID']['input'];
  moves: Array<FacetValueMoveInput>;
};

export type FacetReorderValuesPayload = {
  __typename?: 'FacetReorderValuesPayload';
  errors?: Maybe<Array<FacetReorderValuesError>>;
  facet?: Maybe<Facet>;
};

export type FacetUpdateError = FacetNotFoundError;

export type FacetUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FacetUpdatePayload = {
  __typename?: 'FacetUpdatePayload';
  errors?: Maybe<Array<FacetUpdateError>>;
  facet?: Maybe<Facet>;
};

export type FacetValueDoesNotExistError = UserError & {
  __typename?: 'FacetValueDoesNotExistError';
  message: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FacetValueMoveInput = {
  newPosition: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FileSizeLimitExceededError = UserError & {
  __typename?: 'FileSizeLimitExceededError';
  message: Scalars['String']['output'];
};

export type FulfillmentInvalidLinesError = UserError & {
  __typename?: 'FulfillmentInvalidLinesError';
  message: Scalars['String']['output'];
  orderId: Scalars['ID']['output'];
  reason: Scalars['String']['output'];
};

export type FulfillmentInvalidUpdateError = UserError & {
  __typename?: 'FulfillmentInvalidUpdateError';
  fulfillmentId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  reason: Scalars['String']['output'];
};

export type FulfillmentNotFoundError = UserError & {
  __typename?: 'FulfillmentNotFoundError';
  fulfillmentId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export enum FulfillmentStatus {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Ready = 'READY',
  Shipped = 'SHIPPED'
}

export type InvalidAllocatedQuantityError = UserError & {
  __typename?: 'InvalidAllocatedQuantityError';
  message: Scalars['String']['output'];
};

export type InvalidAllocationStrategyError = UserError & {
  __typename?: 'InvalidAllocationStrategyError';
  message: Scalars['String']['output'];
};

export type InvalidDistributionChannelsError = UserError & {
  __typename?: 'InvalidDistributionChannelsError';
  message: Scalars['String']['output'];
};

export type InvalidInventoryQuantityError = UserError & {
  __typename?: 'InvalidInventoryQuantityError';
  message: Scalars['String']['output'];
};

export type InvalidInventorySupplyChannelsError = UserError & {
  __typename?: 'InvalidInventorySupplyChannelsError';
  message: Scalars['String']['output'];
};

export type InvalidPasswordError = UserError & {
  __typename?: 'InvalidPasswordError';
  message: Scalars['String']['output'];
};

export type InvalidPriceChannelsError = UserError & {
  __typename?: 'InvalidPriceChannelsError';
  message: Scalars['String']['output'];
};

export type InvalidSlugError = UserError & {
  __typename?: 'InvalidSlugError';
  message: Scalars['String']['output'];
};

export type InvalidSupplyChannelsError = UserError & {
  __typename?: 'InvalidSupplyChannelsError';
  message: Scalars['String']['output'];
};

export type InvalidUrlError = UserError & {
  __typename?: 'InvalidUrlError';
  message: Scalars['String']['output'];
};

export enum InventoryAllocationStrategy {
  None = 'NONE',
  Track = 'TRACK',
  TrackAndAllocate = 'TRACK_AND_ALLOCATE'
}

export type InventoryEntriesHaveAllocatedQuantityError = UserError & {
  __typename?: 'InventoryEntriesHaveAllocatedQuantityError';
  message: Scalars['String']['output'];
};

export type InventoryEntriesNotFoundError = UserError & {
  __typename?: 'InventoryEntriesNotFoundError';
  message: Scalars['String']['output'];
};

export type InventoryEntry = Node & {
  __typename?: 'InventoryEntry';
  /** The allocation strategy of the inventory entry. */
  allocationStrategy: InventoryAllocationStrategy;
  /** The date and time the inventory entry was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the inventory entry. */
  id: Scalars['ID']['output'];
  /** The date and time the inventory entry was last modified. */
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Custom metadata key/value pairs for the inventory entry. */
  metadata: Array<MetadataItem>;
  /** The quantity of the inventory entry. */
  quantity: Scalars['Int']['output'];
  /** The quantity allocated of the inventory entry. */
  quantityAllocated: Scalars['Int']['output'];
  /** The SKU of the inventory entry. */
  sku: Scalars['String']['output'];
  /** Channel that supplies this InventoryEntry. */
  supplyChannel?: Maybe<Channel>;
};


export type InventoryEntryMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type InventoryEntryBulkCreateError = DuplicateInventoryEntriesError | InvalidInventorySupplyChannelsError;

export type InventoryEntryBulkCreateInput = {
  entries: Array<InventoryEntryCreateInput>;
};

export type InventoryEntryBulkCreatePayload = {
  __typename?: 'InventoryEntryBulkCreatePayload';
  entries?: Maybe<Array<InventoryEntry>>;
  errors?: Maybe<Array<InventoryEntryBulkCreateError>>;
};

export type InventoryEntryBulkDeleteError = InventoryEntriesHaveAllocatedQuantityError | InventoryEntriesNotFoundError;

export type InventoryEntryBulkDeleteInput = {
  ids: Array<Scalars['ID']['input']>;
};

export type InventoryEntryBulkDeletePayload = {
  __typename?: 'InventoryEntryBulkDeletePayload';
  errors?: Maybe<Array<InventoryEntryBulkDeleteError>>;
  ids?: Maybe<Array<Scalars['ID']['output']>>;
};

export type InventoryEntryBulkUpdateError = BulkUpdateValidationFailedError | InvalidAllocatedQuantityError | InvalidAllocationStrategyError | InvalidInventoryQuantityError | InventoryEntriesNotFoundError;

export type InventoryEntryBulkUpdateInput = {
  entries: Array<InventoryEntryUpdateInput>;
};

export type InventoryEntryBulkUpdatePayload = {
  __typename?: 'InventoryEntryBulkUpdatePayload';
  errors?: Maybe<Array<InventoryEntryBulkUpdateError>>;
  inventoryEntry?: Maybe<Array<InventoryEntry>>;
};

/** A connection to a list of items. */
export type InventoryEntryConnection = {
  __typename?: 'InventoryEntryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<InventoryEntryEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<InventoryEntry>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type InventoryEntryCreateInput = {
  allocationStrategy: InventoryAllocationStrategy;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  quantity: Scalars['Int']['input'];
  sku: Scalars['String']['input'];
  supplyChannelId?: InputMaybe<Scalars['ID']['input']>;
};

export type InventoryEntryDeleteError = InventoryEntryHasAllocatedQuantityError | InventoryEntryNotFoundError;

export type InventoryEntryDeleteInput = {
  id: Scalars['ID']['input'];
};

export type InventoryEntryDeletePayload = {
  __typename?: 'InventoryEntryDeletePayload';
  errors?: Maybe<Array<InventoryEntryDeleteError>>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InventoryEntryEdge = {
  __typename?: 'InventoryEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: InventoryEntry;
};

export type InventoryEntryHasAllocatedQuantityError = UserError & {
  __typename?: 'InventoryEntryHasAllocatedQuantityError';
  message: Scalars['String']['output'];
};

export type InventoryEntryNotFoundError = UserError & {
  __typename?: 'InventoryEntryNotFoundError';
  message: Scalars['String']['output'];
};

export type InventoryEntryUpdateError = InvalidAllocatedQuantityError | InvalidAllocationStrategyError | InvalidInventoryQuantityError | InventoryEntryNotFoundError;

export type InventoryEntryUpdateInput = {
  allocationStrategy?: InputMaybe<InventoryAllocationStrategy>;
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantityAllocated?: InputMaybe<Scalars['Int']['input']>;
};

export type InventoryEntryUpdatePayload = {
  __typename?: 'InventoryEntryUpdatePayload';
  errors?: Maybe<Array<InventoryEntryUpdateError>>;
  inventoryEntry?: Maybe<InventoryEntry>;
};

export type KeyValuePairOfStringAndStringInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type KlarnaPaymentMethod = PaymentMethod & {
  __typename?: 'KlarnaPaymentMethod';
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

export type LineItemTargetInput = {
  predicate: Scalars['String']['input'];
};

/** Represents the shipping method associated with a cart shipping line. */
export type LineShippingMethod = {
  __typename?: 'LineShippingMethod';
  /** The SKU of the shipping method, if any. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the shipping method. */
  id: Scalars['ID']['output'];
  /** Get the metadata associated with the shipping method. This can include additional information such as custom attributes or tags. */
  metadata: Array<MetadataItem>;
  /** The display name of the shipping method. */
  name: Scalars['String']['output'];
  /** The SKU of the shipping method, if any. */
  sku?: Maybe<Scalars['String']['output']>;
};


/** Represents the shipping method associated with a cart shipping line. */
export type LineShippingMethodMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type LinkPaymentMethod = PaymentMethod & {
  __typename?: 'LinkPaymentMethod';
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

export type ManualPaymentGateway = PaymentGateway & {
  __typename?: 'ManualPaymentGateway';
  /** Defines if the payment gateway supports capturing payments. */
  canCapture: Scalars['Boolean']['output'];
  /** Defines if the payment gateway supports refunding payments. */
  canRefund: Scalars['Boolean']['output'];
  /** The channel IDs associated with the payment gateway. */
  channelIds: Array<Scalars['ID']['output']>;
  /** The unique identifier of the payment gateway. */
  id: Scalars['ID']['output'];
  /** Gets the name of the payment gateway. */
  name: Scalars['String']['output'];
};

export type ManualPaymentGatewayInput = {
  name: Scalars['String']['input'];
};

export type MaxLengthExceededError = UserError & {
  __typename?: 'MaxLengthExceededError';
  message: Scalars['String']['output'];
};

export type Media = Node & {
  __typename?: 'Media';
  /** The content type of the media. */
  contentType: Scalars['String']['output'];
  /** The file extension of the media. */
  fileExtension: Scalars['String']['output'];
  /** The file name of the media. */
  fileName: Scalars['String']['output'];
  /** The hash of the media. */
  hash: Scalars['String']['output'];
  /** The unique identifier of the media. */
  id: Scalars['ID']['output'];
  /** Returns the source URL of the media. */
  src: Scalars['String']['output'];
  /** The Version of the media. */
  version: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MediaEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Media>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type MediaCreateError = FileSizeLimitExceededError;

export type MediaCreateInput = {
  file?: InputMaybe<Scalars['Upload']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MediaCreatePayload = {
  __typename?: 'MediaCreatePayload';
  errors?: Maybe<Array<MediaCreateError>>;
  media?: Maybe<Media>;
};

export type MediaDeleteError = MediaNotFoundError;

export type MediaDeleteInput = {
  id: Scalars['ID']['input'];
};

export type MediaDeletePayload = {
  __typename?: 'MediaDeletePayload';
  errors?: Maybe<Array<MediaDeleteError>>;
  media?: Maybe<Media>;
};

export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Media;
};

export type MediaNotFoundError = UserError & {
  __typename?: 'MediaNotFoundError';
  message: Scalars['String']['output'];
};

export type MediaSortOrderChangeInput = {
  mediaId: Scalars['ID']['input'];
  newSortOrder: Scalars['Int']['input'];
};

/** Represents a key-value pair of metadata associated with an entity, providing additional information or attributes that can be used for various purposes such as filtering, categorization, or display. */
export type MetadataItem = {
  __typename?: 'MetadataItem';
  /** Gets the key of the metadata item, which serves as an identifier for the type of metadata being represented. */
  key: Scalars['String']['output'];
  /** Gets the value of the metadata item, which contains the specific information or attribute associated with the key. */
  value: Scalars['String']['output'];
};

export type MobilepayPaymentMethod = PaymentMethod & {
  __typename?: 'MobilepayPaymentMethod';
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

/** The monetary value in the smallest unit of the currency. */
export type Money = {
  __typename?: 'Money';
  /** The amount of money in the smallest unit of the currency. For example, 100 cents in USD. */
  centAmount: Scalars['Long']['output'];
  /** The three-letter currency code that represents a world currency used in a store. Currency codes include standard ISO 4217 codes, legacy codes, and non-standard codes. For example, USD. */
  currencyCode: Scalars['String']['output'];
  /** The number of digits after the decimal separator in the currency. For example, 2 for USD and 0 for JPY. */
  fractionDigits: Scalars['Int']['output'];
};

export type MoneyInput = {
  centAmount: Scalars['Long']['input'];
  currencyCode: Scalars['String']['input'];
};

/** Mutations for managing API Keys. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new API key. */
  apiKeyCreate: ApiKeyCreatePayload;
  /** Deletes an API key by id. */
  apiKeyDelete: ApiKeyDeletePayload;
  /** Updates an existing API key. */
  apiKeyUpdate: ApiKeyUpdatePayload;
  attributeAssignmentsAdd: AttributeAssignmentsAddPayload;
  attributeAssignmentsRemove: AttributeAssignmentsRemovePayload;
  attributeAssignmentsReorder: AttributeAssignmentsReorderPayload;
  attributeCreate: AttributeCreatePayload;
  attributeDelete: AttributeDeletePayload;
  attributeUpdate: AttributeUpdatePayload;
  attributeValuesBulkCreate: AttributeValuesBulkCreatePayload;
  attributeValuesBulkDelete: AttributeValuesBulkDeletePayload;
  attributeValuesBulkUpdate: AttributeValuesBulkUpdatePayload;
  cartCustomLineItemsAdd: CartCustomLineItemsAddPayload;
  cartCustomShippingLinesSet: CartCustomShippingLinesSetPayload;
  cartDiscountCodeCreate: CartDiscountCodeCreatePayload;
  cartDiscountCodeDelete: CartDiscountCodeDeletePayload;
  cartDiscountCodeUpdate: CartDiscountCodeUpdatePayload;
  cartDiscountCreate: CartDiscountCreatePayload;
  cartDiscountDelete: CartDiscountDeletePayload;
  cartDiscountGroupCreate: CartDiscountGroupCreatePayload;
  cartDiscountGroupDelete: CartDiscountGroupDeletePayload;
  cartDiscountGroupMemberAdd: CartDiscountGroupMemberAddPayload;
  cartDiscountGroupMemberRemove: CartDiscountGroupMemberRemovePayload;
  cartDiscountGroupMembersReorder: CartDiscountGroupMembersReorderPayload;
  cartDiscountGroupUpdate: CartDiscountGroupUpdatePayload;
  cartDiscountUpdate: CartDiscountUpdatePayload;
  /** Creates a new category */
  categoryCreate: CategoryCreatePayload;
  /** Deletes a category by its ID. */
  categoryDelete: CategoryDeletePayload;
  /** Reorders products within a category. */
  categoryReorderProducts: CategoryReorderProductsPayload;
  /** Updates an existing category. */
  categoryUpdate: CategoryUpdatePayload;
  channelCreate: ChannelCreatePayload;
  channelDelete: ChannelDeletePayload;
  channelUpdate: ChannelUpdatePayload;
  collectionCreate: CollectionCreatePayload;
  collectionDelete: CollectionDeletePayload;
  collectionReorderProducts: CollectionReorderProductsPayload;
  collectionUpdate: CollectionUpdatePayload;
  customerAccountCreate: CustomerAccountCreatePayload;
  customerAddressCreate: CustomerAddressCreatePayload;
  customerAddressDelete: CustomerAddressDeletePayload;
  customerAddressUpdate: CustomerAddressUpdatePayload;
  customerCreate: CustomerCreatePayload;
  customerDelete: CustomerDeletePayload;
  customerGroupCreate: CustomerGroupCreatePayload;
  customerGroupDelete: CustomerGroupDeletePayload;
  customerGroupUpdate: CustomerGroupUpdatePayload;
  customerPasswordReset: CustomerPasswordResetPayload;
  customerUpdate: CustomerUpdatePayload;
  externalTaxConfigurationCreate: ExternalTaxConfigurationCreatePayload;
  externalTaxConfigurationDelete: ExternalTaxConfigurationDeletePayload;
  externalTaxConfigurationUpdate: ExternalTaxConfigurationUpdatePayload;
  facetCreate: FacetCreatePayload;
  facetDelete: FacetDeletePayload;
  facetReorderValues: FacetReorderValuesPayload;
  facetUpdate: FacetUpdatePayload;
  inventoryEntryBulkCreate: InventoryEntryBulkCreatePayload;
  inventoryEntryBulkDelete: InventoryEntryBulkDeletePayload;
  inventoryEntryBulkUpdate: InventoryEntryBulkUpdatePayload;
  inventoryEntryDelete: InventoryEntryDeletePayload;
  inventoryEntryUpdate: InventoryEntryUpdatePayload;
  mediaCreate: MediaCreatePayload;
  mediaDelete: MediaDeletePayload;
  orderCommentAdd: OrderCommentAddPayload;
  orderCustomerAdd: OrderCustomerAddPayload;
  orderCustomerRemove: OrderCustomerRemovePayload;
  orderFulfillmentCreate: OrderFulfillmentCreatePayload;
  orderFulfillmentUpdate: OrderFulfillmentUpdatePayload;
  orderUpdate: OrderUpdatePayload;
  paymentCancel: PaymentCancelPayload;
  paymentCapture: PaymentCapturePayload;
  paymentCreate: PaymentCreatePayload;
  paymentGatewayCreate: PaymentGatewayCreatePayload;
  paymentGatewayDelete: PaymentGatewayDeletePayload;
  paymentRefund: PaymentRefundPayload;
  productCreate: ProductCreatePayload;
  productDelete: ProductDeletePayload;
  productDiscountCreate: ProductDiscountCreatePayload;
  productDiscountDelete: ProductDiscountDeletePayload;
  productDiscountRefresh: ProductDiscountRefreshPayload;
  productDiscountUpdate: ProductDiscountUpdatePayload;
  productPublish: ProductPublishPayload;
  productUnpublish: ProductUnpublishPayload;
  productUpdate: ProductUpdatePayload;
  productVariantPriceCreate: ProductVariantPriceCreatePayload;
  productVariantPriceDelete: ProductVariantPriceDeletePayload;
  productVariantPriceUpdate: ProductVariantPriceUpdatePayload;
  productVariantPricesBulkCreate: ProductVariantPricesBulkCreatePayload;
  productVariantPricesBulkDelete: ProductVariantPricesBulkDeletePayload;
  productVariantPricesBulkUpdate: ProductVariantPricesBulkUpdatePayload;
  productVariantPublish: ProductVariantPublishPayload;
  productVariantUnpublish: ProductVariantUnpublishPayload;
  productVariantsBulkCreate: ProductVariantsBulkCreatePayload;
  productVariantsBulkDelete: ProductVariantsBulkDeletePayload;
  productVariantsBulkUpdate: ProductVariantsBulkUpdatePayload;
  productVariantsMediaAdd: ProductVariantsMediaAddPayload;
  productVariantsMediaRemove: ProductVariantsMediaRemovePayload;
  productVariantsMediaReorder: ProductVariantsMediaReorderPayload;
  productVariantsReorder: ProductVariantsReorderPayload;
  shippingMethodCreate: ShippingMethodCreatePayload;
  shippingMethodDelete: ShippingMethodDeletePayload;
  shippingMethodRateAdd: ShippingMethodRateAddPayload;
  shippingMethodRateDelete: ShippingMethodRateDeletePayload;
  shippingMethodRateReorder: ShippingMethodRateReorderPayload;
  shippingMethodRateUpdate: ShippingMethodRateUpdatePayload;
  shippingMethodUpdate: ShippingMethodUpdatePayload;
  shippingZoneCreate: ShippingZoneCreatePayload;
  shippingZoneDelete: ShippingZoneDeletePayload;
  shippingZoneLocationsAdd: ShippingZoneLocationsAddPayload;
  shippingZoneLocationsRemove: ShippingZoneLocationsRemovePayload;
  shippingZoneUpdate: ShippingZoneUpdatePayload;
  storeCreate: StoreCreatePayload;
  storeDelete: StoreDeletePayload;
  storeUpdate: StoreUpdatePayload;
  /** Deletes a user. */
  userDelete: UserDeletePayload;
  /** Invites a new user to the organization. */
  userInvite: UserInvitePayload;
  /** Updates the current authenticated user's own profile (name only). */
  userSelfUpdate: UserSelfUpdatePayload;
  /** Updates an existing user (name, roles). */
  userUpdate: UserUpdatePayload;
  webhookDeliveryResend: WebhookDeliveryResendPayload;
  webhookSubscriptionCreate: WebhookSubscriptionCreatePayload;
  webhookSubscriptionDelete: WebhookSubscriptionDeletePayload;
  webhookSubscriptionUpdate: WebhookSubscriptionUpdatePayload;
};


/** Mutations for managing API Keys. */
export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationApiKeyDeleteArgs = {
  input: ApiKeyDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationApiKeyUpdateArgs = {
  input: ApiKeyUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeAssignmentsAddArgs = {
  input: AttributeAssignmentsAddInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeAssignmentsRemoveArgs = {
  input: AttributeAssignmentsRemoveInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeAssignmentsReorderArgs = {
  input: AttributeAssignmentsReorderInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeDeleteArgs = {
  input: AttributeDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeUpdateArgs = {
  input: AttributeUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeValuesBulkCreateArgs = {
  input: AttributeValuesBulkCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeValuesBulkDeleteArgs = {
  input: AttributeValuesBulkDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationAttributeValuesBulkUpdateArgs = {
  input: AttributeValuesBulkUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCartCustomLineItemsAddArgs = {
  input: CartCustomLineItemsAddInput;
};


/** Mutations for managing API Keys. */
export type MutationCartCustomShippingLinesSetArgs = {
  input: CartCustomShippingLinesSetInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountCodeCreateArgs = {
  input: CartDiscountCodeCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountCodeDeleteArgs = {
  input: CartDiscountCodeDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountCodeUpdateArgs = {
  input: CartDiscountCodeUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountCreateArgs = {
  input: CartDiscountCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountDeleteArgs = {
  input: CartDiscountDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountGroupCreateArgs = {
  input: CartDiscountGroupCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountGroupDeleteArgs = {
  input: CartDiscountGroupDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountGroupMemberAddArgs = {
  input: CartDiscountGroupMemberAddInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountGroupMemberRemoveArgs = {
  input: CartDiscountGroupMemberRemoveInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountGroupMembersReorderArgs = {
  input: CartDiscountGroupMembersReorderInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountGroupUpdateArgs = {
  input: CartDiscountGroupUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCartDiscountUpdateArgs = {
  input: CartDiscountUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCategoryCreateArgs = {
  input: CategoryCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCategoryDeleteArgs = {
  input: CategoryDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCategoryReorderProductsArgs = {
  input: CategoryReorderProductsInput;
};


/** Mutations for managing API Keys. */
export type MutationCategoryUpdateArgs = {
  input: CategoryUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationChannelCreateArgs = {
  input: ChannelCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationChannelDeleteArgs = {
  input: ChannelDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationChannelUpdateArgs = {
  input: ChannelUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCollectionDeleteArgs = {
  input: CollectionDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCollectionReorderProductsArgs = {
  input: CollectionReorderProductsInput;
};


/** Mutations for managing API Keys. */
export type MutationCollectionUpdateArgs = {
  input: CollectionUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerAccountCreateArgs = {
  input: CustomerAccountCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerAddressCreateArgs = {
  input: CustomerAddressCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerAddressDeleteArgs = {
  input: CustomerAddressDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerAddressUpdateArgs = {
  input: CustomerAddressUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerCreateArgs = {
  input: CustomerCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerDeleteArgs = {
  input: CustomerDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerGroupCreateArgs = {
  input: CustomerGroupCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerGroupDeleteArgs = {
  input: CustomerGroupDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerGroupUpdateArgs = {
  input: CustomerGroupUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerPasswordResetArgs = {
  input: CustomerPasswordResetInput;
};


/** Mutations for managing API Keys. */
export type MutationCustomerUpdateArgs = {
  input: CustomerUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationExternalTaxConfigurationCreateArgs = {
  input: ExternalTaxConfigurationCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationExternalTaxConfigurationDeleteArgs = {
  input: ExternalTaxConfigurationDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationExternalTaxConfigurationUpdateArgs = {
  input: ExternalTaxConfigurationUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationFacetCreateArgs = {
  input: FacetCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationFacetDeleteArgs = {
  input: FacetDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationFacetReorderValuesArgs = {
  input: FacetReorderValuesInput;
};


/** Mutations for managing API Keys. */
export type MutationFacetUpdateArgs = {
  input: FacetUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationInventoryEntryBulkCreateArgs = {
  input: InventoryEntryBulkCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationInventoryEntryBulkDeleteArgs = {
  input: InventoryEntryBulkDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationInventoryEntryBulkUpdateArgs = {
  input: InventoryEntryBulkUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationInventoryEntryDeleteArgs = {
  input: InventoryEntryDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationInventoryEntryUpdateArgs = {
  input: InventoryEntryUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationMediaCreateArgs = {
  input?: InputMaybe<MediaCreateInput>;
};


/** Mutations for managing API Keys. */
export type MutationMediaDeleteArgs = {
  input?: InputMaybe<MediaDeleteInput>;
};


/** Mutations for managing API Keys. */
export type MutationOrderCommentAddArgs = {
  input: OrderCommentAddInput;
};


/** Mutations for managing API Keys. */
export type MutationOrderCustomerAddArgs = {
  input: OrderCustomerAddInput;
};


/** Mutations for managing API Keys. */
export type MutationOrderCustomerRemoveArgs = {
  input: OrderCustomerRemoveInput;
};


/** Mutations for managing API Keys. */
export type MutationOrderFulfillmentCreateArgs = {
  input: OrderFulfillmentCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationOrderFulfillmentUpdateArgs = {
  input: OrderFulfillmentUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationOrderUpdateArgs = {
  input: OrderUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationPaymentCancelArgs = {
  input: PaymentCancelInput;
};


/** Mutations for managing API Keys. */
export type MutationPaymentCaptureArgs = {
  input: PaymentCaptureInput;
};


/** Mutations for managing API Keys. */
export type MutationPaymentCreateArgs = {
  input: PaymentCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationPaymentGatewayCreateArgs = {
  input: PaymentGatewayCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationPaymentGatewayDeleteArgs = {
  input: PaymentGatewayDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationPaymentRefundArgs = {
  input: PaymentRefundInput;
};


/** Mutations for managing API Keys. */
export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductDeleteArgs = {
  input: ProductDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationProductDiscountCreateArgs = {
  input: ProductDiscountCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductDiscountDeleteArgs = {
  input: ProductDiscountDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationProductDiscountUpdateArgs = {
  input: ProductDiscountUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductPublishArgs = {
  input: ProductPublishInput;
};


/** Mutations for managing API Keys. */
export type MutationProductUnpublishArgs = {
  input: ProductUnpublishInput;
};


/** Mutations for managing API Keys. */
export type MutationProductUpdateArgs = {
  input: ProductUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPriceCreateArgs = {
  input: ProductVariantPriceCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPriceDeleteArgs = {
  input: ProductVariantPriceDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPriceUpdateArgs = {
  input: ProductVariantPriceUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPricesBulkCreateArgs = {
  input: ProductVariantPricesBulkCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPricesBulkDeleteArgs = {
  input: ProductVariantPricesBulkDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPricesBulkUpdateArgs = {
  input: ProductVariantPricesBulkUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantPublishArgs = {
  input: ProductVariantPublishInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantUnpublishArgs = {
  input: ProductVariantUnpublishInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsBulkCreateArgs = {
  input: ProductVariantsBulkCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsBulkDeleteArgs = {
  input: ProductVariantsBulkDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsBulkUpdateArgs = {
  input: ProductVariantsBulkUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsMediaAddArgs = {
  input: ProductVariantsMediaAddInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsMediaRemoveArgs = {
  input: ProductVariantsMediaRemoveInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsMediaReorderArgs = {
  input: ProductVariantsMediaReorderInput;
};


/** Mutations for managing API Keys. */
export type MutationProductVariantsReorderArgs = {
  input: ProductVariantsReorderInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodCreateArgs = {
  input: ShippingMethodCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodDeleteArgs = {
  input: ShippingMethodDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodRateAddArgs = {
  input: ShippingMethodRateAddInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodRateDeleteArgs = {
  input: ShippingMethodRateDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodRateReorderArgs = {
  input: ShippingMethodRateReorderInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodRateUpdateArgs = {
  input: ShippingMethodRateUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingMethodUpdateArgs = {
  input: ShippingMethodUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingZoneDeleteArgs = {
  input: ShippingZoneDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingZoneLocationsAddArgs = {
  input: ShippingZoneLocationsAddInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingZoneLocationsRemoveArgs = {
  input: ShippingZoneLocationsRemoveInput;
};


/** Mutations for managing API Keys. */
export type MutationShippingZoneUpdateArgs = {
  input: ShippingZoneUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationStoreCreateArgs = {
  input: StoreCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationStoreDeleteArgs = {
  input: StoreDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationStoreUpdateArgs = {
  input: StoreUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationUserDeleteArgs = {
  input: UserDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationUserInviteArgs = {
  input: UserInviteInput;
};


/** Mutations for managing API Keys. */
export type MutationUserSelfUpdateArgs = {
  input: UserSelfUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};


/** Mutations for managing API Keys. */
export type MutationWebhookDeliveryResendArgs = {
  input: WebhookDeliveryResendInput;
};


/** Mutations for managing API Keys. */
export type MutationWebhookSubscriptionCreateArgs = {
  input: WebhookSubscriptionCreateInput;
};


/** Mutations for managing API Keys. */
export type MutationWebhookSubscriptionDeleteArgs = {
  input: WebhookSubscriptionDeleteInput;
};


/** Mutations for managing API Keys. */
export type MutationWebhookSubscriptionUpdateArgs = {
  input: WebhookSubscriptionUpdateInput;
};

export type NoEventsProvidedError = UserError & {
  __typename?: 'NoEventsProvidedError';
  message: Scalars['String']['output'];
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID']['output'];
};

export type OneOfExpectationError = UserError & {
  __typename?: 'OneOfExpectationError';
  message: Scalars['String']['output'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** Gets the billing address associated with the order. This may be the same as the shipping address. */
  billingAddress?: Maybe<OrderAddress>;
  /** The date and time when the order was created. */
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  /** Retrieves a paginated list of discount applications for the order */
  discountApplications: DiscountApplicationConnection;
  /** Retrieves a paginated list of events for a specific order. */
  events: OrderEventConnection;
  /** The external reference for the order. */
  externalReference?: Maybe<Scalars['String']['output']>;
  /** Gets the fulfillments associated with the order. */
  fulfillments: Array<OrderFulfillment>;
  /** The unique identifier for the order. */
  id: Scalars['ID']['output'];
  /** Indicates whether the payment for the order is secured. */
  isPaymentSecured: Scalars['Boolean']['output'];
  /** Retrieves a paginated list of line items for a specific order. */
  lineItems: OrderLineItemConnection;
  /** Sum of all LineItem quantities. */
  lineItemsQuantity: Scalars['Long']['output'];
  /** Gets the metadata associated with the order. */
  metadata: Array<MetadataItem>;
  /** The order number. */
  orderNumber: Scalars['Int']['output'];
  /** Current status of the Order. */
  orderState: OrderState;
  /** Payment status of the Order. */
  paymentState: PaymentState;
  /** Retrieves a paginated list of payments for a specific order. */
  payments: PaymentConnection;
  /** Shipment status of the Order. */
  shipmentState: ShipmentState;
  /** Gets the shipping address associated with the order. */
  shippingAddress?: Maybe<OrderAddress>;
  /** Gets the shipping lines associated with the order. */
  shippingLines: Array<OrderShippingLine>;
  /** Gets the store associated with the cart. */
  store?: Maybe<Store>;
  /** Gets the total price of the order before discounts and taxes. */
  subtotal: Money;
  /** Gets the taxed price of the order. This may be null if the order does not yet have a taxed price. */
  taxedPrice?: Maybe<TaxedPrice>;
  /** Gets the total price of the order after discounts and taxes. */
  total: Money;
};


export type OrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type OrderMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type OrderPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderAddress = BaseAddress & {
  __typename?: 'OrderAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']['output']>;
  /** Name of the city. */
  city?: Maybe<Scalars['String']['output']>;
  /** Name of the company. */
  company?: Maybe<Scalars['String']['output']>;
  /** Two-digit country code as per  ISO 3166-1 alpha-2 */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Email address of the contact. */
  email?: Maybe<Scalars['String']['output']>;
  /** Given name (first name) of the contact. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** Formatted address. */
  formatted?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the address. */
  id: Scalars['ID']['output'];
  /** Family name (last name) of the contact. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Gets the metadata associated with the address. */
  metadata: Array<MetadataItem>;
  /** Phone number of the contact. */
  phone?: Maybe<Scalars['String']['output']>;
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** Name of the state, for example, Colorado. */
  state?: Maybe<Scalars['String']['output']>;
};


export type OrderAddressMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderAlreadyHasCustomerError = UserError & {
  __typename?: 'OrderAlreadyHasCustomerError';
  message: Scalars['String']['output'];
  orderId: Scalars['ID']['output'];
};

export type OrderCommentAddError = OrderNotFoundError;

export type OrderCommentAddInput = {
  comment: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};

export type OrderCommentAddPayload = {
  __typename?: 'OrderCommentAddPayload';
  errors?: Maybe<Array<OrderCommentAddError>>;
  orderEvent?: Maybe<OrderEvent>;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrderEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type OrderCustomerAddError = OrderAlreadyHasCustomerError | OrderCustomerNotFoundError | OrderNotFoundError;

export type OrderCustomerAddInput = {
  customerId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};

export type OrderCustomerAddPayload = {
  __typename?: 'OrderCustomerAddPayload';
  errors?: Maybe<Array<OrderCustomerAddError>>;
  order?: Maybe<Order>;
};

export type OrderCustomerNotFoundError = UserError & {
  __typename?: 'OrderCustomerNotFoundError';
  customerId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export type OrderCustomerRemoveError = OrderHasNoCustomerError | OrderNotFoundError;

export type OrderCustomerRemoveInput = {
  orderId: Scalars['ID']['input'];
};

export type OrderCustomerRemovePayload = {
  __typename?: 'OrderCustomerRemovePayload';
  errors?: Maybe<Array<OrderCustomerRemoveError>>;
  order?: Maybe<Order>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderEvent = {
  /** The date and time when the order event was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user or system that created the order event. */
  createdBy: Scalars['String']['output'];
  /** The unique identifier for the event. */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type OrderEventConnection = {
  __typename?: 'OrderEventConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrderEventEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<OrderEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type OrderEventEdge = {
  __typename?: 'OrderEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderEvent;
};

export type OrderFulfillment = Node & {
  __typename?: 'OrderFulfillment';
  /** Gets the carrier name responsible for the fulfillment. */
  carrier?: Maybe<Scalars['String']['output']>;
  /** Gets the timestamp when the fulfillment was delivered. */
  deliveredAt?: Maybe<Scalars['DateTime']['output']>;
  /** Gets the identifier of the fulfillment. */
  id: Scalars['ID']['output'];
  /** Gets the collection of line items fulfilled by this fulfillment. */
  lines: Array<OrderFulfillmentLine>;
  /** Gets the metadata associated with the order fulfillment. */
  metadata: Array<MetadataItem>;
  /** Gets the timestamp when the fulfillment was shipped. */
  shippedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Gets the current status for the fulfillment lifecycle. */
  status: FulfillmentStatus;
  /** Gets the tracking number for the shipment, if provided. */
  trackingNumber?: Maybe<Scalars['String']['output']>;
  /** Gets the tracking URL for the shipment, if provided. */
  trackingUrl?: Maybe<Scalars['String']['output']>;
};


export type OrderFulfillmentMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type OrderFulfillmentCreateError = FulfillmentInvalidLinesError | OrderNotFoundError;

export type OrderFulfillmentCreateInput = {
  carrier?: InputMaybe<Scalars['String']['input']>;
  lines: Array<OrderFulfillmentCreateLineInput>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  orderId: Scalars['ID']['input'];
  shippedAt?: InputMaybe<Scalars['DateTime']['input']>;
  supplyChannelId?: InputMaybe<Scalars['ID']['input']>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
  trackingUrl?: InputMaybe<Scalars['String']['input']>;
};

export type OrderFulfillmentCreateLineInput = {
  lineItemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderFulfillmentCreatePayload = {
  __typename?: 'OrderFulfillmentCreatePayload';
  errors?: Maybe<Array<OrderFulfillmentCreateError>>;
  orderFulfillment?: Maybe<OrderFulfillment>;
};

export type OrderFulfillmentLine = {
  __typename?: 'OrderFulfillmentLine';
  /** Gets the identifier of the order line item associated with this fulfillment line. */
  lineItemId: Scalars['ID']['output'];
  /** Gets the quantity fulfilled for the associated order line item. */
  quantity: Scalars['Int']['output'];
};

export type OrderFulfillmentUpdateError = FulfillmentInvalidUpdateError | FulfillmentNotFoundError;

export type OrderFulfillmentUpdateInput = {
  cancel?: InputMaybe<Scalars['Boolean']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  deliveredAt?: InputMaybe<Scalars['DateTime']['input']>;
  fulfillmentId: Scalars['ID']['input'];
  markAsDelivered?: InputMaybe<Scalars['Boolean']['input']>;
  markAsShipped?: InputMaybe<Scalars['Boolean']['input']>;
  setShippedIfTrackingUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  shippedAt?: InputMaybe<Scalars['DateTime']['input']>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
  trackingUrl?: InputMaybe<Scalars['String']['input']>;
};

export type OrderFulfillmentUpdatePayload = {
  __typename?: 'OrderFulfillmentUpdatePayload';
  errors?: Maybe<Array<OrderFulfillmentUpdateError>>;
  orderFulfillment?: Maybe<OrderFulfillment>;
};

export type OrderHasNoCustomerError = UserError & {
  __typename?: 'OrderHasNoCustomerError';
  message: Scalars['String']['output'];
  orderId: Scalars['ID']['output'];
};

/**
 * Represents a line item in a order, which includes details about the product, variant, and any associated discounts.
 *
 * Each line item contains information such as the product name, variant details, total price, and any applicable discounts. This allows for detailed tracking of items within a cart, including their pricing and discount applications.
 */
export type OrderLineItem = Node & {
  __typename?: 'OrderLineItem';
  /** Retrieves a paginated list of discount applications for a specific line item. */
  discountApplications: DiscountApplicationConnection;
  /** The unique identifier of the line item. */
  id: Scalars['ID']['output'];
  /** Gets the metadata associated with the order line item. */
  metadata: Array<MetadataItem>;
  /**
   * This retrieves the product associated with a cart line item. If the product no longer exists—such as if it has been removed from the channel or deleted entirely—this will return `null`.
   * In such cases, you can still use other properties like `productName` and `productSlug` to display information about the product.
   * These fields are not directly tied to the product reference and remain available for display, even if the product itself is missing.
   * Note that these properties are eventually consistent and may not always reflect the latest product state.
   */
  product?: Maybe<Product>;
  /** The unique identifier of the product associated with the order line item. */
  productId: Scalars['ID']['output'];
  /** The name of the product associated with the order line item. */
  productName: Scalars['String']['output'];
  /** The slug of the product associated with the order line item, useful for generating URLs or displaying product information. */
  productSlug: Scalars['String']['output'];
  /** Retrieves the quantity of the order line item. */
  quantity: Scalars['Int']['output'];
  /** The SKU (Stock Keeping Unit) of the variant associated with the order line item, often used for inventory management. */
  sku: Scalars['String']['output'];
  /** The line items total excluding discounts and taxes. */
  subtotal: Money;
  /** Gets the tax behavior of the order line item, which indicates how taxes are applied to the item. */
  taxBehavior: TaxBehavior;
  /** Retrieves the tax rate applied to the order line item. This may be null if the line item does not have a tax rate defined. */
  taxRate?: Maybe<TaxRate>;
  /** Gets the taxed price of the `LineItem`. This may be null if the `LineItem` does not yet have a taxed price. */
  taxedPrice?: Maybe<TaxedPrice>;
  /** The total amount for the order line item, including taxes and discounts. */
  total: Money;
  /** Retrieves the unit price of the order line item. */
  unitPrice: UnitPrice;
  /**
   * This retrieves the variant associated with a cart line item. If the variant no longer exists—such as if it has been removed from the channel or deleted entirely—this will return `null`.
   * In such cases, you can still use other properties like `variantName` and `variantSku` to display information about the variant.
   * These fields are not directly tied to the variant reference and remain available for display, even if the variant itself is missing.
   * Note that these properties are eventually consistent and may not always reflect the latest variant state.
   */
  variant?: Maybe<ProductVariant>;
  /** The unique identifier of the variant associated with the order line item. */
  variantId: Scalars['ID']['output'];
  /** The name of the variant associated with the order line item. */
  variantName: Scalars['String']['output'];
};


/**
 * Represents a line item in a order, which includes details about the product, variant, and any associated discounts.
 *
 * Each line item contains information such as the product name, variant details, total price, and any applicable discounts. This allows for detailed tracking of items within a cart, including their pricing and discount applications.
 */
export type OrderLineItemDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * Represents a line item in a order, which includes details about the product, variant, and any associated discounts.
 *
 * Each line item contains information such as the product name, variant details, total price, and any applicable discounts. This allows for detailed tracking of items within a cart, including their pricing and discount applications.
 */
export type OrderLineItemMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A connection to a list of items. */
export type OrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrderLineItemEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<OrderLineItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type OrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderLineItem;
};

export type OrderNotFoundError = UserError & {
  __typename?: 'OrderNotFoundError';
  message: Scalars['String']['output'];
  orderId: Scalars['ID']['output'];
};

/** Represents a shipping line applied to an order. */
export type OrderShippingLine = Node & {
  __typename?: 'OrderShippingLine';
  /** The unique identifier of the order shipping line. */
  id: Scalars['ID']['output'];
  /** The shipping method associated with this shipping line. If the shipping method has been deleted, this will be null. Use the shippingMethodId, shippingMethodName, and shippingMethodSku fields to access the original shipping method details. */
  shippingMethod?: Maybe<ShippingMethod>;
  /** The unique identifier of the shipping method associated with this shipping line. */
  shippingMethodId: Scalars['ID']['output'];
  /** The name of the shipping method associated with this shipping line. */
  shippingMethodName: Scalars['String']['output'];
  /** The SKU of the shipping method associated with this shipping line. */
  shippingMethodSku?: Maybe<Scalars['String']['output']>;
  /** The subtotal for the shipping line before discounts and tax. */
  subtotal: Money;
  /** The tax behavior applied when calculating this shipping line. */
  taxBehavior: TaxBehavior;
  /** The tax rate used for this shipping line, if available. */
  taxRate?: Maybe<TaxRate>;
  /** The taxed prices (net, gross, tax) for this shipping line, if calculated. */
  taxedPrice?: Maybe<TaxedPrice>;
  /** The total amount charged for the shipping line after adjustments. */
  total: Money;
};

export enum OrderSortKeys {
  CreatedAt = 'CREATED_AT',
  Id = 'ID',
  OrderNumber = 'ORDER_NUMBER'
}

export enum OrderState {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  Confirmed = 'CONFIRMED',
  Open = 'OPEN'
}

export type OrderUpdateError = OrderNotFoundError;

export type OrderUpdateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  externalReference?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  orderState?: InputMaybe<OrderState>;
  shipmentState?: InputMaybe<ShipmentState>;
  shippingAddress?: InputMaybe<AddressInput>;
};

export type OrderUpdatePayload = {
  __typename?: 'OrderUpdatePayload';
  errors?: Maybe<Array<OrderUpdateError>>;
  order?: Maybe<Order>;
};

export type OrganizationInvitation = Node & {
  __typename?: 'OrganizationInvitation';
  /** The UTC timestamp when the invitation was accepted, if applicable. */
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UTC timestamp when the invitation was cancelled, if applicable. */
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UTC timestamp when the invitation was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The email address the invitation was sent to. */
  email: Scalars['String']['output'];
  /** The UTC timestamp when the invitation expired, if applicable. */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The UTC timestamp when the invitation will expire. */
  expiresAt: Scalars['DateTime']['output'];
  /** The unique identifier of the organization invitation. */
  id: Scalars['ID']['output'];
  /** The UTC timestamp when the invitation was last synchronized, if applicable. */
  lastSyncedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The organization role identifiers assigned to the invitation. */
  roleIds: Array<Scalars['ID']['output']>;
  /** The current status of the invitation. */
  status: OrganizationInvitationStatus;
};

/** A connection to a list of items. */
export type OrganizationInvitationConnection = {
  __typename?: 'OrganizationInvitationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrganizationInvitationEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<OrganizationInvitation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoV2;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type OrganizationInvitationEdge = {
  __typename?: 'OrganizationInvitationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrganizationInvitation;
};

export enum OrganizationInvitationStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Pending = 'PENDING'
}

export type OrganizationRole = {
  __typename?: 'OrganizationRole';
  /** The description of the organization role. */
  description: Scalars['String']['output'];
  /** The unique identifier of the organization role. */
  id: Scalars['ID']['output'];
  /** The name of the organization role. */
  name: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type OrganizationRoleConnection = {
  __typename?: 'OrganizationRoleConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrganizationRoleEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<OrganizationRole>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoV2;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type OrganizationRoleEdge = {
  __typename?: 'OrganizationRoleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrganizationRole;
};

/** A cursor that points to a specific page. */
export type PageCursor = {
  __typename?: 'PageCursor';
  /** The cursor. */
  cursor: Scalars['String']['output'];
  /** The page number. */
  page: Scalars['Int']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** A list of cursors to continue paginating backwards. */
  backwardCursors: Array<PageCursor>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** A list of cursors to continue paginating forwards. */
  forwardCursors: Array<PageCursor>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfoV2 = {
  __typename?: 'PageInfoV2';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PasswordResetTokenCustomerNotFoundError = UserError & {
  __typename?: 'PasswordResetTokenCustomerNotFoundError';
  message: Scalars['String']['output'];
};

export type PasswordResetTokenGenerationFailedError = UserError & {
  __typename?: 'PasswordResetTokenGenerationFailedError';
  message: Scalars['String']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  /** The unique identifier for the payment. */
  id: Scalars['ID']['output'];
  /** The intended amount for the payment. */
  intendedAmount: Money;
  /** The paid amount. */
  paidAmount: Money;
  /** The payment gateway used for the payment. */
  paymentGateway?: Maybe<PaymentGateway>;
  /** The payment method. */
  paymentMethod: PaymentMethod;
  /** The payment service provider reference. */
  pspReference: Scalars['String']['output'];
  /** The refunded amount. */
  refundedAmount: Money;
  /** The transactions associated with the payment. */
  transactions: TransactionConnection;
};


export type PaymentTransactionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentCancelError = PaymentGatewayCancelFailedError | PaymentGatewayCancelInvalidStatusError | PaymentGatewayNotFoundError | PaymentGatewayPaymentNotFoundError;

export type PaymentCancelInput = {
  gatewayId: Scalars['ID']['input'];
  pspReference: Scalars['String']['input'];
};

export type PaymentCancelPayload = {
  __typename?: 'PaymentCancelPayload';
  errors?: Maybe<Array<PaymentCancelError>>;
  payment?: Maybe<Payment>;
};

export type PaymentCaptureError = PaymentGatewayCaptureFailedError | PaymentGatewayNotFoundError | PaymentGatewayPaymentNotFoundError;

export type PaymentCaptureInput = {
  amount: MoneyInput;
  gatewayId: Scalars['ID']['input'];
  pspReference: Scalars['String']['input'];
};

export type PaymentCapturePayload = {
  __typename?: 'PaymentCapturePayload';
  errors?: Maybe<Array<PaymentCaptureError>>;
  payment?: Maybe<Payment>;
};

/** A connection to a list of items. */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PaymentEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Payment>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type PaymentCreateError = OneOfExpectationError | OrderNotFoundError | PaymentGatewayNotFoundError;

export type PaymentCreateInput = {
  gatewayId: Scalars['ID']['input'];
  intendedAmount: MoneyInput;
  orderId: Scalars['ID']['input'];
  paymentMethodName?: InputMaybe<Scalars['String']['input']>;
  pspReference?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<Array<PaymentCreateTransactionInput>>;
};

export type PaymentCreatePayload = {
  __typename?: 'PaymentCreatePayload';
  errors?: Maybe<Array<PaymentCreateError>>;
  payment?: Maybe<Payment>;
};

export type PaymentCreateTransactionInput = {
  refund?: InputMaybe<MoneyInput>;
  sale?: InputMaybe<MoneyInput>;
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
};

export type PaymentGateway = {
  /** Defines if the payment gateway supports capturing payments. */
  canCapture: Scalars['Boolean']['output'];
  /** Defines if the payment gateway supports refunding payments. */
  canRefund: Scalars['Boolean']['output'];
  /** The channel IDs associated with the payment gateway. */
  channelIds: Array<Scalars['ID']['output']>;
  /** The unique identifier of the payment gateway. */
  id: Scalars['ID']['output'];
  /** Gets the name of the payment gateway. */
  name: Scalars['String']['output'];
};

export type PaymentGatewayCancelFailedError = UserError & {
  __typename?: 'PaymentGatewayCancelFailedError';
  errorMessage: Scalars['String']['output'];
  gatewayId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
};

export type PaymentGatewayCancelInvalidStatusError = UserError & {
  __typename?: 'PaymentGatewayCancelInvalidStatusError';
  currentStatus: Scalars['String']['output'];
  gatewayId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
};

export type PaymentGatewayCaptureFailedError = UserError & {
  __typename?: 'PaymentGatewayCaptureFailedError';
  errorMessage: Scalars['String']['output'];
  gatewayId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type PaymentGatewayConnection = {
  __typename?: 'PaymentGatewayConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PaymentGatewayEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<PaymentGateway>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type PaymentGatewayCreateError = CreateStripeGatewayFailedError | OneOfExpectationError;

export type PaymentGatewayCreateInput = {
  manual?: InputMaybe<ManualPaymentGatewayInput>;
  stripe?: InputMaybe<StripePaymentGatewayInput>;
};

export type PaymentGatewayCreatePayload = {
  __typename?: 'PaymentGatewayCreatePayload';
  errors?: Maybe<Array<PaymentGatewayCreateError>>;
  paymentGateway?: Maybe<PaymentGateway>;
};

export type PaymentGatewayDeleteError = PaymentGatewayNotFoundError;

export type PaymentGatewayDeleteInput = {
  id: Scalars['ID']['input'];
};

export type PaymentGatewayDeletePayload = {
  __typename?: 'PaymentGatewayDeletePayload';
  errors?: Maybe<Array<PaymentGatewayDeleteError>>;
  paymentGateway?: Maybe<PaymentGateway>;
};

export type PaymentGatewayEdge = {
  __typename?: 'PaymentGatewayEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PaymentGateway;
};

export type PaymentGatewayNotFoundError = UserError & {
  __typename?: 'PaymentGatewayNotFoundError';
  gatewayId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export type PaymentGatewayPaymentNotFoundError = UserError & {
  __typename?: 'PaymentGatewayPaymentNotFoundError';
  message: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
};

export type PaymentGatewayRefundFailedError = UserError & {
  __typename?: 'PaymentGatewayRefundFailedError';
  errorMessage: Scalars['String']['output'];
  gatewayId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
};

export type PaymentGatewayRefundInsufficientBalanceError = UserError & {
  __typename?: 'PaymentGatewayRefundInsufficientBalanceError';
  amountRequested: Money;
  gatewayId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
  totalAmountRefunded: Money;
};

export type PaymentMethod = {
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

export type PaymentRefundError = PaymentGatewayNotFoundError | PaymentGatewayPaymentNotFoundError | PaymentGatewayRefundFailedError | PaymentGatewayRefundInsufficientBalanceError;

export type PaymentRefundInput = {
  amount: MoneyInput;
  gatewayId: Scalars['ID']['input'];
  pspReference: Scalars['String']['input'];
};

export type PaymentRefundPayload = {
  __typename?: 'PaymentRefundPayload';
  errors?: Maybe<Array<PaymentRefundError>>;
  payment?: Maybe<Payment>;
};

export enum PaymentState {
  Authorized = 'AUTHORIZED',
  BalanceDue = 'BALANCE_DUE',
  Failed = 'FAILED',
  Overpaid = 'OVERPAID',
  Paid = 'PAID',
  PartiallyAuthorized = 'PARTIALLY_AUTHORIZED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED'
}

export type PaypalPaymentMethod = PaymentMethod & {
  __typename?: 'PaypalPaymentMethod';
  /** The name of the payment method. */
  name: Scalars['String']['output'];
  /** The PayPal Payer Email. */
  payerEmail: Scalars['String']['output'];
  /** The PayPal Payer ID. */
  payerId: Scalars['String']['output'];
};

export type Price = Node & {
  __typename?: 'Price';
  /** Channel that supplies this InventoryEntry. */
  channel?: Maybe<Channel>;
  /** The Customer Group which the price is associated with. */
  customerGroup?: Maybe<CustomerGroup>;
  /** The unique identifier of the price. */
  id: Scalars['ID']['output'];
  /** The tax behavior of the price. */
  taxBehavior: TaxBehavior;
  /** The Date and Time when the price becomes valid. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The Date and Time when the price becomes invalid. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  /** The monetary value in the smallest unit of the currency. For example, 100 cents in USD. */
  value: Money;
};

/** A connection to a list of items. */
export type PriceConnection = {
  __typename?: 'PriceConnection';
  /** A list of edges. */
  edges?: Maybe<Array<PriceEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Price>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type PriceEdge = {
  __typename?: 'PriceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Price;
};

export type Product = Node & {
  __typename?: 'Product';
  /** A list of attributes associated with the product. */
  attributeAssignments: Array<AttributeAssignment>;
  /** A list of categories associated with the product. */
  categories: CategoryConnection;
  /** A list of collections associated with the product. */
  collections: CollectionConnection;
  /** The rich description of the product. */
  description?: Maybe<Scalars['String']['output']>;
  /** The featured (hero) variant for this product. */
  heroVariant?: Maybe<ProductVariant>;
  /** The unique identifier for the product. */
  id: Scalars['ID']['output'];
  /** Custom metadata key/value pairs for the product. */
  metadata: Array<MetadataItem>;
  /** The name of the product. */
  name: Scalars['String']['output'];
  /** A list of publications associated with the product. */
  publications: ProductPublicationConnection;
  /** The number of channel publications that are associated with the product. */
  publicationsCount: Scalars['Long']['output'];
  /** The slug of the product, which is a URL-friendly identifier. */
  slug: Scalars['String']['output'];
  /** The status of the product. */
  status: ProductStatus;
  /** A list of tags applied to the product. */
  tags: Array<Scalars['String']['output']>;
  /** The number of inventory entries that are associated with the product. */
  totalInventoryCount: Scalars['Int']['output'];
  /** A list of variants associated with the product. */
  variants: ProductVariantConnection;
  /** The number of variants that are associated with the product and published in the current channel. */
  variantsCount: Scalars['Long']['output'];
  /** The vendor of the product. */
  vendor?: Maybe<Scalars['String']['output']>;
};


export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ProductPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductAttributeNotFoundError = UserError & {
  __typename?: 'ProductAttributeNotFoundError';
  attributeName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
};

export enum ProductAttributeType {
  Swatch = 'SWATCH',
  Text = 'TEXT'
}

export enum ProductCategorySortKeys {
  Id = 'ID',
  Manual = 'MANUAL',
  Name = 'NAME',
  Price = 'PRICE',
  Vendor = 'VENDOR'
}

export enum ProductCollectionSortKeys {
  Id = 'ID',
  Manual = 'MANUAL',
  Name = 'NAME',
  Price = 'PRICE',
  Vendor = 'VENDOR'
}

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ProductCreateError = DuplicateSlugError;

export type ProductCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  publications?: InputMaybe<Array<ProductPublicationInput>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status: ProductStatus;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type ProductCreatePayload = {
  __typename?: 'ProductCreatePayload';
  errors?: Maybe<Array<ProductCreateError>>;
  product?: Maybe<Product>;
};

export type ProductDeleteError = ProductNotFoundError;

export type ProductDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ProductDeletePayload = {
  __typename?: 'ProductDeletePayload';
  errors?: Maybe<Array<ProductDeleteError>>;
  product?: Maybe<Product>;
};

export type ProductDiscount = Node & {
  __typename?: 'ProductDiscount';
  /** Gets the unique identifier of the product discount. */
  id: Scalars['ID']['output'];
  /** Gets the name of the product discount. */
  name: Scalars['String']['output'];
  /** The predicate of the discount. */
  predicate: Scalars['String']['output'];
  /** The priority of the discount. */
  priority: Scalars['Int']['output'];
  /** The date and time the discount is valid from. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time the discount is valid until. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Gets the value of the product discount. */
  value: ProductDiscountValue;
};

export type ProductDiscountAbsoluteInput = {
  amounts: Array<MoneyInput>;
};

/** Represents an absolute discount value for a product variant. */
export type ProductDiscountAbsoluteValue = {
  __typename?: 'ProductDiscountAbsoluteValue';
  /** Gets the absolute discount values. */
  values: Array<Money>;
};

/** A connection to a list of items. */
export type ProductDiscountConnection = {
  __typename?: 'ProductDiscountConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductDiscountEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ProductDiscount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ProductDiscountCreateError = ProductDiscountValueRequiredError;

export type ProductDiscountCreateInput = {
  absoluteInput?: InputMaybe<ProductDiscountAbsoluteInput>;
  name: Scalars['String']['input'];
  predicate: Scalars['String']['input'];
  priority: Scalars['Int']['input'];
  relativeInput?: InputMaybe<ProductDiscountRelativeInput>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductDiscountCreatePayload = {
  __typename?: 'ProductDiscountCreatePayload';
  errors?: Maybe<Array<ProductDiscountCreateError>>;
  productDiscount?: Maybe<ProductDiscount>;
};

export type ProductDiscountDeleteError = ProductDiscountNotFoundError;

export type ProductDiscountDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ProductDiscountDeletePayload = {
  __typename?: 'ProductDiscountDeletePayload';
  errors?: Maybe<Array<ProductDiscountDeleteError>>;
  productDiscount?: Maybe<ProductDiscount>;
};

export type ProductDiscountEdge = {
  __typename?: 'ProductDiscountEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductDiscount;
};

export type ProductDiscountNotFoundError = UserError & {
  __typename?: 'ProductDiscountNotFoundError';
  message: Scalars['String']['output'];
};

export type ProductDiscountRefresh = {
  __typename?: 'ProductDiscountRefresh';
  /** The number of deleted prices during the refresh. */
  deletedPriceCount: Scalars['Int']['output'];
  /** The duration of the refresh operation. */
  duration: Scalars['TimeSpan']['output'];
  /** The number of orphaned discounts removed during the refresh. */
  orphanedDiscountsCount: Scalars['Int']['output'];
};

export type ProductDiscountRefreshPayload = {
  __typename?: 'ProductDiscountRefreshPayload';
  productDiscountRefresh?: Maybe<ProductDiscountRefresh>;
};

export type ProductDiscountRelativeInput = {
  factor: Scalars['Decimal']['input'];
};

/** Represents a relative discount value for a product variant. */
export type ProductDiscountRelativeValue = {
  __typename?: 'ProductDiscountRelativeValue';
  /** Gets the factor of the relative discount value. */
  factor: Scalars['Decimal']['output'];
};

export type ProductDiscountUpdateError = ProductDiscountNotFoundError | ProductDiscountValueRequiredError | UpdateProductDiscountDomainValidationFailureError | UpdateProductDiscountInvalidPredicateError;

export type ProductDiscountUpdateInput = {
  absoluteInput?: InputMaybe<ProductDiscountAbsoluteInput>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  predicate?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  relativeInput?: InputMaybe<ProductDiscountRelativeInput>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductDiscountUpdatePayload = {
  __typename?: 'ProductDiscountUpdatePayload';
  errors?: Maybe<Array<ProductDiscountUpdateError>>;
  productDiscount?: Maybe<ProductDiscount>;
};

export type ProductDiscountValue = ProductDiscountAbsoluteValue | ProductDiscountRelativeValue;

export type ProductDiscountValueRequiredError = UserError & {
  __typename?: 'ProductDiscountValueRequiredError';
  message: Scalars['String']['output'];
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProductNotFoundError = UserError & {
  __typename?: 'ProductNotFoundError';
  message: Scalars['String']['output'];
};

export type ProductPublication = {
  __typename?: 'ProductPublication';
  /** Determines if the product publication is available for purchase. */
  availableForPurchase: Scalars['Boolean']['output'];
  availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** The channel associated with the product publication. */
  channel: Channel;
  id: Scalars['UUID']['output'];
  /** Determines if the product publication is currently published. */
  published: Scalars['Boolean']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** A connection to a list of items. */
export type ProductPublicationConnection = {
  __typename?: 'ProductPublicationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductPublicationEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ProductPublication>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ProductPublicationEdge = {
  __typename?: 'ProductPublicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductPublication;
};

export type ProductPublicationInput = {
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  channelId: Scalars['ID']['input'];
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductPublishError = ProductNotFoundError;

export type ProductPublishInput = {
  productId: Scalars['ID']['input'];
  publications: Array<ProductPublicationInput>;
};

export type ProductPublishPayload = {
  __typename?: 'ProductPublishPayload';
  errors?: Maybe<Array<ProductPublishError>>;
  product?: Maybe<Product>;
};

export enum ProductSortKeys {
  Id = 'ID',
  Name = 'NAME',
  Price = 'PRICE',
  Vendor = 'VENDOR'
}

export enum ProductStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT'
}

export type ProductUnpublishError = ProductNotFoundError;

export type ProductUnpublishInput = {
  channelIds: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};

export type ProductUnpublishPayload = {
  __typename?: 'ProductUnpublishPayload';
  errors?: Maybe<Array<ProductUnpublishError>>;
  product?: Maybe<Product>;
};

export type ProductUpdateError = DuplicateSlugError | ProductNotFoundError;

export type ProductUpdateInput = {
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ProductStatus>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  vendor?: InputMaybe<Scalars['String']['input']>;
};

export type ProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload';
  errors?: Maybe<Array<ProductUpdateError>>;
  product?: Maybe<Product>;
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  /** The barcode of the product variant. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** The ID of the product variant. */
  id: Scalars['ID']['output'];
  /** Gets the featured image for the variant, the featured image is the first media of type image */
  image?: Maybe<Media>;
  /** A list of inventories associated with the product variant. */
  inventories: InventoryEntryConnection;
  /** A list of media associated with the variant. */
  media: MediaConnection;
  /** Custom metadata key/value pairs for the product variant. */
  metadata: Array<MetadataItem>;
  /** The name of the product variant. */
  name: Scalars['String']['output'];
  /** Gets the prices for a product variant. */
  prices: PriceConnection;
  /** The product that the variant is associated with. */
  product: Product;
  productId: Scalars['ID']['output'];
  /** A list of publications associated with the product variant. */
  publications: ProductVariantPublicationConnection;
  /** The number of channel publications that are associated with the product variant. */
  publicationsCount: Scalars['Long']['output'];
  /** Gets the selected attributes for a product variant. */
  selectedAttributes: Array<SelectedAttribute>;
  /** The SKU of the product variant. */
  sku?: Maybe<Scalars['String']['output']>;
  /** The status of the product variant. */
  status: VariantStatus;
  /** The weight of the product variant. */
  weight?: Maybe<Weight>;
};


export type ProductVariantInventoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductVariantMediaArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductVariantMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type ProductVariantPricesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductVariantPublicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductVariantAttributeValueInput = {
  attributeId?: InputMaybe<Scalars['ID']['input']>;
  attributeName?: InputMaybe<Scalars['String']['input']>;
  attributeValueId?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of items. */
export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductVariantEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ProductVariant>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductVariant;
};

export type ProductVariantPriceCreateError = ProductVariantPriceMutationError;

export type ProductVariantPriceCreateInput = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  productVariantId: Scalars['ID']['input'];
  taxBehavior: TaxBehavior;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validTo?: InputMaybe<Scalars['DateTime']['input']>;
  value: MoneyInput;
};

export type ProductVariantPriceCreatePayload = {
  __typename?: 'ProductVariantPriceCreatePayload';
  errors?: Maybe<Array<ProductVariantPriceCreateError>>;
  price?: Maybe<Price>;
};

export type ProductVariantPriceDeleteError = ProductVariantPriceNotFoundError;

export type ProductVariantPriceDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ProductVariantPriceDeletePayload = {
  __typename?: 'ProductVariantPriceDeletePayload';
  errors?: Maybe<Array<ProductVariantPriceDeleteError>>;
  price?: Maybe<Price>;
};

export type ProductVariantPriceMutationError = UserError & {
  __typename?: 'ProductVariantPriceMutationError';
  message: Scalars['String']['output'];
};

export type ProductVariantPriceNotFoundError = UserError & {
  __typename?: 'ProductVariantPriceNotFoundError';
  message: Scalars['String']['output'];
};

export type ProductVariantPriceUpdateError = ProductVariantPriceMutationError | ProductVariantPriceNotFoundError;

export type ProductVariantPriceUpdateInput = {
  centAmount?: InputMaybe<Scalars['Long']['input']>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  taxBehavior?: InputMaybe<TaxBehavior>;
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  validUntil?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantPriceUpdatePayload = {
  __typename?: 'ProductVariantPriceUpdatePayload';
  errors?: Maybe<Array<ProductVariantPriceUpdateError>>;
  price?: Maybe<Price>;
};

export type ProductVariantPricesBulkCreateError = BulkOperationLimitExceededError | ProductVariantPriceMutationError;

export type ProductVariantPricesBulkCreateInput = {
  prices: Array<ProductVariantPriceCreateInput>;
};

export type ProductVariantPricesBulkCreatePayload = {
  __typename?: 'ProductVariantPricesBulkCreatePayload';
  errors?: Maybe<Array<ProductVariantPricesBulkCreateError>>;
  price?: Maybe<Array<Price>>;
};

export type ProductVariantPricesBulkDeleteError = BulkOperationLimitExceededError | ProductVariantPriceNotFoundError;

export type ProductVariantPricesBulkDeleteInput = {
  ids: Array<Scalars['ID']['input']>;
};

export type ProductVariantPricesBulkDeletePayload = {
  __typename?: 'ProductVariantPricesBulkDeletePayload';
  errors?: Maybe<Array<ProductVariantPricesBulkDeleteError>>;
  price?: Maybe<Array<Price>>;
};

export type ProductVariantPricesBulkUpdateError = BulkOperationLimitExceededError | ProductVariantPriceMutationError | ProductVariantPriceNotFoundError;

export type ProductVariantPricesBulkUpdateInput = {
  prices: Array<ProductVariantPriceUpdateInput>;
};

export type ProductVariantPricesBulkUpdatePayload = {
  __typename?: 'ProductVariantPricesBulkUpdatePayload';
  errors?: Maybe<Array<ProductVariantPricesBulkUpdateError>>;
  price?: Maybe<Array<Price>>;
};

export type ProductVariantPublication = {
  __typename?: 'ProductVariantPublication';
  /** Whether the `Variant` is available for purchase in the channel or not. */
  availableForPurchase: Scalars['Boolean']['output'];
  availableForPurchaseAt?: Maybe<Scalars['DateTime']['output']>;
  channel: Channel;
  /** Whether the `Variant` is published in the channel or not. */
  published: Scalars['Boolean']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** A connection to a list of items. */
export type ProductVariantPublicationConnection = {
  __typename?: 'ProductVariantPublicationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ProductVariantPublicationEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ProductVariantPublication>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ProductVariantPublicationEdge = {
  __typename?: 'ProductVariantPublicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductVariantPublication;
};

export type ProductVariantPublicationInput = {
  availableForPurchaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  channelId: Scalars['ID']['input'];
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProductVariantPublishError = ProductNotFoundError;

export type ProductVariantPublishInput = {
  productId: Scalars['ID']['input'];
  publications: Array<ProductVariantPublicationInput>;
  variantId: Scalars['ID']['input'];
};

export type ProductVariantPublishPayload = {
  __typename?: 'ProductVariantPublishPayload';
  errors?: Maybe<Array<ProductVariantPublishError>>;
  product?: Maybe<Product>;
};

export type ProductVariantReorderInput = {
  id: Scalars['ID']['input'];
  newSortOrder: Scalars['Int']['input'];
};

export type ProductVariantUnpublishError = ProductNotFoundError;

export type ProductVariantUnpublishInput = {
  channelIds: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type ProductVariantUnpublishPayload = {
  __typename?: 'ProductVariantUnpublishPayload';
  errors?: Maybe<Array<ProductVariantUnpublishError>>;
  product?: Maybe<Product>;
};

export type ProductVariantWeightInput = {
  unit: WeightUnit;
  value: Scalars['Decimal']['input'];
};

export type ProductVariantsBulkCreateError = DuplicateSkuError | DuplicateVariantCombinationError | ExactlyOneOfTwoRequiredError | ProductAttributeNotFoundError | ProductNotFoundError | ProductVariantsBulkDomainErrorError;

export type ProductVariantsBulkCreateInput = {
  productId: Scalars['ID']['input'];
  variants: Array<ProductVariantsCreateInput>;
};

export type ProductVariantsBulkCreatePayload = {
  __typename?: 'ProductVariantsBulkCreatePayload';
  errors?: Maybe<Array<ProductVariantsBulkCreateError>>;
  product?: Maybe<Product>;
  productVariants?: Maybe<Array<ProductVariant>>;
};

export type ProductVariantsBulkDeleteError = ProductNotFoundError;

export type ProductVariantsBulkDeleteInput = {
  productId: Scalars['ID']['input'];
  variantIds: Array<Scalars['ID']['input']>;
};

export type ProductVariantsBulkDeletePayload = {
  __typename?: 'ProductVariantsBulkDeletePayload';
  errors?: Maybe<Array<ProductVariantsBulkDeleteError>>;
  product?: Maybe<Product>;
};

export type ProductVariantsBulkDomainErrorError = UserError & {
  __typename?: 'ProductVariantsBulkDomainErrorError';
  message: Scalars['String']['output'];
};

export type ProductVariantsBulkUpdateError = DuplicateSkuError | DuplicateVariantCombinationError | ExactlyOneOfTwoRequiredError | ProductNotFoundError;

export type ProductVariantsBulkUpdateInput = {
  productId: Scalars['ID']['input'];
  variants: Array<ProductVariantsUpdateInput>;
};

export type ProductVariantsBulkUpdatePayload = {
  __typename?: 'ProductVariantsBulkUpdatePayload';
  errors?: Maybe<Array<ProductVariantsBulkUpdateError>>;
  product?: Maybe<Product>;
  productVariants?: Maybe<Array<ProductVariant>>;
};

export type ProductVariantsCreateInput = {
  attributeValues?: InputMaybe<Array<ProductVariantAttributeValueInput>>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name: Scalars['String']['input'];
  sku: Scalars['String']['input'];
  status?: InputMaybe<VariantStatus>;
  weight?: InputMaybe<ProductVariantWeightInput>;
};

export type ProductVariantsMediaAddError = MediaNotFoundError | ProductNotFoundError;

export type ProductVariantsMediaAddInput = {
  productId: Scalars['ID']['input'];
  variantMedia: Array<AddProductVariantMediaInput>;
};

export type ProductVariantsMediaAddPayload = {
  __typename?: 'ProductVariantsMediaAddPayload';
  errors?: Maybe<Array<ProductVariantsMediaAddError>>;
  product?: Maybe<Product>;
};

export type ProductVariantsMediaRemoveError = MediaNotFoundError | ProductNotFoundError;

export type ProductVariantsMediaRemoveInput = {
  productId: Scalars['ID']['input'];
  variantMedia: Array<RemoveProductVariantMediaInput>;
};

export type ProductVariantsMediaRemovePayload = {
  __typename?: 'ProductVariantsMediaRemovePayload';
  errors?: Maybe<Array<ProductVariantsMediaRemoveError>>;
  product?: Maybe<Product>;
};

export type ProductVariantsMediaReorderError = ProductNotFoundError;

export type ProductVariantsMediaReorderInput = {
  productId: Scalars['ID']['input'];
  updates: Array<VariantMediaOrderUpdateInput>;
};

export type ProductVariantsMediaReorderPayload = {
  __typename?: 'ProductVariantsMediaReorderPayload';
  errors?: Maybe<Array<ProductVariantsMediaReorderError>>;
  product?: Maybe<Product>;
};

export type ProductVariantsReorderError = ProductNotFoundError;

export type ProductVariantsReorderInput = {
  productId: Scalars['ID']['input'];
  variants: Array<ProductVariantReorderInput>;
};

export type ProductVariantsReorderPayload = {
  __typename?: 'ProductVariantsReorderPayload';
  errors?: Maybe<Array<ProductVariantsReorderError>>;
  product?: Maybe<Product>;
};

export type ProductVariantsUpdateInput = {
  attributeValues?: InputMaybe<Array<ProductVariantAttributeValueInput>>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<VariantStatus>;
  weight?: InputMaybe<ProductVariantWeightInput>;
};

export type Query = {
  __typename?: 'Query';
  /** A list of tags that have been added to products. */
  allProductTags: Array<Scalars['String']['output']>;
  /** Retrieves all distinct vendor names. */
  allVendors: Array<Scalars['String']['output']>;
  /** Executes an analytic query and returns the results in a paginated format. */
  analyticQuery?: Maybe<TableData>;
  /** Returns a paged list of API keys. */
  apiKey?: Maybe<ApiKey>;
  /** Returns a paged list of API keys. */
  apiKeys: ApiKeyConnection;
  /** Gets a product attribute by its ID. */
  attribute?: Maybe<Attribute>;
  /** Retrieves a product attribute value by its ID. */
  attributeValue?: Maybe<AttributeValue>;
  /** Retrieves a paginated list of product attributes. */
  attributes: AttributeConnection;
  /** Gets a cart discount by its ID. */
  cartDiscount?: Maybe<CartDiscount>;
  /** Gets a cart discount codes aggregate by its ID. */
  cartDiscountCode?: Maybe<CartDiscountCode>;
  /** Returns a paginated list of cart discount codes. */
  cartDiscountCodes: CartDiscountCodeConnection;
  /** Gets a cart discount group by its ID. */
  cartDiscountGroup?: Maybe<CartDiscountGroup>;
  /** Returns a list of cart discounts. */
  cartDiscountGroups: CartDiscountGroupConnection;
  /** Returns a list of cart discounts. */
  cartDiscounts: CartDiscountConnection;
  /** Returns a list of categories. */
  categories: CategoryConnection;
  /** Returns a Category by its ID. */
  category?: Maybe<Category>;
  /** Gets a single `Channel` by its ID. */
  channel?: Maybe<Channel>;
  /** Gets a paginated list of channels based on the provided paging arguments and query context. */
  channels: ChannelConnection;
  /** Returns a Collection by its ID. */
  collection?: Maybe<Collection>;
  /** Returns a list of collections. */
  collections: CollectionConnection;
  /** Retrieves a paginated list of currencies. */
  currencies: CurrencyConnection;
  /** Retrieves a currency by its code. */
  currency?: Maybe<Currency>;
  /** Retrieves a single customer by `ID`. */
  customer?: Maybe<Customer>;
  /** Retrieves a single customer group by `ID`. */
  customerGroup?: Maybe<CustomerGroup>;
  /** Retrieves a paged list of customers with optional filtering, sorting, and full-text search. */
  customerGroups: CustomerGroupConnection;
  /** Retrieves a paged list of customers with optional filtering, sorting, and full-text search. */
  customers: CustomerConnection;
  /** Retrieves a single external tax configuration by its ID. */
  externalTaxConfiguration?: Maybe<ExternalTaxConfiguration>;
  /** Retrieves a paginated list of external tax configurations. */
  externalTaxConfigurations: ExternalTaxConfigurationConnection;
  /** Retrieves a single facet by its ID. */
  facet?: Maybe<Facet>;
  /** Returns a list of collections. */
  facets: FacetConnection;
  /** Gets a paginated list of inventory entries based on the provided paging arguments. */
  inventoryEntries: InventoryEntryConnection;
  /** Retrieves an inventory entry by its unique identifier. */
  inventoryEntry?: Maybe<InventoryEntry>;
  /** Returns a media item by its ID. */
  media?: Maybe<Media>;
  /** Returns a paged list of media items. */
  medias: MediaConnection;
  node?: Maybe<Node>;
  /** Retrieves a single order by `ID`. */
  order?: Maybe<Order>;
  /** Retrieves a fulfillment by order and fulfillment identifier. */
  orderFulfillment?: Maybe<OrderFulfillment>;
  /** Retrieves all fulfillments for a specific order. */
  orderFulfillments: Array<OrderFulfillment>;
  /** Retrieves a paged list of orders with optional filtering, sorting, and search. */
  orders: OrderConnection;
  /** Returns a paginated list of organization user invitations. */
  organizationInvitations: OrganizationInvitationConnection;
  /** Returns a list of organization roles. */
  organizationRoles: OrganizationRoleConnection;
  /** Retrieves a payment gateway by its ID. */
  paymentGateway?: Maybe<PaymentGateway>;
  /** Retrieves a paginated list of payment gateways. */
  paymentGateways: PaymentGatewayConnection;
  /** Retrieves a single product by its ID. */
  product?: Maybe<Product>;
  /** Gets a product discount by its ID. */
  productDiscount?: Maybe<ProductDiscount>;
  /** Returns a list of product discounts. */
  productDiscounts: ProductDiscountConnection;
  /** Retrieves a single variant of a product by its decoded identifier. */
  productVariant?: Maybe<ProductVariant>;
  /** Retrieves a product variant price by its ID. */
  productVariantPrice?: Maybe<Price>;
  /** Retrieves a paged list of product variants. */
  productVariants: ProductVariantConnection;
  /** Retrieves a paged list of products with optional filtering, sorting, and full-text search. */
  products: ProductConnection;
  /** Searches for a query string across the platform's data. */
  search: SearchResultConnection;
  /** Retrieves a shipping method by its ID. */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Retrieves a shipping method rate by its ID. */
  shippingMethodRate?: Maybe<ShippingMethodRate>;
  /** Retrieves a paginated list of shipping methods. */
  shippingMethods: ShippingMethodConnection;
  /** Retrieves a shipping zone by its unique identifier. */
  shippingZone?: Maybe<ShippingZone>;
  /** Retrieves a paginated list of shipping zones. */
  shippingZones: ShippingZoneConnection;
  /** Retrieves a store by its unique identifier. */
  store?: Maybe<Store>;
  /** Retrieves a paged list of stores. */
  stores: StoreConnection;
  /** Returns a list of organization users. */
  users: UserConnection;
  /** Retrieves a webhook delivery by its unique identifier. */
  webhookDelivery?: Maybe<WebhookDelivery>;
  /** Retrieves a webhook subscription by its unique identifier. */
  webhookSubscription?: Maybe<WebhookSubscription>;
  /** Retrieves a paged list of webhook subscriptions. */
  webhookSubscriptions: WebhookSubscriptionConnection;
};


export type QueryAnalyticQueryArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
  query: Scalars['String']['input'];
};


export type QueryApiKeyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryApiKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAttributeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAttributeValueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCartDiscountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCartDiscountCodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCartDiscountCodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCartDiscountGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCartDiscountGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCartDiscountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  root?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  flags?: InputMaybe<Array<ChannelFlag>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurrencyArgs = {
  code: Scalars['String']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<CustomerGroupSortKeys>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<CustomerSortKeys>;
};


export type QueryExternalTaxConfigurationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExternalTaxConfigurationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFacetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFacetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInventoryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInventoryEntryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMediaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMediasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderFulfillmentArgs = {
  fulfillmentId: Scalars['ID']['input'];
};


export type QueryOrderFulfillmentsArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<OrderSortKeys>;
};


export type QueryOrganizationInvitationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrganizationRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentGatewayArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentGatewaysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductDiscountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductDiscountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductVariantPriceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<ProductSortKeys>;
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QueryShippingMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingMethodRateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShippingZoneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebhookDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookSubscriptionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RateOfTotalInput = {
  currency: Scalars['String']['input'];
  rateOfTotal: Scalars['Float']['input'];
};

export type RefundTransaction = Transaction & {
  __typename?: 'RefundTransaction';
  /** The amount of the transaction. */
  amount: Money;
  /** The unique identifier for the transaction. */
  id: Scalars['ID']['output'];
  /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};

export type RelativeShippingMethodRate = ShippingMethodRate & {
  __typename?: 'RelativeShippingMethodRate';
  /** The currency code for the shipping method rate. */
  currencyCode: Scalars['String']['output'];
  /** The unique identifier for the shipping method rate. */
  id: Scalars['ID']['output'];
  /** The predicate of the shipping method rate. Predicates are used to filter shipping methods based on certain criteria. */
  predicate?: Maybe<Scalars['String']['output']>;
  /** The priority of the shipping method rate. Lower values indicate higher priority. */
  priority: Scalars['Int']['output'];
  /** The rate of the shipping method rate. */
  rate: Scalars['Float']['output'];
  /** The tax behavior of the shipping method rate, indicating whether the rate is inclusive or exclusive of tax. */
  taxBehavior: TaxBehavior;
};

export type RelativeValue = {
  __typename?: 'RelativeValue';
  /** The percentage value of the relative value. */
  percentage: Scalars['Decimal']['output'];
};

export type RemoveProductVariantMediaInput = {
  mediaIds: Array<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

export enum RoundingMode {
  AwayFromZero = 'AWAY_FROM_ZERO',
  ToEven = 'TO_EVEN',
  ToZero = 'TO_ZERO'
}

export type SaleTransaction = Transaction & {
  __typename?: 'SaleTransaction';
  /** The amount of the transaction. */
  amount: Money;
  /** The unique identifier for the transaction. */
  id: Scalars['ID']['output'];
  /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};

export type SearchResult = Node & {
  __typename?: 'SearchResult';
  id: Scalars['ID']['output'];
  reference?: Maybe<SearchResultReference>;
  score: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type SearchResultConnection = {
  __typename?: 'SearchResultConnection';
  /** A list of edges. */
  edges?: Maybe<Array<SearchResultEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<SearchResult>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type SearchResultEdge = {
  __typename?: 'SearchResultEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SearchResult;
};

export type SearchResultReference = Customer | Order | Product;

export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  /** The selected attribute. */
  attribute: Attribute;
  /** The selected attribute value. */
  attributeValue: AttributeValue;
  /** The selected attribute name */
  name: Scalars['String']['output'];
  /** The value of the selected attribute. */
  value: Scalars['String']['output'];
};

export enum ShipmentState {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Ready = 'READY',
  Shipped = 'SHIPPED'
}

/** Represents a shipping method. */
export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  /** Gets a list of channels associated with the specified shipping zone. */
  channels: ChannelConnection;
  /** The description of the shipping method. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier for the shipping method. */
  id: Scalars['ID']['output'];
  /** Gets the metadata associated with the shipping method. */
  metadata: Array<MetadataItem>;
  /** The name of the shipping method. */
  name: Scalars['String']['output'];
  /** The predicate of the shipping method, which defines the conditions under which the shipping method is applicable. */
  predicate?: Maybe<Scalars['String']['output']>;
  /** A list of shipping method rates associated with the shipping method. */
  rates: ShippingMethodRateConnection;
  /** A list of shipping zones associated with the shipping method. */
  shippingZones: ShippingZoneConnection;
  /** The SKU of the shipping method. */
  sku?: Maybe<Scalars['String']['output']>;
};


/** Represents a shipping method. */
export type ShippingMethodChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a shipping method. */
export type ShippingMethodMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


/** Represents a shipping method. */
export type ShippingMethodRatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** Represents a shipping method. */
export type ShippingMethodShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type ShippingMethodConnection = {
  __typename?: 'ShippingMethodConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShippingMethodEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ShippingMethod>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ShippingMethodCreateInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name: Scalars['String']['input'];
  predicate?: InputMaybe<Scalars['String']['input']>;
  rates?: InputMaybe<Array<ShippingMethodRateCreateInput>>;
  sku: Scalars['String']['input'];
  zones?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ShippingMethodCreatePayload = {
  __typename?: 'ShippingMethodCreatePayload';
  shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingMethodDeleteError = ShippingMethodNotFoundError;

export type ShippingMethodDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ShippingMethodDeletePayload = {
  __typename?: 'ShippingMethodDeletePayload';
  errors?: Maybe<Array<ShippingMethodDeleteError>>;
  shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingMethodEdge = {
  __typename?: 'ShippingMethodEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingMethod;
};

export type ShippingMethodNotFoundError = UserError & {
  __typename?: 'ShippingMethodNotFoundError';
  message: Scalars['String']['output'];
};

export type ShippingMethodRate = {
  /** The currency code for the shipping method rate. */
  currencyCode: Scalars['String']['output'];
  /** The unique identifier for the shipping method rate. */
  id: Scalars['ID']['output'];
  /** The predicate of the shipping method rate. Predicates are used to filter shipping methods based on certain criteria. */
  predicate?: Maybe<Scalars['String']['output']>;
  /** The priority of the shipping method rate. Lower values indicate higher priority. */
  priority: Scalars['Int']['output'];
  /** The tax behavior of the shipping method rate, indicating whether the rate is inclusive or exclusive of tax. */
  taxBehavior: TaxBehavior;
};

export type ShippingMethodRateAddError = ShippingMethodNotFoundError;

export type ShippingMethodRateAddInput = {
  rate: ShippingMethodRateCreateInput;
  shippingMethodId: Scalars['ID']['input'];
};

export type ShippingMethodRateAddPayload = {
  __typename?: 'ShippingMethodRateAddPayload';
  errors?: Maybe<Array<ShippingMethodRateAddError>>;
  shippingMethod?: Maybe<ShippingMethod>;
};

/** A connection to a list of items. */
export type ShippingMethodRateConnection = {
  __typename?: 'ShippingMethodRateConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShippingMethodRateEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ShippingMethodRate>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ShippingMethodRateCreateInput = {
  predicate?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<MoneyInput>;
  rateOfTotal?: InputMaybe<RateOfTotalInput>;
  taxBehavior?: InputMaybe<TaxBehavior>;
};

export type ShippingMethodRateDeleteError = ShippingMethodNotFoundError;

export type ShippingMethodRateDeleteInput = {
  rateId: Scalars['ID']['input'];
  shippingMethodId: Scalars['ID']['input'];
};

export type ShippingMethodRateDeletePayload = {
  __typename?: 'ShippingMethodRateDeletePayload';
  errors?: Maybe<Array<ShippingMethodRateDeleteError>>;
  shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingMethodRateEdge = {
  __typename?: 'ShippingMethodRateEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingMethodRate;
};

export type ShippingMethodRateMoveInput = {
  newPosition: Scalars['Int']['input'];
  shippingMethodRateId: Scalars['ID']['input'];
};

export type ShippingMethodRateNotFoundGraphqlError = UserError & {
  __typename?: 'ShippingMethodRateNotFoundGraphqlError';
  message: Scalars['String']['output'];
};

export type ShippingMethodRateReorderError = ShippingMethodRateReorderShippingMethodNotFoundGraphqlError;

export type ShippingMethodRateReorderInput = {
  moves: Array<ShippingMethodRateMoveInput>;
  shippingMethodId: Scalars['ID']['input'];
};

export type ShippingMethodRateReorderPayload = {
  __typename?: 'ShippingMethodRateReorderPayload';
  errors?: Maybe<Array<ShippingMethodRateReorderError>>;
  shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingMethodRateReorderShippingMethodNotFoundGraphqlError = UserError & {
  __typename?: 'ShippingMethodRateReorderShippingMethodNotFoundGraphqlError';
  message: Scalars['String']['output'];
};

export type ShippingMethodRateUpdateError = ShippingMethodNotFoundError | ShippingMethodRateNotFoundGraphqlError;

export type ShippingMethodRateUpdateInput = {
  predicate?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<MoneyInput>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  rate?: InputMaybe<RateOfTotalInput>;
  rateId: Scalars['ID']['input'];
  taxBehavior?: InputMaybe<TaxBehavior>;
};

export type ShippingMethodRateUpdatePayload = {
  __typename?: 'ShippingMethodRateUpdatePayload';
  errors?: Maybe<Array<ShippingMethodRateUpdateError>>;
  shippingMethodRate?: Maybe<ShippingMethodRate>;
};

export type ShippingMethodUpdateError = ShippingMethodNotFoundError;

export type ShippingMethodUpdateInput = {
  channels?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  predicate?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  zones?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ShippingMethodUpdatePayload = {
  __typename?: 'ShippingMethodUpdatePayload';
  errors?: Maybe<Array<ShippingMethodUpdateError>>;
  shippingMethod?: Maybe<ShippingMethod>;
};

export type ShippingZone = Node & {
  __typename?: 'ShippingZone';
  /** The description of the shipping method. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the shipping zone. */
  id: Scalars['ID']['output'];
  /** A list of locations associated with the shipping zone. */
  locations: ShippingZoneLocationConnection;
  /** The number of locations that are associated with the shipping zone. */
  locationsCount: Scalars['Long']['output'];
  /** The name of the shipping zone. */
  name: Scalars['String']['output'];
};


export type ShippingZoneLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type ShippingZoneConnection = {
  __typename?: 'ShippingZoneConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShippingZoneEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ShippingZone>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ShippingZoneCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locations?: InputMaybe<Array<ShippingZoneLocationInput>>;
  name: Scalars['String']['input'];
};

export type ShippingZoneCreatePayload = {
  __typename?: 'ShippingZoneCreatePayload';
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneDeleteError = ShippingZoneNotFoundError;

export type ShippingZoneDeleteInput = {
  id: Scalars['ID']['input'];
};

export type ShippingZoneDeletePayload = {
  __typename?: 'ShippingZoneDeletePayload';
  errors?: Maybe<Array<ShippingZoneDeleteError>>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneEdge = {
  __typename?: 'ShippingZoneEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingZone;
};

/** Represents a location (country) within a shipping zone. */
export type ShippingZoneLocation = {
  __typename?: 'ShippingZoneLocation';
  /** The country code of the shipping zone location. */
  countryCode: Scalars['String']['output'];
  /** The unique identifier for the location. */
  id: Scalars['ID']['output'];
};

/** A connection to a list of items. */
export type ShippingZoneLocationConnection = {
  __typename?: 'ShippingZoneLocationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ShippingZoneLocationEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<ShippingZoneLocation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ShippingZoneLocationEdge = {
  __typename?: 'ShippingZoneLocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingZoneLocation;
};

export type ShippingZoneLocationInput = {
  countryCode: Scalars['String']['input'];
};

export type ShippingZoneLocationsAddError = ShippingZoneNotFoundError;

export type ShippingZoneLocationsAddInput = {
  locations: Array<ShippingZoneLocationInput>;
  shippingZoneId: Scalars['ID']['input'];
};

export type ShippingZoneLocationsAddPayload = {
  __typename?: 'ShippingZoneLocationsAddPayload';
  errors?: Maybe<Array<ShippingZoneLocationsAddError>>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneLocationsRemoveError = ShippingZoneNotFoundError;

export type ShippingZoneLocationsRemoveInput = {
  locationIds: Array<Scalars['ID']['input']>;
  shippingZoneId: Scalars['ID']['input'];
};

export type ShippingZoneLocationsRemovePayload = {
  __typename?: 'ShippingZoneLocationsRemovePayload';
  errors?: Maybe<Array<ShippingZoneLocationsRemoveError>>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneNotFoundError = UserError & {
  __typename?: 'ShippingZoneNotFoundError';
  message: Scalars['String']['output'];
};

export type ShippingZoneUpdateError = ShippingZoneNotFoundError;

export type ShippingZoneUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingZoneUpdatePayload = {
  __typename?: 'ShippingZoneUpdatePayload';
  errors?: Maybe<Array<ShippingZoneUpdateError>>;
  shippingZone?: Maybe<ShippingZone>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum StackingMode {
  Parallel = 'PARALLEL',
  Serial = 'SERIAL'
}

export type Store = Node & {
  __typename?: 'Store';
  /** The default rounding mode for price calculations in this store. */
  defaultPriceRoundingMode: RoundingMode;
  /** The default rounding mode for tax calculations in this store. */
  defaultTaxRoundingMode: RoundingMode;
  /** A list of supply channels associated with the store. */
  distributionChannels: ChannelConnection;
  /** The unique identifier of the store. */
  id: Scalars['ID']['output'];
  /** The name of the store. */
  name: Scalars['String']['output'];
  /** A list of price channels associated with the store. */
  priceChannels: ChannelConnection;
  /** A list of supply channels associated with the store. */
  supplyChannels: ChannelConnection;
};


export type StoreDistributionChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type StorePriceChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreSupplyChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type StoreConnection = {
  __typename?: 'StoreConnection';
  /** A list of edges. */
  edges?: Maybe<Array<StoreEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Store>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type StoreCreateError = InvalidDistributionChannelsError | InvalidPriceChannelsError | InvalidSupplyChannelsError;

export type StoreCreateInput = {
  defaultPriceRoundingMode?: InputMaybe<RoundingMode>;
  defaultTaxRoundingMode?: InputMaybe<RoundingMode>;
  distributionChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
  priceChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  supplyChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type StoreCreatePayload = {
  __typename?: 'StoreCreatePayload';
  errors?: Maybe<Array<StoreCreateError>>;
  store?: Maybe<Store>;
};

export type StoreDeleteError = StoreNotFoundError;

export type StoreDeleteInput = {
  id: Scalars['ID']['input'];
};

export type StoreDeletePayload = {
  __typename?: 'StoreDeletePayload';
  errors?: Maybe<Array<StoreDeleteError>>;
  storeId?: Maybe<Scalars['ID']['output']>;
};

export type StoreEdge = {
  __typename?: 'StoreEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Store;
};

export type StoreNotFoundError = UserError & {
  __typename?: 'StoreNotFoundError';
  message: Scalars['String']['output'];
};

export type StoreUpdateError = InvalidDistributionChannelsError | InvalidPriceChannelsError | InvalidSupplyChannelsError | StoreNotFoundError;

export type StoreUpdateInput = {
  defaultPriceRoundingMode?: InputMaybe<RoundingMode>;
  defaultTaxRoundingMode?: InputMaybe<RoundingMode>;
  distributionChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  priceChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
  supplyChannels?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type StoreUpdatePayload = {
  __typename?: 'StoreUpdatePayload';
  errors?: Maybe<Array<StoreUpdateError>>;
  store?: Maybe<Store>;
};

export type StripePaymentGateway = PaymentGateway & {
  __typename?: 'StripePaymentGateway';
  /** Defines if the payment gateway supports capturing payments. */
  canCapture: Scalars['Boolean']['output'];
  /** Defines if the payment gateway supports refunding payments. */
  canRefund: Scalars['Boolean']['output'];
  /** The channel IDs associated with the payment gateway. */
  channelIds: Array<Scalars['ID']['output']>;
  /** Gets a list of channels associated with the specified cart discount. */
  channels: ChannelConnection;
  /** The unique identifier of the payment gateway. */
  id: Scalars['ID']['output'];
  /** If true, the payment gateway is in test mode. */
  isTest: Scalars['Boolean']['output'];
  /** Gets the name of the payment gateway. */
  name: Scalars['String']['output'];
  /** Gets the publishable key for the Stripe payment gateway. */
  publishableKey: Scalars['String']['output'];
};


export type StripePaymentGatewayChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type StripePaymentGatewayInput = {
  name: Scalars['String']['input'];
  publishableKey: Scalars['String']['input'];
  secretKey: Scalars['String']['input'];
};

export type SwatchAttributeValue = AttributeValue & {
  __typename?: 'SwatchAttributeValue';
  /** The color of the attribute value. */
  color?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the attribute value. */
  id: Scalars['ID']['output'];
  /** Retrieves the media associated with the swatch attribute value. */
  media?: Maybe<Media>;
  /** Gets the metadata associated with the attribute value. */
  metadata: Array<MetadataItem>;
  /** The value of the attribute. */
  value: Scalars['String']['output'];
  /** A list of references to variants associated with the attribute value. */
  variantReferences: ProductVariantConnection;
  /** The number of references to variants that are associated with the attribute value. */
  variantReferencesCount: Scalars['Long']['output'];
};


export type SwatchAttributeValueMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type SwatchAttributeValueVariantReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type SystemEvent = OrderEvent & {
  __typename?: 'SystemEvent';
  /** The date and time when the order event was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The user or system that created the order event. */
  createdBy: Scalars['String']['output'];
  /** The unique identifier for the event. */
  id: Scalars['ID']['output'];
  /** TThe message associated with the event. */
  message: Scalars['String']['output'];
};

export type TableData = {
  __typename?: 'TableData';
  columns: Array<Column>;
  rowData: Array<Array<Scalars['String']['output']>>;
};

export enum TaxBehavior {
  Exclusive = 'EXCLUSIVE',
  Inclusive = 'INCLUSIVE'
}

/** Represents a portion of a tax rate applied to a cart or line item, detailing the specific tax amount and its type. */
export type TaxPortion = {
  __typename?: 'TaxPortion';
  /** Gets the name of the tax portion, which describes the type of tax applied (e.g., VAT, sales tax). */
  name: Scalars['String']['output'];
  /** Gets the amount of the tax portion, which is the specific tax amount applied to the cart or line item. */
  rate: Scalars['Decimal']['output'];
};

/** Represents the tax rate applied to a cart or line item, including the rate and any applicable tax portions. */
export type TaxRate = {
  __typename?: 'TaxRate';
  /** Gets the tax composition of the tax rate, which includes details about how the tax is structured. */
  composition: TaxRateComposition;
  /** Gets the tax rate as a decimal value. */
  rate: Scalars['Decimal']['output'];
  /** The tax portions of the tax rate, which detail how the tax is divided among different components. */
  taxPortions: Array<TaxPortion>;
};

export enum TaxRateComposition {
  Additive = 'ADDITIVE',
  Compound = 'COMPOUND'
}

/** The monetary value in the smallest unit of the currency. */
export type TaxedPrice = {
  __typename?: 'TaxedPrice';
  /** The total price including tax. */
  gross: Money;
  /** The total price excluding tax. */
  net: Money;
  /** The tax amount */
  tax: Money;
};

export type TextAttributeValue = AttributeValue & {
  __typename?: 'TextAttributeValue';
  /** The unique identifier of the attribute value. */
  id: Scalars['ID']['output'];
  /** Gets the metadata associated with the attribute value. */
  metadata: Array<MetadataItem>;
  /** The value of the attribute. */
  value: Scalars['String']['output'];
  /** A list of references to variants associated with the attribute value. */
  variantReferences: ProductVariantConnection;
  /** The number of references to variants that are associated with the attribute value. */
  variantReferencesCount: Scalars['Long']['output'];
};


export type TextAttributeValueMetadataArgs = {
  keys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type TextAttributeValueVariantReferencesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Transaction = {
  /** The amount of the transaction. */
  amount: Money;
  /** The unique identifier for the transaction. */
  id: Scalars['ID']['output'];
  /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};

/** A connection to a list of items. */
export type TransactionConnection = {
  __typename?: 'TransactionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<TransactionEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Transaction>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type TransactionEdge = {
  __typename?: 'TransactionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Transaction;
};

/**
 * Represents the unit price of a product or variant in a cart or order, including the monetary value and currency and potentially discounted price.
 *
 * The unit price is expressed in the smallest unit of the currency, allowing for precise calculations and display of product pricing.
 */
export type UnitPrice = {
  __typename?: 'UnitPrice';
  /** The three-letter currency code that represents a world currency used in a store. Currency codes include standard ISO 4217 codes, legacy codes, and non-standard codes. For example, USD. */
  discountedPrice?: Maybe<DiscountedPrice>;
  /** Retrieves the tax behavior of the unit price. */
  taxBehavior: TaxBehavior;
  /** The monetary value in the smallest unit of the currency. */
  value: Money;
};

export type UnknownPaymentMethod = PaymentMethod & {
  __typename?: 'UnknownPaymentMethod';
  /** The name of the payment method. */
  name: Scalars['String']['output'];
};

export type UpdateApiKeyInvalidPermissionError = UserError & {
  __typename?: 'UpdateApiKeyInvalidPermissionError';
  message: Scalars['String']['output'];
};

export type UpdateApiKeyNotFoundError = UserError & {
  __typename?: 'UpdateApiKeyNotFoundError';
  message: Scalars['String']['output'];
};

export type UpdateApiKeyUserDoesNotHavePermissionToPerformActionError = UserError & {
  __typename?: 'UpdateApiKeyUserDoesNotHavePermissionToPerformActionError';
  message: Scalars['String']['output'];
};

export type UpdateProductDiscountDomainValidationFailureError = UserError & {
  __typename?: 'UpdateProductDiscountDomainValidationFailureError';
  message: Scalars['String']['output'];
};

export type UpdateProductDiscountInvalidPredicateError = UserError & {
  __typename?: 'UpdateProductDiscountInvalidPredicateError';
  message: Scalars['String']['output'];
};

export type UpdateUserFailedError = UserError & {
  __typename?: 'UpdateUserFailedError';
  message: Scalars['String']['output'];
};

export type UpdateUserNotFoundError = UserError & {
  __typename?: 'UpdateUserNotFoundError';
  message: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  /** The email of the user. */
  email: Scalars['String']['output'];
  /** The unique identifier of the user. */
  id: Scalars['ID']['output'];
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** A list of roles associated with the user. */
  roles: OrganizationRoleConnection;
};


export type UserRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UserEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoV2;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type UserDeleteError = DeleteUserFailedError | DeleteUserNotFoundError;

/** Input for deleting a user. */
export type UserDeleteInput = {
  id: Scalars['ID']['input'];
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  errors?: Maybe<Array<UserDeleteError>>;
  user?: Maybe<User>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

export type UserError = {
  message: Scalars['String']['output'];
};

export type UserInvitationCreateFailedError = UserError & {
  __typename?: 'UserInvitationCreateFailedError';
  message: Scalars['String']['output'];
};

/** Payload returned when inviting a new organization user. */
export type UserInvitationPayload = {
  __typename?: 'UserInvitationPayload';
  email: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invitationUrl: Scalars['String']['output'];
  status: OrganizationInvitationStatus;
};

export type UserInvitationValidationError = UserError & {
  __typename?: 'UserInvitationValidationError';
  message: Scalars['String']['output'];
};

export type UserInviteError = UserInvitationCreateFailedError | UserInvitationValidationError;

/** Input for inviting a new organization user. */
export type UserInviteInput = {
  email: Scalars['String']['input'];
  expiresInMinutes?: InputMaybe<Scalars['Int']['input']>;
  roleIds: Array<Scalars['ID']['input']>;
};

export type UserInvitePayload = {
  __typename?: 'UserInvitePayload';
  errors?: Maybe<Array<UserInviteError>>;
  userInvitationPayload?: Maybe<UserInvitationPayload>;
};

export type UserSelfUpdateError = UpdateUserFailedError;

/** Input for updating the current authenticated user's own profile (name only). */
export type UserSelfUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserSelfUpdatePayload = {
  __typename?: 'UserSelfUpdatePayload';
  errors?: Maybe<Array<UserSelfUpdateError>>;
  user?: Maybe<User>;
};

export type UserUpdateError = UpdateUserFailedError | UpdateUserNotFoundError;

/** Input for updating an existing organization user (admin mutation). */
export type UserUpdateInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  errors?: Maybe<Array<UserUpdateError>>;
  user?: Maybe<User>;
};

export type VariantMediaOrderUpdateInput = {
  mediaChanges: Array<MediaSortOrderChangeInput>;
  variantId: Scalars['ID']['input'];
};

export enum VariantStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT'
}

export type VoidTransaction = Transaction & {
  __typename?: 'VoidTransaction';
  /** The amount of the transaction. */
  amount: Money;
  /** The unique identifier for the transaction. */
  id: Scalars['ID']['output'];
  /** The date and time when the transaction was processed. */
  processedAt: Scalars['DateTime']['output'];
};

export type WebhookDelivery = Node & {
  __typename?: 'WebhookDelivery';
  /** The attempt count of the webhook delivery. */
  attemptCount: Scalars['Int']['output'];
  /** The error message of the webhook delivery. */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The type of event that triggered the webhook delivery */
  eventType: WebhookEventType;
  /** The unique identifier of the webhook delivery. */
  id: Scalars['ID']['output'];
  /** The idempotency key of the webhook delivery. */
  idempotencyKey: Scalars['String']['output'];
  /** The payload of the webhook delivery. */
  payload: Scalars['String']['output'];
  /** The timestamp when the webhook request was sent. */
  requestedAt: Scalars['DateTime']['output'];
  /** The response of the webhook delivery. */
  response?: Maybe<Scalars['String']['output']>;
  /** The timestamp when the webhook response was received. */
  responseReceivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The status of the webhook delivery. */
  status: WebhookDeliveryStatus;
  /** The HTTP status code returned for the webhook delivery. */
  statusCode: Scalars['Int']['output'];
};

export type WebhookDeliveryCannotResendError = UserError & {
  __typename?: 'WebhookDeliveryCannotResendError';
  message: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type WebhookDeliveryConnection = {
  __typename?: 'WebhookDeliveryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<WebhookDeliveryEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<WebhookDelivery>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type WebhookDeliveryEdge = {
  __typename?: 'WebhookDeliveryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WebhookDelivery;
};

export type WebhookDeliveryNotFoundError = UserError & {
  __typename?: 'WebhookDeliveryNotFoundError';
  message: Scalars['String']['output'];
};

export type WebhookDeliveryResendError = WebhookDeliveryCannotResendError | WebhookDeliveryNotFoundError;

export type WebhookDeliveryResendInput = {
  id: Scalars['ID']['input'];
};

export type WebhookDeliveryResendPayload = {
  __typename?: 'WebhookDeliveryResendPayload';
  errors?: Maybe<Array<WebhookDeliveryResendError>>;
  webhookDelivery?: Maybe<WebhookDelivery>;
};

export enum WebhookDeliveryStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Retrying = 'RETRYING',
  Success = 'SUCCESS',
  Timeout = 'TIMEOUT'
}

export enum WebhookEventType {
  CustomerActivated = 'CUSTOMER_ACTIVATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerEmailConfirmationToken = 'CUSTOMER_EMAIL_CONFIRMATION_TOKEN',
  CustomerPasswordResetToken = 'CUSTOMER_PASSWORD_RESET_TOKEN',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  OrderCreated = 'ORDER_CREATED',
  OrderPaymentStateChanged = 'ORDER_PAYMENT_STATE_CHANGED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED'
}

export type WebhookSubscription = Node & {
  __typename?: 'WebhookSubscription';
  /** Retrieves a paged list of webhook deliveries associated with the webhook subscription. */
  deliveries: WebhookDeliveryConnection;
  /** Get the unique identifier of the webhook subscription. */
  id: Scalars['ID']['output'];
  /** Indicates whether the webhook subscription is currently active. */
  isActive: Scalars['Boolean']['output'];
  /** Get the secret of the webhook subscription. */
  secret: Scalars['String']['output'];
  /** Get the events the webhook subscription is subscribed to. */
  subscribedEvents: Array<WebhookEventType>;
  /** Get the URL of the webhook subscription. */
  url: Scalars['String']['output'];
};


export type WebhookSubscriptionDeliveriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of items. */
export type WebhookSubscriptionConnection = {
  __typename?: 'WebhookSubscriptionConnection';
  /** A list of edges. */
  edges?: Maybe<Array<WebhookSubscriptionEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<WebhookSubscription>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type WebhookSubscriptionCreateError = InvalidUrlError | NoEventsProvidedError;

export type WebhookSubscriptionCreateInput = {
  events: Array<WebhookEventType>;
  isActive?: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
};

export type WebhookSubscriptionCreatePayload = {
  __typename?: 'WebhookSubscriptionCreatePayload';
  errors?: Maybe<Array<WebhookSubscriptionCreateError>>;
  webhookSubscription?: Maybe<WebhookSubscription>;
};

export type WebhookSubscriptionDeleteError = WebhookSubscriptionNotFoundError;

export type WebhookSubscriptionDeleteInput = {
  id: Scalars['ID']['input'];
};

export type WebhookSubscriptionDeletePayload = {
  __typename?: 'WebhookSubscriptionDeletePayload';
  deletedWebhookId?: Maybe<Scalars['ID']['output']>;
  errors?: Maybe<Array<WebhookSubscriptionDeleteError>>;
};

export type WebhookSubscriptionEdge = {
  __typename?: 'WebhookSubscriptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WebhookSubscription;
};

export type WebhookSubscriptionNotFoundError = UserError & {
  __typename?: 'WebhookSubscriptionNotFoundError';
  message: Scalars['String']['output'];
};

export type WebhookSubscriptionUpdateError = InvalidUrlError | WebhookSubscriptionNotFoundError;

export type WebhookSubscriptionUpdateInput = {
  events?: InputMaybe<Array<WebhookEventType>>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type WebhookSubscriptionUpdatePayload = {
  __typename?: 'WebhookSubscriptionUpdatePayload';
  errors?: Maybe<Array<WebhookSubscriptionUpdateError>>;
  webhookSubscription?: Maybe<WebhookSubscription>;
};

export type Weight = {
  __typename?: 'Weight';
  /** The unit of measurement for the weight */
  unit: WeightUnit;
  /** The numeric value of the weight */
  value: Scalars['Decimal']['output'];
};

export enum WeightUnit {
  Gram = 'GRAM',
  Kilogram = 'KILOGRAM'
}
