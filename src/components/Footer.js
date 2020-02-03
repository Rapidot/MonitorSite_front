import React from 'react'

const Footer = () => {
  const footerStyle = {
    fontFamily: 'Arial',
    fontWeight:'bold', color: 'white',
    backgroundColor: 'gray', fontStyle: 'italic', fontSize: 14,
    textAlign: 'center',
    padding: 20,
    paddingTop: 2, paddingLeft: 50, border: 'solid', borderWidth: 2, marginTop: 5,
    marginBottom: 5
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Blogiaplikaatio</em>
    </div>
  )
}

export default Footer