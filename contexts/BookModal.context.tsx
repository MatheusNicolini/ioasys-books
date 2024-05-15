import { BookType } from "@/types/Book.types";
import { createContext, useState, ReactNode } from "react";

type BookModalType = {
  book: BookType;
  setBook: (book: BookType) => void;
};

export const BookModalContext = createContext<BookModalType>(
  {} as BookModalType
);

type BookModalProviderType = {
  children: ReactNode;
};

export const BookModalProvider = ({ children }: BookModalProviderType) => {
  const [book, setBook] = useState({} as BookType);

  return (
    <BookModalContext.Provider value={{ book, setBook }}>
      {children}
    </BookModalContext.Provider>
  );
};
