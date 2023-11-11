import styles from "./footer.module.css";
import { TbBrandGithub, TbBrandPlanetscale } from "react-icons/tb";

export const Footer = () => (
  <footer>
    <div className={styles["constrained-container"]}>
      <figure className={styles["logo-figure"]}>
        <TbBrandPlanetscale size={27} />
        <figcaption>CONSTEL</figcaption>
      </figure>
      <div className={styles["link-container"]}>
        <a
          href="https://github.com/HamishProudlock/"
          target="_blank"
          rel="noreferrer"
        >
          Hamish's Github
          <TbBrandGithub style={{ color: "#18182a", marginLeft: "0.5rem" }} />
        </a>
        <a
          href="https://github.com/tobias-edwards/"
          target="_blank"
          rel="noreferrer"
        >
          Toby's Github
          <TbBrandGithub style={{ color: "#18182a", marginLeft: "0.5rem" }} />
        </a>
      </div>
    </div>
  </footer>
);
