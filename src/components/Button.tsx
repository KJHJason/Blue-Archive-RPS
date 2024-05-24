interface Props {
  role: "scissors" | "rock" | "paper";
}

const Button = ({ role }: Props) => {
  console.log(role, "in button");
  return (
    <button>Click me</button>
  )
}

export default Button;
