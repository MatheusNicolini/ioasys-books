import { Dispatch, SetStateAction } from "react";

export type PaginationType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  listSize: number;
  itemsPerPage: number;
};
