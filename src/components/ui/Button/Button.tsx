import type { IButtonPropsType } from "./types";

export const Button = (props: IButtonPropsType) => {
  return (
    <button className={props.className} onClick={props.onClick} {...props}>
      {props.title}
    </button>
  );
};
