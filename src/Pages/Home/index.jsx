import React, { useState } from "react";
import HomeService from "./homeService";
import "../../App.css";


export const Home = () => {
  const service = new HomeService()
  
  const [optionsScenario, setOptionsScenario] = useState(service.getNextScenario());

  const selectButton = (buttonNumber) => {
    const scenario = service.getNextScenario(buttonNumber)
    setOptionsScenario(scenario)
  }

  return (<div>
    {optionsScenario.options.map((buttonText, index) => (
      <div>
        <button onClick={() => selectButton(index)} className="App">
          {buttonText}
        </button>

        <br />
      </div>
    ))}
  </div>
  )
}
