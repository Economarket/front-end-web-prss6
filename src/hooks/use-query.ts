import queryString from "query-string";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";

export interface QueryParams {
  category?: string;
  external?: boolean;
  market?: string;
}

const useQuery = (): [QueryParams, (newQuery: QueryParams) => void] => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState<QueryParams>({} as QueryParams);

  useEffect(() => {
    setQuery(queryString.parse(location.search) as unknown as QueryParams);
  }, [location.search]);

  const updateQuery = useCallback(
    (newQuery: QueryParams) => {
      navigate({
        pathname: location.pathname,
        search: queryString.stringify(newQuery),
      });
    },
    [location, navigate]
  );

  return [query, updateQuery];
};

export default useQuery;
