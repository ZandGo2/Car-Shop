import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import ListCar from "../../components/template/ListCar";
import Back from "../../components/module/back";

const categoryCar = () => {
  const route = useRouter();
  const data = carsData.filter(
    (item) => item.category == route.query.categoryCar
  );
  return (
    <>
      <Back />
      <ListCar data={data} />;
    </>
  );
};

export default categoryCar;
