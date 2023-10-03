import Quiz from "../../img/quiz.svg"

import "./Welcome.css"

const Welcome = () => {
  return (
    <div id="Welcome">
        <h2>Seja Bem vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quis" />
    </div>
  )
}

export default Welcome