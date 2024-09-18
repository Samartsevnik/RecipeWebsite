import { FC, useMemo } from 'react';
import { Pagination as BPagination } from 'react-bootstrap';
import { PAGINATION_MAX_ITEMS } from '../../constants.ts';

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalResults,
  onPageChange,
}) => {
  const totalPages = useMemo(
    () => Math.round(totalResults / PAGINATION_MAX_ITEMS),
    [totalResults]
  );

  const pageNumbers: number[] = useMemo(() => {
    const pages = [];
    const maxItems = Math.min(PAGINATION_MAX_ITEMS, totalPages);

    const startPage = Math.max(1, currentPage - Math.floor(maxItems / 2));
    const endPage = Math.min(totalPages, startPage + maxItems - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalResults, currentPage]);

  return (
    <BPagination>
      {totalPages > PAGINATION_MAX_ITEMS && pageNumbers[0] !== 1 && (
        <BPagination.Ellipsis />
      )}
      {pageNumbers.map((pageNumber) => (
        <BPagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </BPagination.Item>
      ))}
      {totalPages > PAGINATION_MAX_ITEMS &&
        pageNumbers[pageNumbers.length - 1] !== totalPages && (
          <BPagination.Ellipsis />
        )}
    </BPagination>
  );
};

export default Pagination;
