import React from "react";

const ScoresTable = (props) => {
  const {scores} = props;

  return (
    <div className={"default-table-1"}>
      <h1>{scores.leagueCaption}</h1>
      <table className="mt-4 table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>Points</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
        </tr>
        </thead>
        <tbody>
        {scores.standing.map((team, index) => {
          return (
          <tr key={index}>
            <th>{team.position}</th>
            <td>{team.teamName}</td>
            <td>{team.points}</td>
            <td>{team.wins}</td>
            <td>{team.draws}</td>
            <td>{team.losses}</td>
          </tr>)
        })}
        </tbody>
      </table>
    </div>
  );
};

export default ScoresTable;
