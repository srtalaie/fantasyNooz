import React from "react";

const playerLinkStyle = {
    color: 'black'
}


const QbRbWrTeCard = ({ name, link, totalPts, passAtt, cmp, passYds, passTds, int, passTwoPt, rushAtt, rushYds, rushTds, rushTwoPt, rec, recYds, recTds, recTwoPt, fum }) => (
    <tr>
        <td><a href={link} style={playerLinkStyle}>{name}</a></td>
        <td>{totalPts}</td>
        <td>{passAtt}</td>
        <td>{cmp}</td>
        <td>{passYds}</td>
        <td>{passTds}</td>
        <td>{int}</td>
        <td>{passTwoPt}</td>
        <td>{rushAtt}</td>
        <td>{rushYds}</td>
        <td>{rushTds}</td>
        <td>{rushTwoPt}</td>
        <td>{rec}</td>
        <td>{recYds}</td>
        <td>{recTds}</td>
        <td>{recTwoPt}</td>
        <td>{fum}</td>
    </tr>
);

export default QbRbWrTeCard;