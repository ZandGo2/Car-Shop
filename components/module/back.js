import { useRouter } from "next/router";
import Back from "../icons/Back";
import styles from "./search.module.css";

const back = () => {
  const route = useRouter();

  return (
    <button className={styles.backBtn} onClick={() => route.back()}>
      <Back />
    </button>
  );
};

export default back;
