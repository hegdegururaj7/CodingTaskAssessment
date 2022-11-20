import styles from "./ProgressBar.module.scss";
export default function ProgressBar(props: any) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.bar}
        style={{
          width: `${props.width > 100 ? 100 : props.width}%`,
          background: props.width > 100 ? "red" : "skyblue"
        }}
      >
        <div>
          <b className={styles.textCenter}>{props.width + "%"}</b>
        </div>
      </div>
    </div>
  );
}
