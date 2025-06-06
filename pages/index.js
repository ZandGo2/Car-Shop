import Categories from "../components/module/Categories";
import Search from "../components/module/Search";
import ListCar from "../components/template/ListCar";
import carsData from "../data/carsData";
import Link from "next/link";
import styles from "../components/layout/Layout.module.css";

function Index() {
  const data = carsData.slice(0, 3);
  return (
    <div>
      <Search />
      <Categories />
      <div className={styles.btn}>
        <Link href="/cars">See All Cars</Link>
      </div>
      <div>
        <ListCar data={data} />
      </div>
    </div>
  );
}

export default Index;
