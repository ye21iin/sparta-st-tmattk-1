import React, { useState } from "react";

const App = () => {
  const [medals, SetMedals] = useState([
    {
      country: "test 국가명",
      gold: 100,
      silver: 200,
      bronze: 300,
    },
  ]);

  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedal = {
      country: country,
      gold: gold,
      silver: silver,
      bronze: bronze,
    };
    SetMedals([...medals, newMedal]);
    resetMedals();
  };

  const resetMedals = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const handleUpdate = () => {
    const updatedMedals = medals.map((medal) => {
      if (medal.country === country) {
        return {
          country: country,
          gold: gold,
          silver: silver,
          bronze: bronze,
        };
      } else {
        return medal;
      }
    });

    SetMedals(updatedMedals);
    resetMedals();
  };
  const handleDelete = (country) => {
    const filteredMedals = medals.filter((medal) => {
      return medal.country !== country;
    });
    SetMedals(filteredMedals);
  };

  const displayMedals = medals.map((medal) => {
    return (
      <li key={medal.country}>
        {medal.country} {medal.gold} {medal.silver} {medal.bronze}
        <button onClick={() => handleDelete(medal.country)}>삭제</button>
      </li>
    );
  });

  const [mode, setMode] = useState(0);
  const changeMode = () => {
    const newMode = mode === 0 ? 1 : 0;
    setMode(newMode);
  };

  if (mode === 0) {
    medals.sort((a, b) => b.gold - a.gold);
  }
  if (mode === 1) {
    medals.sort(
      (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
    );
  }

  return (
    <div>
      <h1>2024 파리 올림픽</h1>
      <form onSubmit={handleSubmit}>
        <label>
          국가명
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value.trim())}
            required
          ></input>
        </label>
        <label>
          금메달
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(+e.target.value)}
            min={0}
          ></input>
        </label>
        <label>
          은메달
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(+e.target.value)}
            min={0}
          ></input>
        </label>
        <label>
          동메달
          <input
            type="number"
            value={bronze}
            onChange={(e) => setBronze(+e.target.value)}
            min={0}
          ></input>
        </label>
        <button type="submit">추가</button>
        <button onClick={handleUpdate}>업데이트</button>
      </form>

      <ul>
        {displayMedals}
        <label>
          현재는 {mode === 0 ? `금메달` : `총 메달 수`} 기준
          <button onClick={changeMode}>정렬 변경!</button>
        </label>
      </ul>
    </div>
  );
};

export default App;
