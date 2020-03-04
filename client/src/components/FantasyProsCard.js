import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const playerLinkStyle = {
    color: 'black'
}


const FantasyProsCard = ({ rank, name, playerLink, team, position, byeWeek, bestRank, worstRank, average, sTableCellDev, adp, vsADP }) => (
    <TableRow className="tableRows">
        <TableCell>{rank}</TableCell>
        <TableCell><a href={playerLink} style={playerLinkStyle}>{name}</a></TableCell>
        <TableCell>{team}</TableCell>
        <TableCell>{position}</TableCell>
        <TableCell>{byeWeek}</TableCell>
        <TableCell>{bestRank}</TableCell>
        <TableCell>{worstRank}</TableCell>
        <TableCell>{average}</TableCell>
        <TableCell>{sTableCellDev}</TableCell>
        <TableCell>{adp}</TableCell>
        <TableCell>{vsADP}</TableCell>
    </TableRow>
);

export default FantasyProsCard;