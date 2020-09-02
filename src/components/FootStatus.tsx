import React from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
  mainDiv: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 50,
    flexDirection: "column",
  },
  circle: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    display: "flex",
    width: 500,
    height: 500,
    borderRadius: 500/2,
    backgroundColor: "#F0F0F0",
  },
  mainText: {
    fontSize: 140,
    fontWeight: "bold",
    color: "#41B575",
  },
  maintTextUnit: {
    display: "flex",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "normal",
    color: "#56BC82",
  },
  badgeStyle: {
    position: "absolute",
    top: -28,
    left: "55%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#F3BCAF",
    borderRadius: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#513322",
  },
  descriptionStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#010101",
    marginTop: 50,
    textAlign: "center",
  }
})

interface Props {
  badgeC02: number;
  mainC02: number;
  descriptionText: string;
}

const FootStatus : React.FC<Props> = ({badgeC02, descriptionText, mainC02}) => {
  const styles = useStyles()
  return (
      <div className={styles.mainDiv}>
        <div className={styles.circle}>
          <div className={styles.mainText}>{mainC02}
            <div className={styles.maintTextUnit}>kg CO2</div>
          </div> 
          <div className={styles.badgeStyle}>+ {badgeC02} kg</div>
        </div>
        <div className={styles.descriptionStyle}>
          <div>Dein personlicher</div>
          <div>{descriptionText}</div>
        </div>
      </div>
  )
}

export default FootStatus