import React, {useState} from 'react';
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useStateContext } from "../context/StateContext";
import { urlFor} from "../lib/client"

const Product2 = ({ product2}) => {
  const { slug,image, name, details, price, editora } = product2;
  const {onAdd, qty} = useStateContext();

  return (
      <div className="pro">
              <Link href={`/product/${product2.slug.current}`}>
              <img src={urlFor(image && image[0])} width={300} height={450} />
              </Link>
              <div className="des">
                <span>{editora}</span>
              <Link href={`/product/${product2.slug.current}`}>
                <h4>{name}</h4>
              </Link>
                <div className="star">
                  <i className=""><FaStar/></i>
                  <i className=""><FaStar/></i>
                  <i className=""><FaStar/></i>
                  <i className=""><FaStar/></i>
                  <i className=""><FaStar/></i>
                </div>
                <h3>R$ {price}</h3>
              </div>
              <button type='button' className="fa-solid fa-cart-shopping cart" onClick={() => onAdd(product2, qty)}><FaShoppingCart/></button>
            </div>
  )
}

export default Product2