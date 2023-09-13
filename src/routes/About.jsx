import "../styles/About.css";
import TeammateCard from "../components/TeammateCard";

export default function About() {
  return (
    <>
      <main className="equipe">
        <div className="titulo">
          <h1>Conheça nossa equipe</h1>
          <p>
            Uma equipe altamente eficiente, dedicada <br />
            exclusivamente a buscar o melhor para cada cliente.
          </p>
        </div>
        <div className="integrantes">
          <TeammateCard
            sourceImage="/static/adrian.svg"
            altImage="Foto integrante Adrian"
            nome="Adrian Sivilha"
            rm="RM97784"
            github="https://github.com/adrian-siv"
            linkedin="#"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/caua.svg"
            altImage="Foto integrante Cauã"
            nome="Cauã Alencar"
            rm="RM98638"
            github="https://github.com/CauaRojas"
            linkedin="#"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/jaci.svg"
            altImage="Foto integrante Jaci"
            nome="Jaci Teixeira"
            rm="RM99627"
            github="https://github.com/jaciteixeira"
            linkedin="#"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/pedro.svg"
            altImage="Foto integrante Pedro"
            nome="Pedro Paterno"
            rm="RM99726"
            github="https://github.com/PedroPaterno"
            linkedin="#"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/sabrina.svg"
            altImage="Foto integrante Sabrina"
            nome="Sabrina Faustino"
            rm="RM99570"
            github="https://github.com/SabrinaFaustino"
            linkedin="#"
          ></TeammateCard>
        </div>
        <div className="repositorio-container">
          <p>Para acessar repositório do projeto</p>
          <a href="https://github.com/Nexio-Corp/nexio-bike-rwd/tree/main" target="_blank"  rel="noreferrer">CLIQUE AQUI</a>
        </div>
      </main>
    </>
  );
}
