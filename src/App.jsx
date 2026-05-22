import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {
 const [from, setFrom] = useState('usd')
 const [to, setTo] = useState('bdt')
 const [amount, setAmount] = useState(0)
 const [convertedAmount, setConvertedAmount] = useState(0)

 const currencyInfo = useCurrencyInfo(from)
 const options=Object.keys(currencyInfo) //holds all the keys
 const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }
 const convert = () =>  {
  setConvertedAmount(amount * currencyInfo[to])
 }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://images.pexels.com/photos/16809843/pexels-photo-16809843.jpeg)`}}>
  <div className="w-full">
   <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
   <form onSubmit={(e)=>{e.preventDefault(); convert()}}>
    <div className="w-full mb-1">
  <InputBox label="from" amount={amount} onAmountChange={(amount) => setAmount(amount)}  onCurrencyChange={(currency)=>setFrom(currency)} currencyOptions={options} selectedCurrency={from}/>
  </div>
   <div className="relative w-full h-0.5 ">
    <button className='absolute left-1/2 -translate-x-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
   </div>
    <div className="w-full mb-1">
      <InputBox label="to" amount={convertedAmount} currencyOptions={options} amountDisabled={true} onCurrencyChange={(currency)=>setTo(currency)} selectedCurrency={to}/></div>
   <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' type='submit'>Convert {from.toUpperCase()} to {to.toLowerCase()}</button>
   </form>
   </div> 
  </div>  
    </div>
  )
}

export default App
