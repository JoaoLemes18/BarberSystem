import '../styles/Input.scss'

interface InputProps {
  icon?: any
  props?: any
  placeholder?: string
  onChange?: any
  value: string
  name?: string
  type: string
}

const Input = ({icon, ...props}: InputProps) => {
  return (
    <div className='container-input'>
      {icon}
      <input {...props} />
    </div>
    
  )
}

export default Input
