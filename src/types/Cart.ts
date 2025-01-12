{
  type productsType = {
    id: number
    title: string
    price: number
    quantity: number
    total: number
    discountPercentage: number
    discountedPrice: number
    thumbnail: string
  }
  type cartType = {
    id: number
    products: productsType[]
    total: number
    discountedTotal: number
    userId: number
    totalProducts: number
    totalQuantity: number
  }

  const Cart: cartType = {
    id: 1,
    products: [
      {
        id: 59,
        title: 'Spring and summershoes',
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
        thumbnail: 'https://cdn.dummyjson.com/product-images/59/thumbnail.jpg'
      },
      {
        id: 88,
        title: 'TC Reusable Silicone Magic Washing Gloves',
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
        thumbnail: 'https://cdn.dummyjson.com/product-images/88/thumbnail.jpg'
      },
      {
        id: 18,
        title: 'Oil Free Moisturizer 100ml',
        price: 40,
        quantity: 2,
        total: 80,
        discountPercentage: 13.1,
        discountedPrice: 70,
        thumbnail: 'https://cdn.dummyjson.com/product-images/18/thumbnail.jpg'
      },
      {
        id: 95,
        title: 'Wholesale cargo lashing Belt',
        price: 930,
        quantity: 1,
        total: 930,
        discountPercentage: 17.67,
        discountedPrice: 766,
        thumbnail: 'https://cdn.dummyjson.com/product-images/95/thumbnail.jpg'
      },
      {
        id: 39,
        title: 'Women Sweaters Wool',
        price: 600,
        quantity: 2,
        total: 1200,
        discountPercentage: 17.2,
        discountedPrice: 994,
        thumbnail: 'https://cdn.dummyjson.com/product-images/39/thumbnail.jpg'
      }
    ],
    total: 2328,
    discountedTotal: 1941,
    userId: 97,
    totalProducts: 5,
    totalQuantity: 10
  }
}
