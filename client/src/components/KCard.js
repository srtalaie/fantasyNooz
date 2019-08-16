import React from "react";

const playerLinkStyle = {
    color: 'black'
}


const KCard = ({ name, link, totalPts, xpa, xpm, fga, fgm, fiftyPlus }) => (
    <tr>
        <td><a href={link} style={playerLinkStyle}>{name}</a></td>
        <td>{totalPts}</td>
        <td>{xpa}</td>
        <td>{xpm}</td>
        <td>{fga}</td>
        <td>{fgm}</td>
        <td>{fiftyPlus}</td>
    </tr>
);

export default KCard;