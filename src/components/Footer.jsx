import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center`}>
      <p>Copyright © Cookchef</p>
    </footer>
  );
}

export default Footer;
