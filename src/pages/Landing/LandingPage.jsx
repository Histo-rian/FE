import '../Landing/LandingPage.css'

import Button from "../../components/Button/Button"
import Card from "../../components/Card/Card"
import FAQ from "../../components/FAQ/FAQ"

export default function LandingPage() {
 return (
  <>
   <div className='buttonContainer'>
    <Button {...{ color: "white", type: "secondary", state: "active", text: "HOME" }} />
    <Button {...{ color: "white", type: "secondary", text: "FEATURES" }} />
    <Button {...{ color: "white", type: "secondary", text: "ABOUT" }} />
    <Button {...{ color: "white", type: "secondary", text: "FAQ" }} />
   </div>

   <div className='loginContainer'>
    <Button {...{ color: "black", type: "secondary", text: "LOGIN" }} />
    <Button {...{ color: "white", type: "secondary", text: "SIGNUP" }} />
   </div>

   <div className='logoContainer'>
    <img src='../src/assets/4.svg'></img>
   </div>

   <section id="one">
    <div className='mainContainer'>
     <div className='main'>
      <p className='title'>History, Sources, Trust</p>
      <p className='text'>토론할 땐 출처도 함께! 믿을 수 있는 정보로<br></br>자신있게 토론할 수 있게 도와주는 토론 커뮤니티</p>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Button {...{ color: "black", type: "secondary", text: "참여하기" }} /></div>
     </div>
    </div>
   </section>
   <section id="two"></section>
   <section id="three"></section>
   <section id="four"></section>
  </>
 )
}