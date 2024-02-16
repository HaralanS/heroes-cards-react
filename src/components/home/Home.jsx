import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lista from '../../List';
import Card from '../card/Card';
import "./home.css"

function Home() {
  const list = Lista();
  return (
    <div>

      <header className='header'>
        <h1 className='page-title'>Personagens da Marvel</h1>
        <img className='poster-img' src="https://m.media-amazon.com/images/I/71pKePD7oIL._AC_UF894,1000_QL80_.jpg" alt="marvel-poster" />

      </header>
      <div className='bg-img'>
        <div className='main-container'>
          {list.map((char) => <Card key={char.nome} character={char} />)}
        </div>
      </div>


    </div>

  )
}

export default Home