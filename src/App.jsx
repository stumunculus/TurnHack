import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [turnIndex, setTurnIndex] = useState(0);

  const turnsArray = [
    { num: "1", strat: "Leadership", border: "border-red-600" },
    { num: "2", strat: "Diplomacy", border: "border-orange-500" },
    { num: "3", strat: "Politics", border: "border-yellow-400" },
    { num: "4", strat: "Construction", border: "border-green-500" },
    { num: "5", strat: "Trade", border: "border-cyan-400" },
    { num: "6", strat: "Warfare", border: "border-blue-500" },
    { num: "7", strat: "Technology", border: "border-blue-800" },
    { num: "8", strat: "Imperial", border: "border-purple-600" },
  ];

  useEffect(() => {
    const turn = JSON.parse(localStorage.getItem("turn"));
    if (turn) {
      setTurnIndex(turn);
    }
  }, []);

  const nextTurn = (e) => {
    e.preventDefault();
    turnIndex < 7 ? setTurnIndex(turnIndex + 1) : setTurnIndex(0);
  };

  const prevTurn = (e) => {
    e.preventDefault();
    turnIndex > 0 ? setTurnIndex(turnIndex - 1) : setTurnIndex(7);
  };

  const turnString = JSON.stringify(turnIndex);
  useEffect(() => {
    localStorage.setItem("turn", turnString);
  }, [turnString]);

  return (
    <div className="flex flex-col items-center">
      <div
        className={["mt-3 flex h-5/6 min-w-96	items-center border border-8 rounded-3xl", `${turnsArray[turnIndex].border}`].join(" ")}
      >
        <div className="w-full text-center">
          <p className="text-9xl">{turnsArray[turnIndex].num}</p>
        </div>
      </div>
      <div className="my-3 space-x-3 flex w-full">
        <button onClick={prevTurn} className="w-1/2 text-center outline">
          prev turn
        </button>
        <button onClick={nextTurn} className="w-1/2 text-center outline">
          next turn
        </button>
      </div>
    </div>
  );
}

export default App;
