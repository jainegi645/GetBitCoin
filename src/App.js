import { useEffect, useState, useRef } from 'react';
import './App.css';


//TODO: 1.Create a button that once clicked showcases the current price of Bitcoin
//TODO: 2.After the button is clicked the buttons text changes from "get Bitcoin price" to "refresh Bitcoin price"
//TODO:3.After the button is clicked it changes color from blue to purple

//TODO:4. a)Once the button is clicked a field shows up with "Current price: " 
//TODO:  b)after a consecutive click a second field shows up with "Previous price: "


function App() {

  const [Bitcoin, setBitcoin] = useState(0);
  const [buttonName, setButtonName] = useState('get Bitcoin price');
  const [counter, setCounter] = useState(0)
  const [styling, setStyling] = useState({
    background: "blue",
    color: "white"
  })
  const PrevBitcoinValue = usePrevious(Bitcoin);




  const handleButtonClick = () => {
    console.log('handle button click');
    setCounter(counter + 1)
    setButtonName('refresh Bitcoin price');
    if (counter > 4) {
      setStyling({ ...styling, background: "purple" })
      // setBitcoin((prevState) => ({...prevState,}))
      setBitcoin((prevCount) => prevCount)
    }
    setBitcoin(Bitcoin + 10) 
  }
  return (
    <div className="App">
      <h2> Click To  Fetch Bitcoin </h2>
      Current price: {Bitcoin}

      <button style={styling} onClick={() => handleButtonClick()}>{buttonName}</button>

      {counter > 4 && <p> PrevBitcoin: {PrevBitcoinValue}</p>}



    </div>
  );
}


function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current
}

export default App;
