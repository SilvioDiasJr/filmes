import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import './style.css';

function Filme(props) {
  const [filme, setFilme] = useState([])

  useEffect(() => {
    sinopse()
  }, [])

  function sinopse() {
    const { id } = props.match.params

    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFilme(data)
      })
  }

  return (
    <div className = "filme-info">
      {filme.length !== 0 &&
        <>
          <h1> {filme.nome} </h1>
          <img src={filme.foto} alt="capa" />

          <h3>Sinopse</h3>
          <p>{filme.sinopse}</p>

          <Link to="/">Voltar ao início</Link>
        </>
      }
    </div>
  )
}

export default Filme;