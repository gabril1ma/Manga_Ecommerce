import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from "./product";
import product2 from "./product2"
import productFull from './productFull';


export default createSchema({
  name: 'default',

  types: schemaTypes.concat([ product, product2, productFull ]),
})
