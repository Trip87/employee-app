import React from 'react'

type Props = {
  onClick: () => void;
  text: string;
  className: string;
  type?: "submit" | "button" | "reset" | undefined;
}

const Button = ({ onClick, text, className, type }: Props) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  )
}

export default Button;