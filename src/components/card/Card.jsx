import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { Titulo, Subtitulo, Image } from "../elements/Elements";
import CharPage from "../charpage/CharPage";
import './card.css'

function Card({ character }) {
  const navigate = useNavigate()
  const [classe, setClasse] = useState('black')
  const handleClass = () => {
    if (character.tipo == "heroi") {
      setClasse('green')
    } else if (character.tipo == "vilao") {
      setClasse('red')
    }
  }
  useEffect(handleClass, [character.tipo])


  function goToChar() {
    navigate("/char", { state: { character } })
  }
  return (
    <div className={`card ${classe}`} onClick={goToChar}>
      <Titulo nome={character.nome} />
      <Image imagem={character.imagem} />
      <Subtitulo tipo={character.tipo} />

    </div>)
}



export default Card