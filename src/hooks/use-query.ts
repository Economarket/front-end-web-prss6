import queryString from 'query-string';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

const useQuery = <T>(): [T, (newQuery: T) => void] => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState<T>({} as T);

  useEffect(() => {
    setQuery(queryString.parse(location.search) as unknown as T);
  }, [location.search]);

  const updateQuery = useCallback((newQuery: T) => {
    navigate({
      pathname: location.pathname,
      search: queryString.stringify({})
    });
  }, [location, navigate]);

  return [query, updateQuery];
};

export default useQuery;
