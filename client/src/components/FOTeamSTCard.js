import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FOTeamSTCard = ({ rank, name, stDVOA, lastYear, weiST, stRank, fgXp, kick, kickRet, punt, puntRet, hiddenPts, hiddenPtsRk, weatherPts, weatherPtsRk, weatherPtsRkRank, nonAdjVOA}) => (
    <TableRow>
        <TableCell>{rank}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{stDVOA}</TableCell>
        <TableCell>{lastYear}</TableCell>
        <TableCell>{weiST}</TableCell>
        <TableCell>{stRank}</TableCell>
        <TableCell>{fgXp}</TableCell>
        <TableCell>{kick}</TableCell>
        <TableCell>{kickRet}</TableCell>
        <TableCell>{punt}</TableCell>
        <TableCell>{puntRet}</TableCell>
        <TableCell>{hiddenPts}</TableCell>
        <TableCell>{hiddenPtsRk}</TableCell>
        <TableCell>{weatherPts}</TableCell>
        <TableCell>{weatherPtsRk}</TableCell>
        <TableCell>{nonAdjVOA}</TableCell>
    </TableRow>
);

export default FOTeamSTCard;