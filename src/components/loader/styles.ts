import { CSSProperties } from "react";

export const styles = {
  wrapper: {
    backgroundColor: "rgba(128, 128, 128, 0.7)",
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    justifyContent: "center",
    alignItems: "center",
  } as CSSProperties,
  text: {
    width: "75px",
  },
};
