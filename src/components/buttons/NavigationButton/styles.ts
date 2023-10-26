export const styles = {
  link: {
    width: "100%",
    height: "56px",
  },
  button: (selectedButton: boolean) => ({
    width: "100%",
    height: "56px",
    backgroundColor: selectedButton ? "grey" : "black",
    color: "white",
    fontSize: "20px",
  }),
};
