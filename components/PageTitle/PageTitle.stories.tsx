import type { Meta, StoryObj } from "@storybook/react";

import { PageTitle } from "./PageTitle";
import { PageTitleType } from "./PageTitle.types";

import { Heebo } from "next/font/google";
import "../../app/globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

const meta = {
  title: "Structure/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={heebo.className}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<PageTitleType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    customClass: "",
    imgSrc: "/logo_black.svg",
    imgWidth: 104,
    imgHeight: 36,
    altImage: "Logo ioasys",
    title: "Books",
  },
};
