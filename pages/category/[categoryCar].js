import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import ListCar from "../../components/template/ListCar";

const categoryCar = () => {
  const route = useRouter();
  const data = carsData.filter(
    (item) => item.category == route.query.categoryCar
  );
  return <ListCar data={data} />;
};

export default categoryCar;
