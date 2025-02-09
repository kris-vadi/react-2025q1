export interface PaginationProps {
  setPage: (page: number) => void;
  page: number;
  prev: string | null;
  next: string | null;
}
