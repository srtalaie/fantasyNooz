import React from "react";

const FOTeamDefCard = ({ rank, name, defDVOA, lastYear, weiDef, defRank, passDef, passRank, rushDef, rushRank, nonAdjTot, nonAdjTotPass, nonAdjTotRush, variance, varRank, sched, schedRank}) => (
    <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{defDVOA}</td>
        <td>{lastYear}</td>
        <td>{weiDef}</td>
        <td>{defRank}</td>
        <td>{passDef}</td>
        <td>{passRank}</td>
        <td>{rushDef}</td>
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

export default FOTeamDefCard;