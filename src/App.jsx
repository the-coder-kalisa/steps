import React, { useState } from "react";
import Header from "./components/Header";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Forms1 } from "./components/Forms";
const App = () => {
  const steps = ["Kişisel Bilgiler", "Dosya yükleme", "Finish Wizard"];
  const [step, setStep ] = useState(0);
  return (
    <div className=" bg-[whitesmoke] min-h-screen">
      <Header />
      <Stepper className="mt-10 mb-5 lg:max-w-xl" activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Forms1 />
    </div>
  );
};

export default App;
