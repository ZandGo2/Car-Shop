import Link from "next/link";
import Sport from "../icons/Sport";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import styles from "./categories.module.css";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="category/sedan">
          <Sedan />
          Sedan
        </Link>
      </div>
      <div>
        <Link href="category/suv">
          <Suv />
          Suv
        </Link>
      </div>
      <div>
        <Link href="category/hatchback">
          <Hatchback />
          Hatchback
        </Link>
      </div>
      <div>
        <Link href="category/sport">
          <Sport /> Sport
        </Link>
      </div>
    </div>
  );
};

export default Categories;
