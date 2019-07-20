import React from "react";
import "./CarList.css";
import { Card } from "../card/Card";

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);
