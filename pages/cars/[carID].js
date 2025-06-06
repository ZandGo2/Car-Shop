import Location from "../../components/icons/Location";
import Money from "../../components/icons/Money";
import Road from "../../components/icons/Road";
import Calender from "../../components/icons/Calender";
import Company from "../../components/icons/Company";
import Model from "../../components/icons/Model";
import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import styles from "../../components/template/carID.module.css";
import Back from "../../components/module/back";

const DetailCar = () => {
  const Route = useRouter();
  const { carID } = Route.query;
  const data = carsData[carID - 1];

  if (!data) return <div>Car not found</div>;

  const {
    name,
    model,
    year,
    distance,
    location,
    price,
    image,
    description,
  } = data;

  return (
    <>
      <Back />
      <div className={styles.container}>
        <img src={image} className={styles.image} />
        <h3 className={styles.header}>
          {name} {model}
        </h3>
        <div className={styles.details}>
          <div>
            <Company />
            <p>Company</p>
            <span>{name}</span>
          </div>
          <div>
            <Model />
            <p>Model</p>
            <span>{model}</span>
          </div>
          <div>
            <Calender />
            <p>First registration</p>
            <span>{year}</span>
          </div>
          <div>
            <Road />
            <p>kms driven</p>
            <span>{distance}</span>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            <Location />
            <p>Location</p>
            <span>{location}</span>
          </div>
        </div>
        <div className={styles.details}>
          <p className={styles.descriptionTitle}>Extra Information</p>
          <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.price}>
            <Money />
            <p>Price:</p>
            <span>{price}</span>
          </div>
        </div>
        <button className={styles.button}>Buy</button>
      </div>{" "}
    </>
  );
};

export default DetailCar;
