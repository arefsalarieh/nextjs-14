import React from 'react'

const Product = ({params}) => {
  return (
    <div>ProductId = {params.ProductId} & productPrice = {params.productPrice} $</div>
  )
}

export default Product