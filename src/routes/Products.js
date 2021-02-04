import React from 'react';
import { connect } from 'dva';
import ProductsList from '../components/ProductsList'

const Products = (props) => {
  const { dispatch, products } = props;
  function handleDelete(id) {
    dispatch({
      type: 'products/del',
      payload: id
    })
  }

  return (
    <h2>
      List of Products
      <ProductsList onDelete={handleDelete} products={products && products.list || []} />
    </h2>
  )
};

export default connect((state) => {
  const { products } = state;
  return {
    products
  }
})(Products);
