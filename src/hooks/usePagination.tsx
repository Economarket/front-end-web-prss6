import { useCallback, useEffect, useState } from 'react';
import { PAGE_SIZE } from '../constants';

type PaginationProp = {
  lastPage: boolean;
  totalElements: number;
  totalPageNumber: number;
};

export type PaginationReturn = {
  PAGE_SIZE: number;
  pagination: {
    pageNumber: number;
    lastPage: boolean;
    totalElements: number;
    totalPageNumber: number;
    firstPageElement: number;
    lastPageElement: number;
  };
  handlePagination: (param: PaginationProp) => void;
  paginationEvents: {
    onFirstPage: () => void;
    onLastPage: () => void;
    onPreviousPage: () => void;
    onNextPage: () => void;
  };
};

export function usePagination(): PaginationReturn {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    lastPage: true,
    totalElements: 0,
    totalPageNumber: 1,
    firstPageElement: 0,
    lastPageElement: 0
  });

  const { pageNumber, lastPage, totalElements } = pagination;

  useEffect(() => {
    const firstPageElement = PAGE_SIZE * pageNumber - (PAGE_SIZE - 1);
    const lastPageElement = lastPage ? totalElements : PAGE_SIZE * pageNumber;

    setPagination(oldState => ({
      ...oldState,
      firstPageElement,
      lastPageElement
    }));
  }, [lastPage, pageNumber, totalElements]);

  const onFirstPage = useCallback(() => {
    setPagination(oldState => ({ ...oldState, pageNumber: 1 }));
  }, []);

  const onLastPage = useCallback(() => {
    setPagination(oldState => ({
      ...oldState,
      pageNumber: pagination.totalPageNumber
    }));
  }, [pagination.totalPageNumber]);

  const onPreviousPage = useCallback(() => {
    if (pagination.pageNumber > 1) {
      setPagination(oldState => ({
        ...oldState,
        pageNumber: oldState.pageNumber - 1
      }));
    }
  }, [pagination.pageNumber]);

  const onNextPage = useCallback(() => {
    if (pagination.pageNumber < pagination.totalPageNumber) {
      setPagination(oldState => ({
        ...oldState,
        pageNumber: oldState.pageNumber + 1
      }));
    }
  }, [pagination.pageNumber, pagination.totalPageNumber]);

  const handlePagination = useCallback((param: PaginationProp) => {
    setPagination(oldState => ({
      ...oldState,
      ...param
    }));
  }, []);

  return {
    PAGE_SIZE,
    pagination,
    handlePagination,
    paginationEvents: {
      onFirstPage,
      onLastPage,
      onPreviousPage,
      onNextPage
    }
  };
}
