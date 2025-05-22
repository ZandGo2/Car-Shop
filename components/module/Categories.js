import Link from "next/link";
import Sport from "../icons/Sport";
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";

const Categories = () => {
  return (
    <div>
      <Link href="">
        <Sedan />
        Sedan
      </Link>
      <Link href="">
        <Suv />
        Suv
      </Link>
      <Link href="">
        <Hatchback />
        Hatchback
      </Link>
      <Link href="">
        <Sport /> Sport
      </Link>
    </div>
  );
};

export default Categories;
