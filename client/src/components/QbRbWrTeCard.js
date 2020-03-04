import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const playerLinkStyle = {
    color: 'black'
}


const QbRbWrTeCard = ({ name, link, totalPts, passAtt, cmp, passYds, passTds, int, passTwoPt, rushAtt, rushYds, rushTds, rushTwoPt, rec, recYds, recTds, recTwoPt, fum }) => (
    <TableRow>
        <TableCell><a href={link} style={playerLinkStyle}>{name}</a></TableCell>
        <TableCell>{totalPts}</TableCell>
        <TableCell>{passAtt}</TableCell>
        <TableCell>{cmp}</TableCell>
        <TableCell>{passYds}</TableCell>
        <TableCell>{passTds}</TableCell>
        <TableCell>{int}</TableCell>
        <TableCell>{passTwoPt}</TableCell>
        <TableCell>{rushAtt}</TableCell>
        <TableCell>{rushYds}</TableCell>
        <TableCell>{rushTds}</TableCell>
        <TableCell>{rushTwoPt}</TableCell>
        <TableCell>{rec}</TableCell>
        <TableCell>{recYds}</TableCell>
        <TableCell>{recTds}</TableCell>
        <TableCell>{recTwoPt}</TableCell>
        <TableCell>{fum}</TableCell>
    </TableRow>
);

export default QbRbWrTeCard;