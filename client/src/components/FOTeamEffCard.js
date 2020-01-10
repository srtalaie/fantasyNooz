import React from "react";

const FOTeamEffCard = ({ rank, name, totalDVOA, lastYear, nonAdjTotVOA, winsLoss, offDVOA, offRank, defDVOA, defRank, stDVOA, stRank }) => (
    <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{totalDVOA}</td>
        <td>{lastYear}</td>
        <td>{nonAdjTotVOA}</td>
        <td>{winsLoss}</td>
        <td>{offDVOA}</td>
        <td>{offRank}</td>
        <td>{defDVOA}</td>
        <td>{defRank}</td>
        <td>{stDVOA}</td>
        <td>{stRank}</td>
    </tr>
);

export default FOTeamEffCard;