import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Unable to load products (${response.status})`);
        }
        setProducts(await response.json());
      } catch (loadError) {
        setError(loadError.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p className="text-center my-5">Loading products...</p>;
  if (error) return <p className="text-center my-5 text-danger">{error}</p>;

  const filteredProducts = products.filter((product) => {
    if (category === 'garments') {
      return product.category === "men's clothing" || product.category === "women's clothing";
    }
    if (category === 'electronics') {
      return product.category === 'electronics';
    }
    return true;
  });

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Latest Productss</h2>
      <hr className="my-4" />
      <div className="d-flex justify-content-center gap-2 mb-4" role="group" aria-label="Filter products">
        {[
          { label: 'All', value: 'all' },
          { label: 'Garments', value: 'garments' },
          { label: 'Electronics', value: 'electronics' },
        ].map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`btn ${category === filter.value ? 'btn-dark' : 'btn-outline-dark'}`}
            aria-pressed={category === filter.value}
            onClick={() => setCategory(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-4 col-lg-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-3">
              <img
                src={product.image}
                className="card-img-top mx-auto"
                alt={product.title}
                style={{ height: '180px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text fw-bold">${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-outline-dark mt-auto"
                >
                  View product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
