"use client";

import { useAuth } from "@/hooks/useAuth";

import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Modal } from "@/components/Modal/Modal";
import { BookModalProvider } from "@/contexts/BookModal.context";
import { BookList } from "@/components/BookList";
import { CircularButton } from "@/components/CircularButton";
import Auth from "@/components/Auth/Auth";

import S from "./books.module.css";

export default function Books() {
  const { logout } = useAuth();

  return (
    <BookModalProvider>
      <Auth authenticated />

      <Modal />

      <main className={S.books}>
        <Container className={S.containerBooks}>
          <div className={S.topBar}>
            <PageTitle
              imgSrc="/logo_black.svg"
              imgWidth={104}
              imgHeight={36}
              altImage="Logo ioasys"
              title="Books"
            />

            <div className={S.info}>
              <p>
                Bem vindo, <b>Matheus!</b>
              </p>

              <CircularButton
                srcImage="/log-out.svg"
                altImage="Log Out"
                onClick={logout}
              />
            </div>
          </div>
          <BookList />
        </Container>
      </main>
    </BookModalProvider>
  );
}
