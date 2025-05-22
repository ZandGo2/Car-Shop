import Categories from "../components/module/Categories";
import Search from "../components/module/Search";
import ListCar from "../components/template/ListCar";
import carsData from "../data/carsData";
import Link from "next/link";

function Index() {
  const data = carsData.slice(0, 3);
  return (
    <div>
      <Search />
      <Categories />
      <div>
        <Link href="/cars">See All Cars</Link>
      </div>
      <div>
        <ListCar data={data} />
      </div>
    </div>
  );
}

export default Index;
