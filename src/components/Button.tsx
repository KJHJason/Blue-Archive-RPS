import paper from "../public/paper.png";
import rock from "../public/rock.png";
import scissors from "../public/scissors.png";
import "../styles/button.css";

interface Props {
  role: "scissors" | "rock" | "paper";
  onClick: (action: string) => void;
}

const roleToImg = (role: string) => {
  switch (role) {
    case "scissors":
      return scissors;
    case "rock":
      return rock;
    case "paper":
      return paper;
    default:
      throw new Error("Invalid role");
  }
};

const Button = ({ role, onClick }: Props) => {
  return (
    <button className="mt-3 w-24 rounded-full action-btn" onClick={() => onClick(role)}>
      <img className="" src={roleToImg(role)} alt={role + " button"} />
    </button>
  );
};

export default Button;
