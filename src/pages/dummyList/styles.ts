import { CSSProperties } from "react";

export const styles = {
  wrapper: {
    padding: "20px 0px",
  },
  title: {
    textAlign: "center",
  } as CSSProperties,
  list: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  } as CSSProperties,
  listItem: {
    flexDirection: "column",
    display: "flex",
  } as CSSProperties,
  listTitle: {
    margin: "10px 0px",
  },
};
