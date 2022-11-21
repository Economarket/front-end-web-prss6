import * as S from "./styles";
import Button from "../Button";

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
  onPreviousPage,
}: PaginationProps) {
  return (
    <S.Wrapper>
      <S.PageSize>
        {listLength ? firstPageElement : 0} - {lastPageElement} de{" "}
        {totalElements}
      </S.PageSize>
      <S.ButtonWrapper>
        <Button
          appearance="ghost"
          sizes="small"
          // icon={FirstPage}
          onClick={onFirstPage}
          disabled={pageNumber < 2}
        />

        <Button
          appearance="ghost"
          sizes="small"
          // icon={ChevronLeft}
          onClick={onPreviousPage}
          disabled={pageNumber < 2}
        />

        <Button
          appearance="ghost"
          sizes="small"
          // icon={ChevronRight}
          onClick={onNextPage}
          disabled={pageNumber === totalPageNumber}
        />

        <Button
          appearance="ghost"
          sizes="small"
          // icon={LastPage}
          onClick={onLastPage}
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
