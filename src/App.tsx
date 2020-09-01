import React from "react"
import FootStatus from "./components/FootStatus"

const App: React.FC = () => {
  return (
  <FootStatus 
    badgeC02={300} 
    mainC02={1400} 
    descriptionText="CO2 Fussabdruck (1 Jahr)" 
  /> 
  )
}

export default App