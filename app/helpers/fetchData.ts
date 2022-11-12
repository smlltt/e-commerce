const graphQlApi = process.env.NEXT_PUBLIC_GRAPHQL;

//TODO I'm not sure aobut the query type for now
const fetchData = async (query: string, variables = {}) => {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(graphQlApi || "", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors);
  }
  return json;
};

export default fetchData;
