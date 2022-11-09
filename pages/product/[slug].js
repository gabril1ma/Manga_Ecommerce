import React, {useState} from 'react';
import { client, urlFor } from '../../lib/client';
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Cart } from "../../components";
import { Product } from '../../components';
import { useStateContext } from "../../context/StateContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, editora } = product;
  const [index, setIndex] = useState(0)
  const {decQty, incQty, qty, onAdd,setShowCart, showCart, totalQuantities} = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  }
  return (
    <div>
        <section id="header"> <a> <Link href="/"><img src="/imagens/logo.png" className="logo" width={100} height={100} /></Link></a>
          <div>
            <ul id="navbar">
              <li><a><Link href="/">Home</Link></a></li>
              <li><a><Link href="../full">Produtos</Link></a></li>
              <li><a><Link href="../sobre">Sobre</Link></a></li>
              <li><a><Link href="../contato">Fale conosco</Link></a></li>
              <li><button type="button" className="fa-solid fa-cart-shopping cart cart-icon" onClick={() => setShowCart(true)}><FaShoppingCart/>
                <span className="cart-item-qty">{totalQuantities}</span>
              </button></li>

            {showCart && <Cart/>}
            </ul>
          </div>
        </section>
        <section id="prodetails" className="product-detail-desc">
          <div className="single-pro-image">
            <img src={urlFor(image && image[index])}id="MainImg" width="100%" height={550} />
              <div className="small-images-container">
                {image?.map((item, i ) => (
                  <img 
                  key = {i}
                  src={urlFor(item)}
                  className={i === index ?
                   "small-image selected image" : "small-image"}
                  onMouseEnter={() => setIndex(i)}
                  width="100%"/>
                ))}            
              </div>
          </div>
          <div className="single-pro-details">
            <h6>{editora}</h6>
            <h3>{name}</h3>
            <div className="star">
                  <i className="fa-solid fa-cart-shopping cart"><FaStar/></i>
                  <i className="fa-solid fa-cart-shopping cart"><FaStar/></i>
                  <i className="fa-solid fa-cart-shopping cart"><FaStar/></i>
                  <i className="fa-solid fa-cart-shopping cart"><FaStar/></i>
                  <i className="fa-solid fa-cart-shopping cart"><FaStar/></i>
                </div>
            <h2>R$ {price}</h2>
            
            <div className="quantity">
              <h3>Quantidade: </h3>      
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus/></span>
                <span className="num" onClick="">{qty}</span>
                <span className="plus" onClick={incQty}><AiOutlinePlus/></span>
              </p>
            </div>
            <button className="white white2" onClick={() => onAdd(product, qty)}>Adicionar ao carrinho</button>
            <button className="white white2" onClick={() => handleBuyNow()}>Comprar agora</button>
            <h4>Descrição do produto</h4>
            <span>{details}</span>
          </div>


          
        </section>
        <div id="product1" className="maylike-products-wrapper">
          <h2>Produtos que voce pode gostar</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
          </div>
    
        <footer className="section-p1">
          <div className="col">
            <img className="logo" src="/imagens/logo.png" width={100} height={100} />
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
        </footer>
      </div>
    );
  };

export const getStaticPaths = async () => {
  const query = `*[_type == "product" || _type == "product2" ]{
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);


  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));


  return {
    paths,
    fallback: 'blocking'
  }
}



export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const query2 = `*[_type == "product2" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product" || _type == "product2"]'
  
  const product = await client.fetch(query) || await client.fetch(query2) ; 
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { product, products}
  }
}

export default ProductDetails
