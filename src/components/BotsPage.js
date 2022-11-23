import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setbots] = useState([]);
  const [army, setarmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setbots((bots) => data));
  }, []);

  function addArmy(bot) {
    if (army.includes(bot)) return;
    setarmy((army) => [...army, bot]);
  }

  function handleDelete(bot) {
    console.log("I was clicked");

    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setarmy((army) => army.filter((armies) => armies.id !== bot.id));
        setbots((bots) => bots.filter((botss) => botss.id !== bot.id));
      });
  }

  function filt(bot) {
    setarmy((army) => army.filter((one) => one.id !== bot.id));
  }

  return (
    <div>
      <YourBotArmy
        BotCollection={army}
        addToArmy={filt}
        handleDelete={handleDelete}
      />
      <BotCollection
        BotCollection={bots}
        addToArmy={addArmy}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default BotsPage;
