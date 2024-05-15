import Image from "next/image";
import { useContext } from "react";

import { BookModalContext } from "@/contexts/BookModal.context";

import { BookType } from "@/types/Book.types";

import { CircularButton } from "../CircularButton";

import S from "./Modal.module.css";

export const Modal = () => {
  const { book, setBook } = useContext(BookModalContext);

  if (book.id) {
    return (
      <div className={S.modal}>
        <div className={S.backdrop} onClick={() => setBook({} as BookType)} />
        <CircularButton customClass={S.close} srcImage="/close.svg" altImage="Fechar" onClick={() => setBook({} as BookType)} />


        <div className={S.wrapModal}>
          <div className={S.wrapImage}>
            <Image
              className={S.bookImage}
              src='/book-modal.png'
              width={349}
              height={512}
              alt={book.altImage}
            />
          </div>

          <div className={S.bookInfo}>
            <div>
              <p className={S.title}>{book.title}</p>
              <p className={S.author}>{book.author}</p>
            </div>

            <div>
              <p className={S.topic}>Informações</p>

              <ul className={S.infoList}>
                <li>
                  <p>Páginas</p>
                  <span>{book.pages}</span>
                </li>
                <li>
                  <p>Editora</p>
                  <span>{book.publishingCompany}</span>
                </li>
                <li>
                  <p>Publicação</p>
                  <span>{book.publicationDate}</span>
                </li>
                <li>
                  <p>Idioma</p>
                  <span>{book.language}</span>
                </li>
                <li>
                  <p>Título original</p>
                  <span>{book.originalTitle}</span>
                </li>
                <li>
                  <p>ISBN-10</p>
                  <span>{book.isbn10}</span>
                </li>
                <li>
                  <p>ISBN-13</p>
                  <span>{book.isbn13}</span>
                </li>
              </ul>
            </div>

            <div>
              <p className={S.topic}>Resenha da editora</p>

              <p className={S.review}>
                <Image src="/quotes.svg" width={18} height={15} alt="" />

                The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
