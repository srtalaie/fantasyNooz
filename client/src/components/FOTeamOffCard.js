import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FOTeamOffCard = ({ rank, name, offDVOA, lastYear, weiOff, offRank, passOff, passRank, rushOff, rushRank, nonAdjTot, nonAdjTotPass, nonAdjTotRush, variance, varRank, sched, schedRank}) => (
    <TableRow>
        <TableCell>{rank}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{offDVOA}</TableCell>
        <TableCell>{lastYear}</TableCell>
        <TableCell>{weiOff}</TableCell>
        <TableCell>{offRank}</TableCell>
        <TableCell>{passOff}</TableCell>
        <TableCell>{passRank}</TableCell>
        <TableCell>{rushOff}</TableCell>
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

export default FOTeamOffCard;