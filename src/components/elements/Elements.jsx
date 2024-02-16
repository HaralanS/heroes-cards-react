import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import CharPage from "../charpage/CharPage"

export const Image = ({ imagem }) => {
  return <img className="card-image" width={200} src={imagem} alt="pokemon" />
}


export const Subtitulo = ({ tipo }) => {
  return <h3 className="card-tipo">{tipo}</h3>
}


export const Titulo = ({ nome }) => {
  return <h2 className="card-name">{nome}</h2>
}

export const CardUnit = ({ props, classe, char }) => {
  function goToChar() {
    console.log(char)

  }
  return (
    <div className={`card ${classe}`} onClick={goToChar()}>
      {props.children}
    </div>
  )
}