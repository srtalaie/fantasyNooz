import React from "react";

const footerStyle = {
    position: 'absolute',
    bottom: 'auto',
    height: '2.5em',
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