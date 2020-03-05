import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FOOLineCard = ({ rank, name, adjLineYds, rbYds, pwrSucc, pwrRk, stufd, stufdRk, scndLvlYds, scndLvlRk, openFldYds, openFldRk, passTeamName, passPrtctRk, sacks, adjSackRt}) => (
    <TableRow>
        <TableCell>{rank}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{adjLineYds}</TableCell>
        <TableCell>{rbYds}</TableCell>
        <TableCell>{pwrSucc}</TableCell>
        <TableCell>{pwrRk}</TableCell>
        <TableCell>{stufd}</TableCell>
        <TableCell>{stufdRk}</TableCell>
        <TableCell>{scndLvlYds}</TableCell>
        <TableCell>{scndLvlRk}</TableCell>
        <TableCell>{openFldYds}</TableCell>
        <TableCell>{openFldRk}</TableCell>
        <TableCell>{passTeamName}</TableCell>
        <TableCell>{passPrtctRk}</TableCell>
        <TableCell>{sacks}</TableCell>
        <TableCell>{adjSackRt}</TableCell>
    </TableRow>
);

export default FOOLineCard;