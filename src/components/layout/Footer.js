import React from 'react';

function Footer() {
    return (
        <header style={footerStyle}>
            <h1>IoT Sääasema</h1>
        </header>
    )
}
    
const footerStyle = {
  background: '#333333',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px',
  position:'fixed' ,
  bottom: '0px' ,
  }
export default Footer;
