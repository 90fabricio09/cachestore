import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            A <span className="highlight">loja líder</span> em venda de
            <br />
            produtos de CS2!
          </h1>
          <p>
            A nossa loja se destaca como a referência no mercado, oferecendo
            os melhores produtos de cs2 com preços competitivos e
            qualidade incomparável.
          </p>
          <div className="hero-buttons">
            <a href="#produtos" className="btn btn-green">
              Ver produtos
            </a>
            <a href="https://discord.gg/rcvXacwAh9" target="_blank" className="btn btn-black">
              Contato
            </a>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section className="produtos">
        <h2>Produtos</h2>
        <p>Confira abaixo nossos produtos e ofertas.</p>
      </section>
    </div>
  );
};

export default Home;
