import { CSSProperties } from "react";

export const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "20px 10px",
  } as CSSProperties,
  title: {
    textAlign: "center",
  } as CSSProperties,
  completedWrapper: (width?: number) => ({
    width: width ? `${width}%` : 0,
    backgroundColor: "green",
    height: "20px",
  }),
  unCompletedWrapper: (width?: number) => ({
    width: width ? `${width}%` : 0,
    backgroundColor: "red",
    height: "20px",
  }),
};
