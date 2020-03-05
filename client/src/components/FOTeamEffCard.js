import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FOTeamEffCard = ({ rank, name, totalDVOA, lastYear, nonAdjTotVOA, winsLoss, offDVOA, offRank, defDVOA, defRank, stDVOA, stRank }) => (
    <TableRow>
        <TableCell>{rank}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{totalDVOA}</TableCell>
        <TableCell>{lastYear}</TableCell>
        <TableCell>{nonAdjTotVOA}</TableCell>
        <TableCell>{winsLoss}</TableCell>
        <TableCell>{offDVOA}</TableCell>
        <TableCell>{offRank}</TableCell>
        <TableCell>{defDVOA}</TableCell>
        <TableCell>{defRank}</TableCell>
        <TableCell>{stDVOA}</TableCell>
        <TableCell>{stRank}</TableCell>
    </TableRow>
);

export default FOTeamEffCard;