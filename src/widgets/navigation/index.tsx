import NavigationButton from "../../components/buttons/NavigationButton";
import { INavigation } from "./types";
import { styles } from "./styles";

export default function Navigation({ navigationList }: INavigation) {
  const renderNavigation = navigationList?.map((item) => (
    <NavigationButton key={item.id} href={item.id} name={item.title} />
  ));

  return <div style={styles.wrapper}>{renderNavigation}</div>;
}
