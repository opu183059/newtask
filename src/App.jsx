import { useContext, useState } from "react";
import "./App.css";
import Calculator from "./Components/Calculator";
import { Authcontex } from "./Provider/Authprovider";
import { useNavigate } from "react-router-dom";

function App() {
  const { signOuthandle } = useContext(Authcontex);
  const [calculators, setCalculators] = useState([{ id: 0 }]);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOuthandle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addCalculator = () => {
    // setCalculators([...calculators, <Calculator key={calculators.length} />]);
    setCalculators([...calculators, { id: calculators.length }]);
  };

  // const deleteCalculator = (index) => {
  //   setCalculators(calculators.filter((_, i) => i !== index));
  // };

  const deleteCalculator = (id) => {
    setCalculators(calculators.filter((calculator) => calculator.id !== id));
  };

  return (
    <div className="main">
      <div>
        <button onClick={addCalculator}>Add Calculator</button>

        <div className="calculatorGrp">
          {calculators.map((calculator) => (
            <Calculator
              key={calculator.id}
              id={calculator.id}
              onDelete={deleteCalculator}
            />
          ))}
        </div>
      </div>
      <button onClick={handleSignOut}>Log Out</button>
    </div>
  );
}

export default App;
