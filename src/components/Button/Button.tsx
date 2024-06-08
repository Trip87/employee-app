import React from "react";
import './button.scss';
import classNames from "classnames"; 


type ButtonProps= {
  label : string,
  hideLabel?:boolean ,
  icon?:string,
  variant?:'primary'|'secondary'|'danger',
  width?:'content'|'fill',
  height?:'small'|'medium'|'large',
  onClick?:()=>void,
  disabled?:boolean,
  type?: 'submit'|'button'|'reset',
}
const Button:React.FC<ButtonProps>= ({
  label,
  hideLabel=false,
  icon,
  variant='primary',
  width='content',
  height='small',
  onClick,
  disabled=false,
  type='button',

}) => {
  const baseClass= "button" 
  const buttonClasses= classNames(
    baseClass,`button--${variant}`, {
      "button--content":width === "content",
      "button--fill":width ==="fill",
    
      "button--small":height ==="small",
      "button--medium":height==="medium",
      "button--large":height==="large",
      "button--disabled":disabled,
    }
  )
  return <button className={buttonClasses} onClick={onClick} disabled={disabled} type={type} >
    {icon && <img src={icon}></img>}
    {!hideLabel ? label : ''}
    </button>;
};

export default Button;
