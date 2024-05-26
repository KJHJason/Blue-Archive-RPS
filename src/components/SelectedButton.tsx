import { actionToImg } from "../scripts/utils";

interface Props {
  action: string;
}

const SelectedButton = ({ action }: Props) => {
  return (
    <div
      className="mx-auto mt-3 xs:w-24 w-14 rounded-full"
      aria-label="selected action"
    >
      <img
        src={actionToImg(action)}
        alt={action}
      />
    </div>
  );
};

export default SelectedButton;
