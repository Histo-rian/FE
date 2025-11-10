import '../Button/Button.css'

function Button({color,state,text}){
 return(
  <button className={`${state} ` + `${color}`} >
   {text}
  </button>
 )
}

export default Button;