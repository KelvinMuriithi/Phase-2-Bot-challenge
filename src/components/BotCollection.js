import React from "react";
import BotCard from "./BotCard";

function BotCollection({ BotCollection, addToArmy, handleDelete }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {BotCollection.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            addToArmy={addToArmy}
            handleDelete={handleDelete}
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
