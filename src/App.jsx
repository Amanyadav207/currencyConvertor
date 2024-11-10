import React from "react";
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {

  const [amount,setAmoount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [To ,setTo]  = useState("inr")
  const [convertedAmount,setConvertedAmount] =useState(0)
  // const [currency,setCurrency] 

  const currencyInfo = useCurrencyInfo(from);
  // console.log(currencyInfo)
  
  const options = Object.keys(currencyInfo)
  console.log(options);
  

  const convert = () =>{
    setConvertedAmount(amount*currencyInfo[To])
  }

  const swap = ()=>{
    setTo(from)
    setFrom(To)
    setAmoount(convertedAmount)
    setConvertedAmount(amount)
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/2522654/pexels-photo-2522654.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              value={from}
                              currencyOptions={options}
                              amount={amount}
                              onamoutChange={(amount) => setAmoount(amount)}
                              setCurrency={from}
                              oncurrencyChange={(currency) => setFrom(currency)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              value={To}
                              amount={convertedAmount}
                              currencyOptions={options}
                              onamoutChange={(amount) => setAmoount(amount)}
                              setCurrency={To}
                              oncurrencyChange={(currency) => setTo(currency)}

                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;