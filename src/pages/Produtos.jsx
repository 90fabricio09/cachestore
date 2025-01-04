import React from "react";
import "../css/produtos.css";
import BannerCheat from "../assets/banner.png";
import BannerNFA from "../assets/banner.jpg";

const produtos = [
  { id: 1, nome: "Cache Cheat", precoOriginal: 65, preco: 50, estoque: true, imagem: BannerCheat },
  { id: 2, nome: "Conta NFA", precoOriginal: 10, preco: 7.50, estoque: false, imagem: BannerNFA },
];

const Produtos = () => {
  return (
    <section className="produtos-container" id="produtos">
      {/* Categoria */}
      <div className="categoria">
        <i class="bi bi-controller"></i> <span>Produtos de CS2</span>
      </div>

      {/* Lista de produtos */}
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className={`produto-card ${!produto.estoque ? "esgotado" : ""}`}
          >
            <div className="produto-imagem">
              <img src={produto.imagem} alt={produto.nome} />
              {!produto.estoque && (
                <div className="overlay">
                  <span>ESTOQUE ESGOTADO</span>
                </div>
              )}
            </div>
            <div className="produto-info">
              <h3>{produto.nome}</h3>
              <p className="preco-original">R$ {produto.precoOriginal.toFixed(2)}</p>
              <p className="preco">R$ {produto.preco.toFixed(2)}</p>
              <button
                className="btn-comprar"
                disabled={!produto.estoque}
                onClick={() => {
                  if (produto.estoque) {
                    window.location.href = "discord://discord.com/channels/1322378783285841981/1322806298227507272";
                  }
                }}
              >
                Comprar agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produtos;
