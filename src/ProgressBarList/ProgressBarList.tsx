import styles from "./ProgressBarList.module.scss";
import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

export interface IProgressBar {
  id: number;
  name: string;
}

const progressBarList = [
  { id: 1, name: "progressBarOne" },
  { id: 2, name: "progressBarTwo" },
  { id: 3, name: "progressBarThree" }
];

export default function ProgressBarList() {
  const [selectedProgressBar, selectProgressBar] = useState("1");
  const [selectedProgressButton, selectProgressButton] = useState();

  const onChangeHandler = (event:any) => {
    selectProgressBar(event.target.value);
    selectProgressButton(undefined);
  };
  return (
    <>
    <center><h2>Progress Bar Demo</h2></center>
      <div>
        <ProgressBar
          progressBarValues ={{
            progressBarButton: selectedProgressButton,
            progressBarOptionId: selectedProgressBar
          }}
        />
      </div>
      <div className={styles.progressBarOptions}>
        <select onChange={onChangeHandler} className={styles.progressBar}>
          {progressBarList.map((option: IProgressBar) => (
            <option key= {option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
