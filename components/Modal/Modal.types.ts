import React from "react";

export type ModalType = {
  setShowModal: (show: boolean) => void,
  book: {
    srcImage: string
    altImage: string
  }
} & React.HTMLAttributes<HTMLDivElement>;
