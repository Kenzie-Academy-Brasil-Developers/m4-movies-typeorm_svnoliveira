import { Movie } from "../entities"

interface Pagination {
    prevPage: string | null;
    nextPage: string | null;
    count: number;
    data: Movie[];
};

interface PaginationParams {
    page: number;
    perPage: number;
    order: string;
    sort: string;
    prevPage: string | null;
    nextPage: string | null;
};

export { Pagination, PaginationParams };