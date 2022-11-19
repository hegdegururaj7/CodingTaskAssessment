import styles from "./ProgressBar.module.scss";
import { useState } from "react";


export interface IStyleInfo {
  width: number;
}

export interface IProgressBarInfo {
  id: string;
  styleDetails: IStyleInfo;
}
export interface IProgressBarButtonInfo {
  id: number;
  progressBarWidth: number;
}
const progressBarButtonList = [
  { id: 1, progressBarWidth: -10 },
  { id: 2, progressBarWidth: -25 },
  { id: 3, progressBarWidth: 10 },
  { id: 4, progressBarWidth: 25 }
];

export default function ProgressBar(progressBarDetails: any) {
  const [incerementedWidth1, incrementCurrentWidth1] = useState(25);
  const [incerementedWidth2, incrementCurrentWidth2] = useState(50);
  const [incerementedWidth3, incrementCurrentWidth3] = useState(75);
  const progressBarInfoList = [
    {
      id: "1",
      styleDetails: {
        width: incerementedWidth1
      }
    },
    {
      id: "2",
      styleDetails: {
        width: incerementedWidth2
      }
    },
    {
      id: "3",
      styleDetails: {
        width: incerementedWidth3
      }
    }
  ];

  function setCurrentWidthSelected(event: Event,progressBarButtonWidth: number) {
    event.preventDefault();
    const progressBarFinderId = progressBarInfoList.find(
      (x) => x.id === progressBarDetails.progressBarValues.progressBarOptionId
    )?.id;
    if (progressBarFinderId === "1")
      incrementCurrentWidth1(progressBarButtonWidth + incerementedWidth1);
    if (progressBarFinderId === "2")
      incrementCurrentWidth2(progressBarButtonWidth + incerementedWidth2);
    if (progressBarFinderId === "3")
      incrementCurrentWidth3(progressBarButtonWidth + incerementedWidth3);
    return;
  }

  return (
    <>
      {progressBarInfoList.map(
        (progressBar: IProgressBarInfo) => (
          <div key={progressBar.id.toString()} className={styles.wrapper}>
            <br></br>
            {progressBar.styleDetails.width > 100 ? (
              <div
              key={progressBar.id.toString()}
                className={styles.bar}
                style={{
                  width: progressBar.styleDetails.width + "%",
                  background: "red"
                }}
              >
                <div key={progressBar.id.toString()}>
                  <b className={styles.textCenter}>
                    {progressBar.styleDetails.width + "%"}
                  </b>
                </div>
              </div>
            ) : (
              <div
              key= {progressBar.id.toString()}
                className={styles.bar}
                style={{
                  width: progressBar.styleDetails.width + "%"
                }}
              >
                <div
                key={progressBar.id.toString()}>
                  <b className={styles.textCenter}>
                    {progressBar.styleDetails.width + "%"}
                  </b>
                </div>
              </div>
            )}
          </div>
        )
      )}
      {progressBarButtonList.map(
        (option: IProgressBarButtonInfo) => (
          <div>
            <button
              onClick ={(event: any) => {
                setCurrentWidthSelected(event,option.progressBarWidth);
              }}
              className={styles.progressBarButton}
              value={option.id}
            >
              <span  onClick ={(event: any) => {
                setCurrentWidthSelected(event,option.progressBarWidth);
              }}>{option.progressBarWidth}</span>
            </button>
            </div>
        )
      )}
    </>
  );
}
