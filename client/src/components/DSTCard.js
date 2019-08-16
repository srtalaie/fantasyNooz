import React from "react";

const playerLinkStyle = {
    color: 'black'
}


const DSTCard = ({ name, link, totalPts, sack, int, saf, fr, blk, td, pa, passYG, rushYG, totalYG }) => (
    <tr>
        <td><a href={link} style={playerLinkStyle}>{name}</a></td>
        <td>{totalPts}</td>
        <td>{sack}</td>
        <td>{int}</td>
        <td>{saf}</td>
        <td>{fr}</td>
        <td>{blk}</td>
        <td>{td}</td>
        <td>{pa}</td>
        <td>{passYG}</td>
        <td>{rushYG}</td>
        <td>{totalYG}</td>
    </tr>
);

export default DSTCard;