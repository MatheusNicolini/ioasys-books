import { useContext } from "react";
import Image from "next/image";

import { BookModalContext } from "@/contexts/BookModal.context";

import { BookType } from "@/types/Book.types";

import S from "./CardBook.module.css";

interface CardBookProps {
  book: BookType;
}

export const CardBook = ({ book }: CardBookProps) => {
  const { setBook } = useContext(BookModalContext);

  return (
    <div
      className={S.booksDescription}
      onClick={() => setBook(book)}
    >
      <Image
        src={book.srcImage}
        width={113}
        height={160}
        alt={book.altImage}
      />
      <div className={S.bookInfo}>
        <div>
          <p className={S.bookTitle}>{book.title}</p>
          <p className={S.bookAuthor}>{book.author}</p>
        </div>

        <div className={S.otherInformations}>
          <p>{book.pages}</p>
          <p>{book.publishingCompany}</p>
          <p>Publicado em {book.publicationDate}</p>
        </div>
      </div>
    </div>
  );
}