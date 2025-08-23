import ProductItem from '../components/ProductItem';

export default function ProductListPage() {
  const products = [
    { id: 1, name: '노트북', price: '1,200,000원' },
    { id: 2, name: '키보드', price: '85,000원' },
    { id: 3, name: '마우스', price: '40,000원' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>상품 목록</h1>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}