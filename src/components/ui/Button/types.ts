import type React from "react";

export interface IButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
