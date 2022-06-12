export interface ApiResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: ApiResponseData[];
  support: { key: string };
}

export interface ApiResponseData {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface CurrentPage {
  currentPage: number;
}

export interface PaginationProps {
  pagesCount: number;
}

export interface InputI {
  inputValue: string;
}
