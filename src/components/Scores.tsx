interface Props {
  wins: number;
  losses: number;
  ties: number;
  onReset: () => void;
}

const Scores = ({ wins, losses, ties, onReset }: Props) => {
  return (
    <div className="mt-12 bg-cyan-600 rounded-lg md:w-[500px] mx-auto">
      <h3>Scores</h3>
      <div className="px-6 py-3">
        <p>
          Wins: {wins}. Losses: {losses}. Ties: {ties}.
        </p>
      </div>
      {(wins > 0 || losses > 0 || ties > 0) && (
        <button className="btn btn-danger" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Scores;
