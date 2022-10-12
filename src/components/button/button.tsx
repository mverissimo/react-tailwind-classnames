import type { ReactNode } from "react";

import { useStyles } from "./button.styles";

export interface ButtonProps {
  appearance?: "primary" | "success";
  children: ReactNode;
}

function Button(props: ButtonProps) {
  let { appearance = "primary" } = props;
  let { cx, classes } = useStyles();

  return (
    <button
      className={cx(classes.base, classes.appearances[appearance])}
      {...props}
    />
  );
}

export default Button;
