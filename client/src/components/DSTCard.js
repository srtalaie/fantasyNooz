import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const playerLinkStyle = {
    color: 'black'
}


const DSTCard = ({ name, link, totalPts, sack, int, saf, fr, blk, td, pa, passYG, rushYG, totalYG }) => (
    <TableRow>
        <TableCell><a href={link} style={playerLinkStyle}>{name}</a></TableCell>
        <TableCell>{totalPts}</TableCell>
        <TableCell>{sack}</TableCell>
        <TableCell>{int}</TableCell>
        <TableCell>{saf}</TableCell>
        <TableCell>{fr}</TableCell>
        <TableCell>{blk}</TableCell>
        <TableCell>{td}</TableCell>
        <TableCell>{pa}</TableCell>
        <TableCell>{passYG}</TableCell>
        <TableCell>{rushYG}</TableCell>
        <TableCell>{totalYG}</TableCell>
    </TableRow>
);

export default DSTCard;