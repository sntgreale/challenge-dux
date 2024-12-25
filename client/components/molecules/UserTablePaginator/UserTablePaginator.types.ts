export interface UserTablePaginatorProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasMoreUsers: boolean;
}
