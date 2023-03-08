<script>
  let products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of product 1',
      price: 19.99,
      image: 'https://example.com/product-1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of product 2',
      price: 29.99,
      image: 'https://example.com/product-2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of product 3',
      price: 39.99,
      image: 'https://example.com/product-3.jpg',
    },
  ]
</script>

<div>
  {#each products as product}
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  {/each}
</div>
