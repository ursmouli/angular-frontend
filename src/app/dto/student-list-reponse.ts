import { Pageable } from "./pageable";
import { Sort } from "./sort";
import { Student } from "./student";


export interface StudentListReponse {
  content: Student[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  empty: boolean;
}