import React from "react";

const articlesLinkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const ArticlesCard = ({ title, commentsLink, link }) => (
    <div>
        <a href={link} style={articlesLinkStyle}>{title}</a>
        {commentsLink !== '' &&
        <a href={commentsLink} style={articlesLinkStyle}>  ||  Reddit Comments</a>
        }
    </div>
);

export default ArticlesCard;