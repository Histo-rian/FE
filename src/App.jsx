import './App.css'
import Button from '../src/components/Button/Button'

function App() {
  const a = {
    color : "white",
    text : "TEST",
    type : "btnPrimary",
    state : "active"
  };
  return (
    <>
      <div className='button-container'><Button {...a}/><Button {...a}/></div>
    </>
  )
}

export default App
