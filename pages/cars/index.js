import ListCar from "../../components/template/ListCar";
import carsData from "../../data/carsData";

const cars = () => {
  return (
    <div>
      <ListCar data={carsData} />
    </div>
  );
};

export default cars;
