import { Container } from "@/components/Container";
import { PageTitle } from "@/components/PageTitle";
import { FormLogin } from "@/components/FormLogin/FormLogin";

import S from "./login.module.css";

export default function Login() {
  return (
    <main className={S.login}>
      <Container className={S.customContainer}>
        <PageTitle
          customClass={S.titleLogin}
          imgSrc="/logo.svg"
          imgWidth={104}
          imgHeight={36}
          altImage="Logo ioasys"
          title="Books"
        />
        <FormLogin />
      </Container>
    </main>
  );
}
