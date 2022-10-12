import clsx from "clsx";

export function createStyles<Classes = string>(input: Classes) {
  let useStyles = () => ({
    cx: clsx,
    classes: input,
  });

  return useStyles;
}
