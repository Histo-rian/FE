import '../Button/Button.css'

export default function Button({ color, type, state, text }) {
 return (
  <button className={`${type} ` + `${color}` + ` ${state}`} >
   {text}
  </button>
 )
}