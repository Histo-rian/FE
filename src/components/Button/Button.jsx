import '../Button/Button.css'

export default function Button({ color, type, state, text, onClick}) {
 return (
  <button className={`${type} ` + `${color}` + ` ${state}`} onClick={onClick}>
   {text}
  </button>
 )
}