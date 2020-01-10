import React from "react";

const FOTeamOffCard = ({ rank, name, offDVOA, lastYear, weiOff, offRank, passOff, passRank, rushOff, rushRank, nonAdjTot, nonAdjTotPass, nonAdjTotRush, variance, varRank, sched, schedRank}) => (
    <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{offDVOA}</td>
        <td>{lastYear}</td>
        <td>{weiOff}</td>
        <td>{offRank}</td>
        <td>{passOff}</td>
        <td>{passRank}</td>
        <td>{rushOff}</td>
        <td>{rushRank}</td>
        <td>{nonAdjTot}</td>
        <td>{nonAdjTotPass}</td>
        <td>{nonAdjTotRush}</td>
        <td>{variance}</td>
        <td>{varRank}</td>
        <td>{sched}</td>
        <td>{schedRank}</td>
    </tr>
);

export default FOTeamOffCard;