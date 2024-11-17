import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ali Haider</div>
      <div className={styles.text}>
        Haider creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
