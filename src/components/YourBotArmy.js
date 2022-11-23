import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ BotCollection, addToArmy, handleDelete }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {BotCollection.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              addToArmy={addToArmy}
              handleDelete={handleDelete}
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
