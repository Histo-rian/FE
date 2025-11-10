import './App.css'
import Button from '../src/components/Button/Button'

function App() {
  const a = {
    color : "black",
    text : "TEST",
    state : "btnPrimary"
  };
  return (
    <>
      <Button {...a}/>
    </>
  )
}

export default App
