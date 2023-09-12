import perfilAdrian from "/static/adrian.png";
import perfilCaua from "/static/adrian.png";

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
            sourceImage="/static/adrian.png"
            altImage="Foto integrante Adrian"
            nome="Adrian Sivilha"
            rm="RM97784"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/adrian.png"
            altImage="Foto integrante Adrian"
            nome="Adrian Sivilha"
            rm="RM97784"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/adrian.png"
            altImage="Foto integrante Adrian"
            nome="Adrian Sivilha"
            rm="RM97784"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/adrian.png"
            altImage="Foto integrante Adrian"
            nome="Adrian Sivilha"
            rm="RM97784"
          ></TeammateCard>
          <TeammateCard
            sourceImage="/static/adrian.png"
            altImage="Foto integrante Adrian"
            nome="Adrian Sivilha"
            rm="RM97784"
          ></TeammateCard>
        </div>
      </main>
    </>
  );
}
