import "./items.styles.css";
import { useState } from "react";

function Items({ cell }) {
  const [active, setActive] = useState(false);
  const change = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className={active ? "Active" : "Inactive"} onClick={change}>
      <h3>{cell}</h3>
    </div>
  );
}
export default Items;
