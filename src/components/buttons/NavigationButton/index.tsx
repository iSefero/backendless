import { Link, useLocation } from "react-router-dom";
import { styles } from "./styles";
import { INavigationButton } from "./types";

export default function NavigationButton({ href, name }: INavigationButton) {
  const { pathname } = useLocation();
  const selectedButton = pathname.includes(href);

  return (
    <Link to={href} style={styles.link}>
      <button style={styles.button(selectedButton)}>{name}</button>
    </Link>
  );
}
