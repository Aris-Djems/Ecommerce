// src/pages/article.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../data/productsData';

const Article = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    category: [],
    priceRange: [0, 20000]
  });

  // Extract all available options for filters
  const allSizes = Array.from(new Set(products.flatMap(product => product.sizes))).sort((a, b) => a - b);
  const allColors = Array.from(new Set(products.flatMap(product => product.colors)));
  const allCategories = Array.from(new Set(products.map(product => product.category)));

  // Apply filters and search
  useEffect(() => {
    let results = products;

    // Apply search filter
    if (searchTerm) {
      results = results.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply size filter
    if (filters.size.length > 0) {
      results = results.filter(product =>
        product.sizes.some(size => filters.size.includes(size))
      );
    }

    // Apply color filter
    if (filters.color.length > 0) {
      results = results.filter(product =>
        product.colors.some(color => filters.color.includes(color))
      );
    }

    // Apply category filter
    if (filters.category.length > 0) {
      results = results.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Apply price range filter
    results = results.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    setFilteredProducts(results);
  }, [searchTerm, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (filterType === 'priceRange') {
        newFilters[filterType] = value;
      } else {
        const index = newFilters[filterType].indexOf(value);
        if (index === -1) {
          newFilters[filterType] = [...newFilters[filterType], value];
        } else {
          newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
        }
      }
      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setFilters({
      size: [],
      color: [],
      category: [],
      priceRange: [0, 20000]
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[100px] ">
      {/* Header with search bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Sneakers Collection</h1>
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search for sneakers..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Filters sidebar */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm mb-6 md:mb-0 md:mr-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear all
            </button>
          </div>

          {/* Price range filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Price Range</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">{filters.priceRange[0]} FCFA</span>
              <span className="text-sm text-gray-600">{filters.priceRange[1]} FCFA</span>
            </div>
            <input
              type="range"
              min="0"
              max="20000"
              step="1000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Size filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {allSizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleFilterChange('size', size)}
                  className={`px-3 py-1 text-sm rounded-md border ${
                    filters.size.includes(size)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Color</h3>
            <div className="grid grid-cols-4 gap-2">
              {allColors.map(color => (
                <button
                  key={color}
                  onClick={() => handleFilterChange('color', color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    filters.color.includes(color) ? 'border-blue-600' : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-6">
            <h3 className="text-md font-medium text-gray-700 mb-2">Category</h3>
            <div className="space-y-2">
              {allCategories.map(category => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange('category', category)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="ml-2 text-sm text-gray-700 capitalize"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
                Sort by:
              </label>
              <select
                id="sort"
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.featured && (
                        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                      <div className="absolute top-2 right-2 flex items-center bg-white bg-opacity-90 rounded-full px-2 py-1">
                        <svg
                          className="h-4 w-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-xs text-gray-700">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">
                          {product.price.toLocaleString()} {product.currency}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200">
                          Add to Cart
                        </button>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {product.colors.map(color => (
                          <span
                            key={color}
                            className="w-4 h-4 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;
