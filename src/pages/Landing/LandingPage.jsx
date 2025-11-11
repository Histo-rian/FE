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

      <section id="three"></section>
      <section id="four"></section>
    </>
  )
}