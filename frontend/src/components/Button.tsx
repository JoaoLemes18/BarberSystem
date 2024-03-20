import '../styles/Button.scss'

interface ButtonProps {
  content: string
  props?: any
}

const Button = ({content, ...props}: ButtonProps) => {
  return (
    <button {...props}> <p>{content}</p> </button>
  )
}

export default Button
