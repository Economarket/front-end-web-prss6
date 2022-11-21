import IconButton from '../IconButton';
import {
  FirstPage,
  ChevronLeft,
  ChevronRight,
  LastPage
} from '@styled-icons/material-rounded';
import * as S from './styles';

export type PaginationProps = {
  listLength: number;
  firstPageElement: number;
  lastPageElement: number;
  totalElements: number;
  totalPageNumber: number;
  pageNumber: number;
  onFirstPage: () => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onLastPage: () => void;
};

function Pagination({
  listLength,
  firstPageElement,
  lastPageElement,
  totalElements,
  pageNumber,
  totalPageNumber,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPreviousPage
}: PaginationProps) {
  return (
    <S.Wrapper>
      <S.PageSize>
        {listLength ? firstPageElement : 0} - {lastPageElement} de{' '}
        {totalElements}
      </S.PageSize>
      <S.ButtonWrapper>
        <IconButton
          icon={FirstPage}
          onClick={onFirstPage}
          color="offdark"
          disabled={pageNumber < 2}
          margin="0 1.8rem 0 0"
        />

        <IconButton
          icon={ChevronLeft}
          onClick={onPreviousPage}
          color="offdark"
          disabled={pageNumber < 2}
          margin="0 1.8rem 0 0"
        />

        <IconButton
          icon={ChevronRight}
          onClick={onNextPage}
          color="offdark"
          disabled={pageNumber === totalPageNumber}
          margin="0 1.8rem 0 0"
        />

        <IconButton
          icon={LastPage}
          onClick={onLastPage}
          color="offdark"
          disabled={pageNumber === totalPageNumber}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}

export default Pagination;



// import Pagination from '../../../components/Pagination';

// import { usePagination } from '../../../hooks/usePagination';

// const { paginationEvents, handlePagination, pagination, PAGE_SIZE } =
//     usePagination();

//     const { onFirstPage } = paginationEvents;

//     const fetchCompanies = useCallback(async () => {
//       try {
//         const data = await CompanyService.getCompany(
//           PAGE_SIZE,
//           pagination.pageNumber,
//           status,
//           value,
//           sortField,
//           sortDirection
//         );
  
//         setCompanies(data.content);
//         handlePagination({
//           lastPage: data.last,
//           totalElements: data.totalElements,
//           totalPageNumber: data.totalPages
//         });
//       } catch (error) {
//         if (axios.isAxiosError(error) && error.response?.status === 401) {
//           return;
//         }
//       }
//     }, [
//       PAGE_SIZE,
//       pagination.pageNumber,
//       status,
//       value,
//       sortField,
//       sortDirection,
//       handlePagination
//     ]);

//     useEffect(() => {
//       fetchCompanies();
//     }, [fetchCompanies]);
  
//     useEffect(() => {
//       onFirstPage();
//     }, [onFirstPage, value]);
  

//     <Pagination
//     {...paginationEvents}
//     {...pagination}
//     listLength={companies.length}
//   />