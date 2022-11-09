import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {Product} from "../components";
import { Cart } from "../components";
import {Product2} from "../components";
import { useStateContext } from "../context/StateContext";
import { client } from "../lib/client";
import Link from "next/link";

const index = ({ products, products2 }) => {
  const [index, setIndex] = useState(0)
  const {decQty, incQty, qty, onAdd, setShowCart, showCart, totalQuantities} = useStateContext();
  
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Better manga</title>
        <link rel="stylesheet" href="style.css" />
        <section id="header"> <a> <Link href="/"><img src="/imagens/logo.png" className="logo" width={100} height={100} /></Link></a>
          <div>
            <ul id="navbar">
              <Link href="/"><li><a>Home</a></li></Link>
              <li><a><Link href="../full">Produtos</Link></a></li>
              <Link href="../sobre"><li><a class="active">Sobre</a></li></Link>
              <li><a><Link href="../contato">Fale conosco</Link></a></li>
              <li><button type="button" className="fa-solid fa-cart-shopping cart cart-icon" onClick={() => setShowCart(true)}><FaShoppingCart/>
              <span className="cart-item-qty">{totalQuantities}</span>
              </button></li>

            {showCart && <Cart/>}
            </ul>
          </div>
        </section>
        <section id="page-header" class="about-head">
          <h2>Sobre nós</h2>
        </section>

        <section id="about-head" class="section-p1">
            <img src="/imagens/mangas.jpg"></img>
            <div>
                <h2>Quem Somos Nós?</h2>
                <p>Somos uma empresa especializada na venda de mangas, com os melhores preços e titulos, que preza pela satisfação do cliente
                com produtos de qualidade e entregas rapidas e bem embalados para chegarem em perfeito estado em sua casa</p>
                <abbr>Compre seus mangas com a melhor empresa do setor, vendidos com todo o cuidado de leitor para leitor</abbr>
                <br></br>
                <br></br>
            </div>

        </section>

        <section id="banner" className="section-m1 sobre">
          <h1>Venha conferir nossa lista de<span> produtos</span></h1>
          <Link href="/full"><button type='button' className="normal">Veja mais</button></Link>
        </section>

        <section id="newsletter" className="section-p1">
          <div className="newstext">
            <h4>Se inscreva para receber noticias</h4>
            <p>Insira seu E-MAIL para receber noticias sobre novos produtos e <span>as melhores ofertas</span></p>   
          </div>
          <div className="form">
            <input type="text" placeholder="Seu email" />
            <button className="white">Inscrever-se</button>
          </div>
        </section>

        <footer className="section-p1">
          <div className="col">
            <img className="logo" src="imagens/logo.png" width={100} height={100} />
            <h4>Contato</h4>
            <p><strong>Endereço: </strong>Bairro paraiso rua vista alegre</p>
            <p><strong>Telefone: </strong>31 983594506</p>
            <p><strong>Horario de funcionamento: </strong> 8:00 - 18:00, Seg - Sex</p>
            <div className="follow">
              <h4>Redes Sociais</h4>
              <div>
                <i className="fab fa-facebook-f" />
                <i className="fab fa-instagram" />
              </div>
            </div>
          </div>
          <div className="col">
            <h4>Sobre</h4>
            <a href="sobre.html">Sobre Nós</a>
            <a href="#">Informações sobre entrega</a>
            <a href="#">Politica de segurança</a>
            <a href="#">Termos e condições</a>
            <a href="faleconosco.html">Contato</a>
          </div>
          <div className="col">
            <h4>Minha conta</h4>
            <a href="#">Entrar na conta</a>
            <a href="carrinho.html">Ver carrinho</a>
            <a href="#">Lista de desejos</a>
            <a href="#">Rastrear minha encomenda</a>
            <a href="#">Ajuda</a>
          </div>
          <div className="copyright">
            <p>2022, Better Manga </p>
          </div>
          <footer>
            <h4 id="textFooter">Gabriel de Oliveira Lima | (31) 9 8359-3406 | gabrielolima525@gmail.com | <a id="faleconosco" href="faleconosco.html">Fale conosco</a></h4>
          </footer>
        </footer></div>
    );
  };
        
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  const query2 = '*[_type == "product2"]';
  const products2 = await client.fetch(query2);

  return {
    props: {products, products2}
  }
}

export default index;