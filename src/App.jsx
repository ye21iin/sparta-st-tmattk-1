import { useState } from "react";
import "./App.css";

function App() {
  const [medals, setMedals] = useState([
    {
      country: "테스트국가1",
      gold: 100,
      silver: 100,
      bronze: 1,
    },
    {
      country: "테스트국가2",
      gold: 100,
      silver: 100,
      bronze: 2,
    },
  ]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // submit func
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedal = {
      country: country,
      gold: parseInt(gold),
      silver: parseInt(silver),
      bronze: parseInt(bronze),
    };

    setMedals([...medals, newMedal]);
    resetForms();
  };

  // reset func
  const resetForms = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  // update func
  const handleUpdate = () => {};

  return (
    <>
      <div>
        <h1>2024 파리 올림픽</h1>
        <form onSubmit={handleSubmit}>
          <label>
            국가명
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="국가명을 입력해 주세요."
              required
            ></input>
          </label>
          <label>
            금메달
            <input
              type="number"
              value={gold}
              onChange={(e) => setGold(e.target.value)}
              min={0}
              required
            ></input>
          </label>
          <label>
            은메달
            <input
              type="number"
              value={silver}
              onChange={(e) => setSilver(e.target.value)}
              min={0}
              required
            ></input>
          </label>
          <label>
            동메달
            <input
              type="number"
              value={bronze}
              onChange={(e) => setBronze(e.target.value)}
              min={0}
              required
            ></input>
          </label>
          <button type="submit">제출</button>
          <button type="button" onClick={handleUpdate}>
            업데이트
          </button>
        </form>
      </div>
      {/* List 뿌리기 */}
      <ul>
        {medals.map((medal) => {
          return (
            <li key={medal.country}>
              <span>{medal.country}</span>
              <span>🥇{medal.gold}</span>
              <span>🥈{medal.silver}</span>
              <span>🥉{medal.bronze}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
