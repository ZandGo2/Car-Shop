import Categories from "../components/module/Categories";
import Search from "../components/module/Search";
import ListCar from "../components/template/ListCar";
import carsData from "../data/carsData";

function Index() {
  const data = carsData.slice(0, 3);
  return (
    <div>
      <Search />
      <Categories />
      <div>
        <button>See All Cars</button>
      </div>
      <div>
        <ListCar data={data} />
      </div>
    </div>
  );
}

export default Index;
