import { a, useTrail } from "@react-spring/web";
import { useEffect, useState } from "react";
import styles from "./hero.module.css";

const Trail = ({ open }: { open: boolean }) => {
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const { height, ...style } = trail[0];
  return (
    <>
      <div className={styles["hero-text-mobile"]}>
        <a.div className={styles["trailsText"]} style={style}>
          <a.div style={{ height }}>Website</a.div>
        </a.div>
        <a.div className={styles["trailsText"]} style={style}>
          <a.div style={{ height }}>analytics</a.div>
        </a.div>
        <a.div className={styles["trailsText"]} style={style}>
          <a.div style={{ height }}>made</a.div>
        </a.div>
        <a.div className={styles["trailsText"]} style={style}>
          <a.div style={{ height }}>simple</a.div>
        </a.div>
      </div>
      <div className={styles["hero-text-desktop"]}>
        <a.div className={styles["trailsText"]} style={style}>
          <a.div style={{ height }}>Website analytics</a.div>
        </a.div>
        <a.div className={styles["trailsText"]} style={style}>
          <a.div style={{ height }}>made simple</a.div>
        </a.div>
      </div>
    </>
  );
};

export const Hero = () => {
  const [open, set] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    if (open === false) setTimeout(() => set((open) => !open), 750);
  }, [open]);

  useEffect(() => {
    if (hasSubmitted === true) setTimeout(() => setHasSubmitted(false), 5000);
  }, [hasSubmitted]);

  const signUpOnClick = () => {
    set(false);
    setHasSubmitted(true);
    setEmailInput("");
  };

  return (
    <section className={styles["hero"]}>
      <div className={styles["container"]} onClick={() => set(false)}>
        <Trail open={open} />
      </div>
      <div className={styles["sign-up"]}>
        <label htmlFor="email" className={styles["sign-up-label"]}>
          Sign up with your email address to receive news and updates
        </label>
        <div className={styles["email-input"]}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          />
          <button
            className={styles["sign-up-button"]}
            disabled={emailInput === ""}
            onClick={signUpOnClick}
          >
            Sign up
          </button>
        </div>
        {hasSubmitted ? (
          <p className={styles["we-will-be-in-touch"]}>
            *Great! We'll be in touch!
          </p>
        ) : (
          <span className={styles["space-filler"]}></span>
        )}
      </div>
    </section>
  );
};
