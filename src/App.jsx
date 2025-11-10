import './App.css'
import Button from '../src/components/Button/Button'
import Card from '../src/components/Card/Card'

function App() {
  const a = {
    color : "white",
    text : "TEST",
    type : "btnPrimary",
    state : ""
  };
  const b = {
    title:"AI 기반 글 검증",
    icon:"check",
    text:"AI가 사용자가 남긴 출처를 파악하고,\n게시글 내용과 비교하여\n유사성을 판단합니다.\n이를 통해 왜곡된 정보나 허위 사실의 \n확산을 방지합니다."
  };
  return (
    <>
      <div className='buttonContainer'><Button {...a}/><Button {...a}/></div>
      <Card {...b}/>
    </>
  )
}

export default App
