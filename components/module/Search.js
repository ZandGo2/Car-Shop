import { useState } from "react";
import styles from "./search.module.css";
import { useRouter } from "next/router";

const Search = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const route = useRouter();

  const clickHandler = () => {
    if (min && max) {
      route.push(`/filter/${min}/${max}`);
    } else {
      alert("Please inter min and max prices");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          value={min}
          type="number"
          placeholder="inter min-price"
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          value={max}
          type="number"
          placeholder="inter max-price"
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={clickHandler}>Search</button>
    </div>
  );
};

export default Search;
