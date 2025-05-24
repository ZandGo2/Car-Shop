import styles from "./Layout.module.css";

const layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h3>SHOP CAR</h3>
        <p>Choose and buy your car</p>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <p>Next.JS course | Shop car Project</p>
      </footer>
    </>
  );
};

export default layout;
