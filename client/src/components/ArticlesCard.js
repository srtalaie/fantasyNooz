import React from "react";

const ArticlesCard = ({ title, commentsLink, link }) => (
    <div>
        <p><a href={link}>{title}</a></p>
        {commentsLink !== '' &&
            <p><a href={commentsLink}>Reddit Comments</a></p>
        }
    </div>
);

export default ArticlesCard;