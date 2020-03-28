import React from 'react'      //rfc

export default function Header() {
    return (
      <header style={headerStyle}>
          <h1>TodoList</h1>
      </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center'
}
