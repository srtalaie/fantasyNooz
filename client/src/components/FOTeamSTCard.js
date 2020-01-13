import React from "react";

const FOTeamSTCard = ({ rank, name, stDVOA, lastYear, weiST, stRank, fgXp, kick, kickRet, punt, puntRet, hiddenPts, hiddenPtsRk, weatherPts, weatherPtsRk, weatherPtsRkRank, nonAdjVOA}) => (
    <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{stDVOA}</td>
        <td>{lastYear}</td>
        <td>{weiST}</td>
        <td>{stRank}</td>
        <td>{fgXp}</td>
        <td>{kick}</td>
        <td>{kickRet}</td>
        <td>{punt}</td>
        <td>{puntRet}</td>
        <td>{hiddenPts}</td>
        <td>{hiddenPtsRk}</td>
        <td>{weatherPts}</td>
        <td>{weatherPtsRk}</td>
        <td>{nonAdjVOA}</td>
    </tr>
);

export default FOTeamSTCard;