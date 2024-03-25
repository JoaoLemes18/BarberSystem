import "../styles/Button.scss";

interface ButtonProps {
  content: string;
  props?: any;
  onClick: () => void;
}

const Button = ({ content, ...props }: ButtonProps) => {
  return (
    <button {...props}>
      {" "}
      <p>{content}</p>{" "}
    </button>
  );
};

export default Button;
