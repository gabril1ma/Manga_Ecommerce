import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {FaRegMap} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {AiOutlineClockCircle} from "react-icons/ai"
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
              <li><a><Link href="../sobre">Sobre</Link></a></li>
              <Link href="../contato"><li><a class="active">Fale conosco</a></li></Link>
              <li><button type="button" className="fa-solid fa-cart-shopping cart cart-icon" onClick={() => setShowCart(true)}><FaShoppingCart/>
              <span className="cart-item-qty">{totalQuantities}</span>
              </button></li>

            {showCart && <Cart/>}
            </ul>
          </div>
        </section>
        <section id="page-header" class="about-head contato">
          <h2>Fale conosco</h2>
        </section>

        <section id="contact-details" class="section-p1">
            <div class="details">
                <span>Entre em contato</span>
                <h2>Informações de contato da nossa empresa</h2>
                <h3>Agencia</h3>
                <div>
                    <li>
                       <FaRegMap/>
                       <p>Belo Horizonte - Minas Gerais</p>
                    </li>
                    <li>
                       <FaPhoneAlt/>
                       <p>(31) 98359-4506</p>
                    </li>
                    <li>
                       <AiOutlineMail/>
                       <p>gabrielolima525@gmail.com</p>
                    </li>
                    <li>
                       <AiOutlineClockCircle/>
                       <p>segunda a sexta: 8:00 até 18:00</p>
                    </li>
                </div>
            </div>
            <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240074.20406019894!2d-44.100365786168254!3d-19.91768499540635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x701d1dc8bb05fd7d!2sBelo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1664828987324!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </section>

        <section id="form-details">
            <form action=''>
                <span>Deixe sua mensagem</span>
                <h2>Nós adorariamos escutar o que voce tem a dizer</h2>
                <input type="text" required placeholder='Seu nome'></input>
                <input type="text" required placeholder='Seu email'></input>
                <input type="text" required placeholder='Assunto'></input>
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem" required ></textarea>
                <button className='normal'>Enviar</button>
            </form>

            <div class="people">
                <div>
                    <img src="/imagens/eu.png"></img>
                    <p><span>Gabriel de Oliveira Lima</span> Dono <br/>
                    Número: (31) 98359-4506 <br/>
                    Email: gabrielolima525@gmail.com</p> 
                </div>

            </div>

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