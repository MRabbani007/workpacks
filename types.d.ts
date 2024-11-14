import { ReactNode } from "react";

export type ACCORDION_ITEM = {
  title: string;
  content: ReactNode;
};

export type DROPDOWN_ITEM = { label: string; url: string };
