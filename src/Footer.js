import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(to right, #2196F3, #0D47A1)',
        padding: '1px',
        color: 'white',
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p>Projeto: Desenvolvimento de uma aplicação web com integração com API externa</p>
        <p>Marcos Vinícius da Silva Oliveira</p>
      </div>
    </footer>
  );
};

export default Footer;
