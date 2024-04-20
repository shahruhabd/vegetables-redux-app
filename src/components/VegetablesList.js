import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions';

export const products = [
  { id: 1, name: 'Carrot', price: 0.50, category: 'vegetable' },
  { id: 2, name: 'Tomato', price: 0.30, category: 'vegetable' },
  { id: 3, name: 'Potato', price: 0.20, category: 'vegetable' },
  { id: 4, name: 'Cucumber', price: 0.40, category: 'vegetable' },
  { id: 5, name: 'Bell Pepper', price: 0.60, category: 'vegetable' },
  { id: 6, name: 'Lettuce', price: 0.80, category: 'vegetable' },
  { id: 7, name: 'Spinach', price: 0.50, category: 'vegetable' },
  { id: 8, name: 'Mushroom', price: 0.90, category: 'vegetable' },
  { id: 9, name: 'Apple', price: 0.60, category: 'fruit' },
  { id: 10, name: 'Banana', price: 0.50, category: 'fruit' },
  { id: 11, name: 'Orange', price: 0.70, category: 'fruit' },
  { id: 12, name: 'Strawberry', price: 1.00, category: 'fruit' },
  { id: 13, name: 'Blueberry', price: 1.20, category: 'fruit' },
  { id: 14, name: 'Kiwi', price: 0.80, category: 'fruit' },
  { id: 15, name: 'Peach', price: 0.90, category: 'fruit' },
  { id: 16, name: 'Mango', price: 1.50, category: 'fruit' },
];

const ITEMS_PER_PAGE = 10;

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const dispatch = useDispatch();

  const sortedProducts = React.useMemo(() => {
    let sortedProducts = [...products];
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  }, [sortOrder]);

  const filteredProducts = sortedProducts.filter(product => {
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / ITEMS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mt-3">
      <h2>Products</h2>
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={sortOrder}
            onChange={e => {
              setSortOrder(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Sort by price</option>
            <option value="asc">Price Low to High</option>
            <option value="desc">Price High to Low</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            value={categoryFilter}
            onChange={e => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">All Categories</option>
            <option value="vegetable">Vegetables</option>
            <option value="fruit">Fruits</option>
          </select>
        </div>
      </div>
      <div className="row">
        {currentItems.map(prod => (
          <div className="col-md-4 mb-3" key={prod.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Category: {prod.category}</h6>
                <div className="card-text mb-2">${prod.price.toFixed(2)}</div>
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a 
                href="#!"
                className="page-link"
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;