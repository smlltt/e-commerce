import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  GraphQLBigInt: any;
  GraphQLStringOrFloat: any;
  JSON: any;
};

export type Query = {
  __typename?: "Query";
  categories: Array<Categories>;
  categories_aggregated: Array<Categories_Aggregated>;
  categories_by_id?: Maybe<Categories>;
  posts: Array<Post>;
  posts_aggregated: Array<Posts_Aggregated>;
  posts_by_id?: Maybe<Post>;
  products: Array<Products>;
  products_aggregated: Array<Products_Aggregated>;
  products_by_id?: Maybe<Products>;
  products_categories: Array<Products_Categories>;
  products_categories_aggregated: Array<Products_Categories_Aggregated>;
  products_categories_by_id?: Maybe<Products_Categories>;
};

export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCategories_By_IdArgs = {
  id: Scalars["ID"];
};

export type QueryPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryPosts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryPosts_By_IdArgs = {
  id: Scalars["ID"];
};

export type QueryProductsArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProducts_AggregatedArgs = {
  filter?: InputMaybe<Products_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProducts_By_IdArgs = {
  id: Scalars["ID"];
};

export type QueryProducts_CategoriesArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProducts_Categories_AggregatedArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryProducts_Categories_By_IdArgs = {
  id: Scalars["ID"];
};

export type Categories = {
  __typename?: "categories";
  category_name?: Maybe<Scalars["String"]>;
  date_created?: Maybe<Scalars["Date"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"];
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  user_created?: Maybe<Scalars["String"]>;
  user_updated?: Maybe<Scalars["String"]>;
};

export type Categories_Aggregated = {
  __typename?: "categories_aggregated";
  avg?: Maybe<Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Categories_Aggregated_Fields>;
  count?: Maybe<Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Categories_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Categories_Aggregated_Fields>;
  min?: Maybe<Categories_Aggregated_Fields>;
  sum?: Maybe<Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Categories_Aggregated_Fields>;
};

export type Categories_Aggregated_Count = {
  __typename?: "categories_aggregated_count";
  category_name?: Maybe<Scalars["Int"]>;
  date_created?: Maybe<Scalars["Int"]>;
  date_updated?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  user_created?: Maybe<Scalars["Int"]>;
  user_updated?: Maybe<Scalars["Int"]>;
};

export type Categories_Aggregated_Fields = {
  __typename?: "categories_aggregated_fields";
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>;
  category_name?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: "count_functions";
  count?: Maybe<Scalars["Int"]>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _neq?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]>;
  _null?: InputMaybe<Scalars["Boolean"]>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: "datetime_functions";
  day?: Maybe<Scalars["Int"]>;
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  week?: Maybe<Scalars["Int"]>;
  weekday?: Maybe<Scalars["Int"]>;
  year?: Maybe<Scalars["Int"]>;
};

export type Directus_Files = {
  __typename?: "directus_files";
  charset?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  embed?: Maybe<Scalars["String"]>;
  filename_disk?: Maybe<Scalars["String"]>;
  filename_download: Scalars["String"];
  filesize?: Maybe<Scalars["GraphQLBigInt"]>;
  folder?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  location?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Scalars["String"]>;
  modified_on?: Maybe<Scalars["Date"]>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars["String"];
  tags?: Maybe<Scalars["JSON"]>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  uploaded_by?: Maybe<Scalars["String"]>;
  uploaded_on?: Maybe<Scalars["Date"]>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars["Int"]>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<String_Filter_Operators>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<String_Filter_Operators>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _eq?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _gt?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _gte?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _lt?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _lte?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _neq?: InputMaybe<Scalars["GraphQLStringOrFloat"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["GraphQLStringOrFloat"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]>;
  _null?: InputMaybe<Scalars["Boolean"]>;
};

export type Post = {
  __typename?: "posts";
  body?: Maybe<Scalars["String"]>;
  date_created?: Maybe<Scalars["Date"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  featured_image?: Maybe<Directus_Files>;
  id: Scalars["ID"];
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  user_created?: Maybe<Scalars["String"]>;
  user_updated?: Maybe<Scalars["String"]>;
};

export type PostsFeatured_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Posts_Aggregated = {
  __typename?: "posts_aggregated";
  avg?: Maybe<Posts_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Aggregated_Fields>;
  count?: Maybe<Posts_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Posts_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Posts_Aggregated_Fields>;
  min?: Maybe<Posts_Aggregated_Fields>;
  sum?: Maybe<Posts_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Aggregated_Fields>;
};

export type Posts_Aggregated_Count = {
  __typename?: "posts_aggregated_count";
  body?: Maybe<Scalars["Int"]>;
  date_created?: Maybe<Scalars["Int"]>;
  date_updated?: Maybe<Scalars["Int"]>;
  featured_image?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  user_created?: Maybe<Scalars["Int"]>;
  user_updated?: Maybe<Scalars["Int"]>;
};

export type Posts_Aggregated_Fields = {
  __typename?: "posts_aggregated_fields";
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

export type Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  body?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  featured_image?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type Products = {
  __typename?: "products";
  date_created?: Maybe<Scalars["Date"]>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars["Date"]>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars["ID"];
  price?: Maybe<Scalars["String"]>;
  product_categories?: Maybe<Array<Maybe<Products_Categories>>>;
  product_categories_func?: Maybe<Count_Functions>;
  product_description?: Maybe<Scalars["String"]>;
  product_image?: Maybe<Directus_Files>;
  product_name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sort?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  user_created?: Maybe<Scalars["String"]>;
  user_updated?: Maybe<Scalars["String"]>;
};

export type ProductsProduct_CategoriesArgs = {
  filter?: InputMaybe<Products_Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ProductsProduct_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Products_Aggregated = {
  __typename?: "products_aggregated";
  avg?: Maybe<Products_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Aggregated_Fields>;
  count?: Maybe<Products_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Products_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Products_Aggregated_Fields>;
  min?: Maybe<Products_Aggregated_Fields>;
  sum?: Maybe<Products_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Aggregated_Fields>;
};

export type Products_Aggregated_Count = {
  __typename?: "products_aggregated_count";
  date_created?: Maybe<Scalars["Int"]>;
  date_updated?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  price?: Maybe<Scalars["Int"]>;
  product_categories?: Maybe<Scalars["Int"]>;
  product_description?: Maybe<Scalars["Int"]>;
  product_image?: Maybe<Scalars["Int"]>;
  product_name?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["Int"]>;
  sort?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  user_created?: Maybe<Scalars["Int"]>;
  user_updated?: Maybe<Scalars["Int"]>;
};

export type Products_Aggregated_Fields = {
  __typename?: "products_aggregated_fields";
  id?: Maybe<Scalars["Float"]>;
  sort?: Maybe<Scalars["Float"]>;
};

export type Products_Categories = {
  __typename?: "products_categories";
  categories_id?: Maybe<Categories>;
  id: Scalars["ID"];
  products_id?: Maybe<Products>;
};

export type Products_CategoriesCategories_IdArgs = {
  filter?: InputMaybe<Categories_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Products_CategoriesProducts_IdArgs = {
  filter?: InputMaybe<Products_Filter>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Products_Categories_Aggregated = {
  __typename?: "products_categories_aggregated";
  avg?: Maybe<Products_Categories_Aggregated_Fields>;
  avgDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
  count?: Maybe<Products_Categories_Aggregated_Count>;
  countAll?: Maybe<Scalars["Int"]>;
  countDistinct?: Maybe<Products_Categories_Aggregated_Count>;
  group?: Maybe<Scalars["JSON"]>;
  max?: Maybe<Products_Categories_Aggregated_Fields>;
  min?: Maybe<Products_Categories_Aggregated_Fields>;
  sum?: Maybe<Products_Categories_Aggregated_Fields>;
  sumDistinct?: Maybe<Products_Categories_Aggregated_Fields>;
};

export type Products_Categories_Aggregated_Count = {
  __typename?: "products_categories_aggregated_count";
  categories_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  products_id?: Maybe<Scalars["Int"]>;
};

export type Products_Categories_Aggregated_Fields = {
  __typename?: "products_categories_aggregated_fields";
  categories_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  products_id?: Maybe<Scalars["Float"]>;
};

export type Products_Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Categories_Filter>>>;
  categories_id?: InputMaybe<Categories_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  products_id?: InputMaybe<Products_Filter>;
};

export type Products_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Products_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  price?: InputMaybe<String_Filter_Operators>;
  product_categories?: InputMaybe<Products_Categories_Filter>;
  product_categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  product_description?: InputMaybe<String_Filter_Operators>;
  product_image?: InputMaybe<Directus_Files_Filter>;
  product_name?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sort?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<String_Filter_Operators>;
  user_updated?: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars["String"]>;
  _empty?: InputMaybe<Scalars["Boolean"]>;
  _ends_with?: InputMaybe<Scalars["String"]>;
  _eq?: InputMaybe<Scalars["String"]>;
  _icontains?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  _ncontains?: InputMaybe<Scalars["String"]>;
  _nempty?: InputMaybe<Scalars["Boolean"]>;
  _nends_with?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  _nnull?: InputMaybe<Scalars["Boolean"]>;
  _nstarts_with?: InputMaybe<Scalars["String"]>;
  _null?: InputMaybe<Scalars["Boolean"]>;
  _starts_with?: InputMaybe<Scalars["String"]>;
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostsQuery = {
  __typename?: "Query";
  posts: Array<{
    __typename?: "posts";
    id: string;
    title: string;
    slug?: string | null;
    body?: string | null;
    featured_image?: { __typename?: "directus_files"; id: string } | null;
  }>;
};

export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    slug
    featured_image {
      id
    }
    body
  }
}
    `;
export const useGetAllPostsQuery = <TData = GetAllPostsQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: GetAllPostsQueryVariables,
  options?: UseQueryOptions<GetAllPostsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetAllPostsQuery, TError, TData>(
    variables === undefined ? ["GetAllPosts"] : ["GetAllPosts", variables],
    fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(
      client,
      GetAllPostsDocument,
      variables,
      headers
    ),
    options
  );
