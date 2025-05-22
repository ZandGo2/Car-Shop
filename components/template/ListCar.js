import CarCard from "./CarCard";

const ListCar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <CarCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListCar;
