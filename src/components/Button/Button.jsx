import '../Button/Button.css'

function Button({color,type,state,text}){
 return(
  <button className={`${type} ` + `${color}` + ` ${state}`} >
   {text}
  </button>
 )
}

export default Button;