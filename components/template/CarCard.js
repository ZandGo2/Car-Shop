import Location from "../icons/Location";
import Link from "next/link";
import styles from "./CarCard.module.css";

const CarCard = ({
  name,
  model,
  year,
  distance,
  location,
  price,
  image,
  id,
}) => {
  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} className={styles.image} />
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
