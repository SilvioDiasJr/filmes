import React from 'react';
import {Link} from 'react-router-dom'

import './style.css'

function Header() {
  return (
    <div className="header">
      <Link to='/'>S_ Filmes</Link>
    </div>
  )
}

export default Header;