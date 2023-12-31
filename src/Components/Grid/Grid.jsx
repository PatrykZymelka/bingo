import "./Grid.styles.css";
import items from "../Json/items.json";
import { useEffect, useState } from "react";

function Grid() {
  function json2array(json) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
      result.push(json[key]);
    });
    return result;
  }

  function shuffleArray(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const [cells, setCells] = useState({
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
    cell5: "",
    cell6: "",
    cell7: "",
    cell8: "",
    cell9: "",
    cell10: "",
    cell11: "",
    cell12: "",
    cell13: "FREE SPACE",
    cell14: "",
    cell15: "",
    cell16: "",
    cell17: "",
    cell18: "",
    cell19: "",
    cell20: "",
    cell21: "",
    cell22: "",
    cell23: "",
    cell24: "",
    cell25: "",
  });

  useEffect(() => {
    var i = json2array(items);
    i = shuffleArray(i);
    setCells((prevState) => ({
      ...prevState,
      cell1: i[0].description,
      cell2: i[1].description,
      cell3: i[2].description,
      cell4: i[3].description,
      cell5: i[4].description,
      cell6: i[5].description,
      cell7: i[6].description,
      cell8: i[7].description,
      cell9: i[8].description,
      cell10: i[9].description,
      cell11: i[10].description,
      cell12: i[11].description,
      cell14: i[12].description,
      cell15: i[13].description,
      cell16: i[14].description,
      cell17: i[15].description,
      cell18: i[16].description,
      cell19: i[17].description,
      cell20: i[18].description,
      cell21: i[19].description,
      cell22: i[20].description,
      cell23: i[21].description,
      cell24: i[22].description,
      cell25: i[23].description,
    }));
  }, []);

  useEffect(() => {
    console.log(cells);
  }, [cells]);

  const cellArray = Object.values(cells);

  return (
    <div className="Square">
      {cellArray.map((cell, id) => (
        <div key={id} className="Cell">
          <text className="Text">{cell}</text>
        </div>
      ))}
      ;
    </div>
  );
}

export default Grid;
