import React from "react";

const footerStyle = {
    bottom: '0',
    height: '40px',
    width: '100%',
    borderTop: '3px solid grey',
    backgroundColor: 'black',
    color: 'whitesmoke',
    marginTop: '5vw',
    textAlign: 'center'
  }

const date = new Date();

const Footer = () => (
    <div><footer style={footerStyle}><p>&copy;{date.getFullYear()}</p></footer></div>
);

export default Footer;