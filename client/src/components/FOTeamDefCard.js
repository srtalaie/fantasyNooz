import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FOTeamDefCard = ({ rank, name, defDVOA, lastYear, weiDef, defRank, passDef, passRank, rushDef, rushRank, nonAdjTot, nonAdjTotPass, nonAdjTotRush, variance, varRank, sched, schedRank}) => (
    <TableRow>
        <TableCell>{rank}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{defDVOA}</TableCell>
        <TableCell>{lastYear}</TableCell>
        <TableCell>{weiDef}</TableCell>
        <TableCell>{defRank}</TableCell>
        <TableCell>{passDef}</TableCell>
        <TableCell>{passRank}</TableCell>
        <TableCell>{rushDef}</TableCell>
        <TableCell>{rushRank}</TableCell>
        <TableCell>{nonAdjTot}</TableCell>
        <TableCell>{nonAdjTotPass}</TableCell>
        <TableCell>{nonAdjTotRush}</TableCell>
        <TableCell>{variance}</TableCell>
        <TableCell>{varRank}</TableCell>
        <TableCell>{sched}</TableCell>
        <TableCell>{schedRank}</TableCell>
    </TableRow>
);

export default FOTeamDefCard;