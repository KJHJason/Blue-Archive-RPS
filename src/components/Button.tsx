import "../styles/button.css";
import { Action } from "../scripts/interfaces";
import { actionToImg } from "../scripts/utils";

interface Props extends Action{
  disabled: boolean;
  onClick: (action: string) => void;
}

const Button = ({ action, onClick, disabled }: Props) => {
  return (
    <button className="mt-3 xs:w-24 w-14 rounded-full action-btn" onClick={() => onClick(action)} aria-label={action} disabled={disabled}>
      <img src={actionToImg(action)} alt={`${action} image used for the button content`} />
    </button>
  );
};

export default Button;
