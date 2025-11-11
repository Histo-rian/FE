import '../Landing/LandingPage.css'
import { useState } from "react"
import Button from "../../components/Button/Button"
import Card from "../../components/Card/Card"
import FAQ from "../../components/FAQ/FAQ"

export default function LandingPage() {
 const [activeButton, setActiveButton] = useState("HOME")

 const handleButtonClick = (buttonName, sectionId) => {
  setActiveButton(buttonName)
  const section = document.getElementById(sectionId)
  if (section) {
   section.scrollIntoView({ behavior: "smooth" })
  }
 }

 return (
  <>
   <div className='buttonContainer'>
    <Button {...{ color: "white", type: "secondary", state: activeButton === "HOME" ? "active" : undefined, text: "HOME", onClick: () => handleButtonClick("HOME", "one") }} />
    <Button {...{ color: "white", type: "secondary", state: activeButton === "FEATURES" ? "active" : undefined, text: "FEATURES", onClick: () => handleButtonClick("FEATURES", "two") }} />
    <Button {...{ color: "white", type: "secondary", state: activeButton === "ABOUT" ? "active" : undefined, text: "ABOUT", onClick: () => handleButtonClick("ABOUT", "three") }} />
    <Button {...{ color: "white", type: "secondary", state: activeButton === "FAQ" ? "active" : undefined, text: "FAQ", onClick: () => handleButtonClick("FAQ", "four") }} />
   </div>

   <div className={`fadeContainer ${activeButton === "HOME" ? "visible" : ""}`}>
    <div className='loginContainer'>
     <Button {...{ color: "black", type: "secondary", text: "LOGIN" }} />
     <Button {...{ color: "white", type: "secondary", text: "SIGNUP" }} />
    </div>

    <div className='logoContainer'>
     <img src='../src/assets/4.svg' alt="logo" />
    </div>
   </div>

   <section id="one">
    <div className='mainContainer'>
     <div className='main'>
      <p className='title'>History, Sources, Trust</p>
      <p className='text'>
       토론할 땐 출처도 함께! 믿을 수 있는 정보로<br />
       자신있게 토론할 수 있게 도와주는 토론 커뮤니티
      </p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
       <Button {...{ color: "black", type: "secondary", text: "참여하기" }} />
      </div>
     </div>
    </div>
   </section>

   <section id="two">
    <div className='cardBox'>
     <Card {...{ title: "출처로 증명되는 역사 토론", icon: "search", text: "사용자는 글 작성 시\nBritannica, 한국학중앙연구원 등\n신뢰 가능한 자료를 남겨야 합니다.\n출처가 없거나 유사성이 낮으면\n“주관적인 의견”으로 표시되어\n신뢰도 평가에 반영됩니다." }} />
     <Card {...{ title: "AI 기반 글 검증", icon: "check", text: "AI가 사용자가 남긴 출처를 파악하고,\n게시글 내용과 비교하여\n유사성을 판단합니다. \n이를 통해 왜곡된 정보나 허위 사실의 \n확산을 방지합니다." }} />
     <Card {...{ title: "우선순위 기반 노출 시스템", icon: "like", text: "AI 평가와 사용자 피드백을 바탕으로 \n신뢰 점수가 높은 게시글이 \n상단에 노출됩니다. \n신뢰도가 낮은 글은 아래로 밀려나며,\n커뮤니티 전체의 정보 품질을 유지합니다." }} />
    </div>
   </section>

   <section id="three">
    <h1 className='title'>About HDF</h1>
    <h1 className='text'>
     HDF(Historical Debate Forum)는<br></br>
     <span style={{ color: "#FF8469", fontWeight: 600 }}>역사 기록의 주관성과 왜곡을 최소화하기 위해 만들어진 출처 기반 커뮤니티</span>입니다.<br></br>
     AI 검증을 통해 사용자가 남긴 출처의 신뢰도를 평가하고, 정보 중심의 토론 문화를 형성합니다.<br></br>
     단순한 의견 교환을 넘어, <span style={{ color: "#FF8469", fontWeight: 600 }}>역사적 사실에 대한 깊이 있는 토론과 올바른 정보 공유</span>를 목표로 합니다.
    </h1>
   </section>
   <section id="four">
    <div className='fqa'>
     <h1 className='title'>자주 묻는 질문</h1>
     <div className='faqBox'>
      <FAQ {...{title:"HDF는 일반 역사 커뮤니티와 뭐가 다른가요?",text:"HDF는 단순한 의견 교환이 아니라 \n출처 기반의 검증된 토론 공간입니다.\n모든 게시글은 신뢰할 수 있는 출처를 제시해야 하며, \nAI가 출처의 신뢰도와 내용의 유사성을 검증합니다."}}/>
      <FAQ {...{title:"출처가 없으면 글을 못 올리나요?",text:"아닙니다. 출처가 없어도 글을 작성할 수 있지만, \n“주관적인 의견입니다”라는 표시가 붙고, \n노출 우선순위가 낮아집니다.\n신뢰도 높은 출처를 남길수록 더 많은 사용자에게 글이 보여집니다."}}/>
      <FAQ {...{title:"평가 점수는 어떻게 매겨지나요?",text:"AI 평가 점수 + 사용자 피드백을 종합하여 결정됩니다.\n신뢰도 높은 글일수록 점수가 높고, \nPriority Queue 시스템을 통해 상단에 노출됩니다."}}/>
      <FAQ {...{title:"어떤 주제들이 있나요?",text:"역사 시대별, 사건별, 인물별 등으로 카테고리화된 \n커뮤니티 갤러리를 제공합니다.\n각 분야에서 자유롭게 토론하고, 서로의 관점을 공유할 수 있습니다."}} />
     </div>
    </div>
   </section>
  </>
 )
}