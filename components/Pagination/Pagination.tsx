import { useCallback, useMemo } from "react";

import { PaginationType } from "./Pagination.types";

import { CircularButton } from "../CircularButton";

import S from "./Pagination.module.css";

export const Pagination = ({
  page,
  setPage,
  listSize,
  itemsPerPage,
}: PaginationType) => {
  const currentPages = useMemo(() => {
    return (
      listSize % itemsPerPage > 0
        ? listSize / itemsPerPage + 1
        : listSize / itemsPerPage
    ).toFixed();
  }, [itemsPerPage, listSize]);

  const handleChangePage = useCallback(
    (method: "decrement" | "increment") => {
      if (method === "decrement" && page > 0) setPage((old: number) => old - 1);
      if (method === "increment" && page * itemsPerPage <= listSize)
        setPage((old: number) => old + 1);
    },
    [listSize, page, setPage, itemsPerPage]
  );

  return (
    <div className={S.pagination}>
      <p>
        Página <b>{page + 1}</b> de <b>{currentPages}</b>
      </p>
      <CircularButton
        customClass={S.previous}
        srcImage="/arrow.svg"
        altImage="Anterior"
        onClick={() => handleChangePage("decrement")}
        disabled={page === 0}
      />
      <CircularButton
        srcImage="/arrow.svg"
        altImage="Próximo"
        onClick={() => handleChangePage("increment")}
        disabled={(page + 1) * itemsPerPage >= listSize}
      />
    </div>
  );
};
