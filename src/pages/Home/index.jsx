import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

function Home() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    loadFilmes()
  }, [])

  function loadFilmes() {
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFilmes(data)
        console.log(filmes)
      })
  }

  const listaFilmes = filmes.map((filme) => {
    return (
      <div className="lista-filmes">
        <article key={filme.id} className= "filme">
          <strong>{filme.nome}</strong>
          <img src={filme.foto} alt='Foto da capa' />
          <Link to={`/filme/${filme.id}`}>Acessar</Link>
        </article>
      </div>
    )
  })
  return (
    <div className= "container">
      {listaFilmes}
    </div>
  )
}

export default Home;