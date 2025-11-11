import './App.css'
import Button from '../src/components/Button/Button'
import Card from '../src/components/Card/Card'
import FAQ from '../src/components/FAQ/FAQ'

function App() {
  const a = {
    color : "white",
    text : "TEST",
    type : "btnPrimary",
    state : ""
  };
  const c = {
    title:"출처가 없으면 글을 못 올리나요?",
    text:"아닙니다. 출처가 없어도 글을 작성할 수 있지만,\n“주관적인 의견입니다”라는 표시가 붙고,\n노출 우선순위가 낮아집니다.\n신뢰도 높은 출처를 남길수록 더 많은 사용자에게 글이 보여집니다."
  };
  return (
    <>
      <div className='buttonContainer'><Button {...a}/><Button {...a}/></div>
      <FAQ {...c}/>
    </>
  )
}

export default App
