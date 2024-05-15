"use client";
import { useState } from "react";

import { books } from "@/mock/books";

import { Pagination } from "../Pagination";
import { CardBook } from "../CardBook/CardBook";

import S from "./BookList.module.css";

export const BookList = () => {
  const booksPerPage = 12;
  const [page, setPage] = useState<number>(0);

  return (
    <>
      <div className={S.booksList}>
        {books
          .slice(page * booksPerPage, page * booksPerPage + booksPerPage)
          .map((book) => (
            <CardBook key={book.id} book={book}/>
          ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        listSize={books.length}
        itemsPerPage={booksPerPage}
      />
    </>
  );
};
