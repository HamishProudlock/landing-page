import { TbBrandPlanetscale } from "react-icons/tb";
import { scrollToContactDetails } from "../../utils";
import styles from "./header.module.css";

export const Header = () => (
  <header>
    <figure className={styles["logo-figure"]}>
      <TbBrandPlanetscale size={27} />
      <figcaption>CONSTEL</figcaption>
    </figure>
    <button className={styles["contact-us"]} onClick={scrollToContactDetails}>
      Contact
    </button>
  </header>
);
