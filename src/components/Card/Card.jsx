import '../Card/Card.css'

export default function Card({ title, icon, text }) {
 if (icon == "search") {
  return (
   <div className="cardContainer">
    <p className="cardTitle">{title}</p>
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fillRule="evenodd" clipRule="evenodd" d="M110.325 105H116.25L153.675 142.5L142.5 153.675L105 116.25V110.325L102.975 108.225C94.425 115.575 83.325 120 71.25 120C44.325 120 22.5 98.175 22.5 71.25C22.5 44.325 44.325 22.5 71.25 22.5C98.175 22.5 120 44.325 120 71.25C120 83.325 115.575 94.425 108.225 102.975L110.325 105ZM37.5 71.25C37.5 89.925 52.575 105 71.25 105C89.925 105 105 89.925 105 71.25C105 52.575 89.925 37.5 71.25 37.5C52.575 37.5 37.5 52.575 37.5 71.25Z" fill="#FF8469" />
    </svg>
    <p className="cardText">{text}</p>
   </div>
  )
 }
 else if (icon == "check") {
  return (
   <div className="cardContainer">
    <p className="cardTitle">{title}</p>
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M90.0001 15.0069C48.6001 15.0069 15.0001 48.6069 15.0001 90.0069C15.0001 131.407 48.6001 165.007 90.0001 165.007C131.4 165.007 165 131.407 165 90.0069C165 48.6069 131.4 15.0069 90.0001 15.0069ZM75.0001 127.507L37.5001 90.0069L48.0751 79.4319L75.0001 106.282L131.925 49.3569L142.5 60.0069L75.0001 127.507Z" fill="#FF8469" />
    </svg>
    <p className="cardText">{text}</p>
   </div>
  )
 }
 else if (icon == "like") {
  return (
   <div className="cardContainer">
    <p className="cardTitle">{title}</p>
    <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fillRule="evenodd" clipRule="evenodd" d="M157.5 60C165.75 60 172.5 66.75 172.5 75L172.425 75.6L172.5 75.675V90C172.5 91.95 172.125 93.75 171.45 95.475L148.8 148.35C146.55 153.75 141.225 157.5 135 157.5H67.5C59.25 157.5 52.5 150.75 52.5 142.5V67.5C52.5 63.375 54.15 59.625 56.925 56.925L106.275 7.49997L114.225 15.375C116.25 17.4 117.525 20.25 117.525 23.325L117.3 25.725L110.175 60H157.5ZM37.5 157.5H7.50002V67.5H37.5V157.5Z" fill="#FF8469" />
    </svg>
    <p className="cardText">{text}</p>
   </div>
  )
 }
 else {
  return (
   <div className="cardContainer">
    <p className="title">{title}</p>
    <p className="cardText">{text}</p>
   </div>
  )
 }
}