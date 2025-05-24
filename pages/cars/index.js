import Back from "../../components/module/back";
import ListCar from "../../components/template/ListCar";
import carsData from "../../data/carsData";

const cars = () => {
  return (
    <>
      <Back />
      <ListCar data={carsData} />
    </>
  );
};

export default cars;
