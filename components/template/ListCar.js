import CarCard from "./CarCard";
import styles from "./ListCar.module.css";

const ListCar = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <CarCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListCar;
