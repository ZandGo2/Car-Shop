import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import ListCar from "../../components/template/ListCar";
import Back from "../../components/module/back";

const filterCar = () => {
  const route = useRouter();
  const [min, max] = route.query.slug || [];
  const data = carsData.filter((item) => item.price > min && item.price < max);

  if (!data.length) return <h3>Car Not Found</h3>;
  return (
    <>
      <Back />
      <ListCar data={data} />;
    </>
  );
};

export default filterCar;
