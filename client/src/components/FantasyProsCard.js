import React from "react";

const playerLinkStyle = {
    color: 'black'
}

const FantasyProsCard = ({ rank, name, playerLink, team, position, byeWeek, bestRank, worstRank, average, stdDev, adp, vsADP }) => (
    <tr>
        <td>{rank}</td>
        <td><a href={playerLink} style={playerLinkStyle}>{name}</a></td>
        <td>{team}</td>
        <td>{position}</td>
        <td>{byeWeek}</td>
        <td>{bestRank}</td>
        <td>{worstRank}</td>
        <td>{average}</td>
        <td>{stdDev}</td>
        <td>{adp}</td>
        <td>{vsADP}</td>
    </tr>
);

export default FantasyProsCard;