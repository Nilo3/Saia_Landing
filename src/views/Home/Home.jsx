// Home.jsx
import React from "react";
import Banner from "../../components/Banner";
import InfoSection from "../../components/InfoSection"; // Import InfoSection component
import UniqueSection from "../../components/UniqueSection"; // Import UniqueSection component
import ValuesSection from "../../components/ValuesSection"; // Import ValuesSection component

const Home = () => {
  return (
    <>
      <Banner />
      <div className="flex justify-center items-center bg-white py-10">
        <InfoSection
          title="¿Qué es SAIA?"
          description="SAIA es la Sociedad Argentina de Inteligencia Artificial que tiene como objetivo principal promover el avance, desarrollo y aplicaciones de la inteligencia artificial en Argentina."
        />
        <InfoSection
          title="¿Cómo puede SAIA ayudarme?"
          description="SAIA puede ayudarte brindando recursos, conocimientos y oportunidades en el ámbito de la inteligencia artificial. Organizamos eventos, conferencias y talleres donde puedes aprender sobre las últimas tendencias y prácticas en IA."
        />
      </div>
      <UniqueSection
        title="¿Qué hace SAIA diferente de otras organizaciones?"
        description="Lo que distingue a SAIA es nuestra estrecha relación con una fundación. Al ser parte de una fundación, tenemos una visión más amplia y un compromiso adicional con la ética y la responsabilidad social en el desarrollo y aplicación de la inteligencia artificial. Además, nuestra red de colaboradores y aliados nos permite acceder a una amplia gama de recursos y experiencias en este campo."
      />
      <ValuesSection />
      <div className="flex justify-center items-center bg-white py-10">
        <InfoSection
          title="Innovación"
          description="SAIA se compromete a fomentar y promover la innovación en el campo de la inteligencia artificial. Buscamos desarrollar nuevas soluciones, tecnologías y enfoques que impulsen el progreso y mejoren la vida de las personas en diferentes aspectos."
        />

        <InfoSection
          title="Colaboración"
          description="Valoramos la colaboración y la sinergia entre profesionales, académicos y entidades de diversos sectores. Fomentamos la creación de redes de trabajo conjuntas, la participación en proyectos colaborativos y la difusión del conocimiento para construir una comunidad de inteligencia artificial sólida y cohesionada."
        />
      </div>
    </>
  );
};

export default Home;
