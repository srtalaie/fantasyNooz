import React from "react";

const FOOLineCard = ({ rank, name, adjLineYds, rbYds, pwrSucc, pwrRk, stufd, stufdRk, scndLvlYds, scndLvlRk, openFldYds, openFldYdRk, passTeamName, passPrtctRk, sacks, adjSackRt}) => (
    <tr>
        <td>{rank}</td>
        <td>{name}</td>
        <td>{adjLineYds}</td>
        <td>{rbYds}</td>
        <td>{pwrSucc}</td>
        <td>{pwrRk}</td>
        <td>{stufd}</td>
        <td>{stufdRk}</td>
        <td>{scndLvlYds}</td>
        <td>{scndLvlRk}</td>
        <td>{openFldYds}</td>
        <td>{openFldYdRk}</td>
        <td>{passTeamName}</td>
        <td>{passPrtctRk}</td>
        <td>{sacks}</td>
        <td>{adjSackRt}</td>
    </tr>
);

export default FOOLineCard;