import styles from "./ProgressBarList.module.scss";
import { SyntheticEvent, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";

export interface IProgressBarButtonInfo {
  id: number;
  progressBarWidth: number;
}

export interface IProgressBar {
  id: number;
  name: string;
  width: number;
}
const progressBarList = [
  { id: 1, name: "progressBarOne", width: 25 },
  { id: 2, name: "progressBarTwo", width: 50 },
  { id: 3, name: "progressBarThree", width: 75 }
];
const progressBarButtonList = [
  { id: 11, progressBarWidth: -10 },
  { id: 12, progressBarWidth: -25 },
  { id: 13, progressBarWidth: 10 },
  { id: 14, progressBarWidth: 25 }
];

export default function ProgressBarList() {
  const [selectedProgressBar, selectProgressBar] = useState<number>(1);
  const [progressBarListInt, setProgressBarList] = useState(progressBarList);

  const setWidth = (event: SyntheticEvent) => {
    let temp = progressBarListInt.map((x: IProgressBar) => {
      if (x.id === selectedProgressBar) {
        let tempWidth = x.width + parseInt(event.target?.value);
        x.width = tempWidth < 0 ? 0 : tempWidth;
      }
      return x;
    });
    setProgressBarList(temp);
  };

  const onChangeHandler = (event: any) => {
    selectProgressBar(parseInt(event.target.value));
  };
  return (
    <>
      <div className={styles.header}>
        <h2>Progress Bar Demo</h2>
      </div>
      <div>
        {progressBarListInt.map((option: IProgressBar) => (
          <ProgressBar width={option.width} />
        ))}
      </div>
      <div className={styles.container}>
        <select
          role="progressBarItems"
          onChange={onChangeHandler}
          className={styles.progressBar}
        >
          {progressBarList.map((option: IProgressBar) => (
            <option
              role="option"
              data-testid="selector"
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          ))}
        </select>
        {progressBarButtonList.map((option: IProgressBarButtonInfo) => (
          <button
            role="button"
            key={option.id}
            onClick={setWidth}
            value={option.progressBarWidth}
          >
            {option.progressBarWidth}
          </button>
        ))}
      </div>
    </>
  );
}
