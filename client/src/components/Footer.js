import React from "react";

const footerStyle = {
    borderTop: '3px solid grey',
    backgroundColor: 'black',
    color: 'whitesmoke',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '97vh',
    position: 'relative',
    bottom: '0'
  }

const date = new Date();

const Footer = () => (
    <div><footer style={footerStyle}><p>&copy;{date.getFullYear()}</p></footer></div>
);

export default Footer;