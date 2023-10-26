import { ILayoutWithNavigation } from "./types";
import Navigation from "../../../widgets/navigation";
import { styles } from "./styles";

export default function LayoutWithNavigation({
  children,
  navigationList,
}: ILayoutWithNavigation) {
  return (
    <div style={styles.wrapper}>
      <Navigation navigationList={navigationList} />
      {children}
    </div>
  );
}
