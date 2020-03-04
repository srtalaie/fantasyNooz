import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const playerLinkStyle = {
    color: 'black'
}


const KCard = ({ name, link, totalPts, xpa, xpm, fga, fgm, fiftyPlus }) => (
    <TableRow>
        <TableCell><a href={link} style={playerLinkStyle}>{name}</a></TableCell>
        <TableCell>{totalPts}</TableCell>
        <TableCell>{xpa}</TableCell>
        <TableCell>{xpm}</TableCell>
        <TableCell>{fga}</TableCell>
        <TableCell>{fgm}</TableCell>
        <TableCell>{fiftyPlus}</TableCell>
    </TableRow>
);

export default KCard;