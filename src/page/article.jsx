// src/pages/article.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../data/productsData';

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    category: [],
    priceRange: [0, 20000]
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0]);
    setSelectedSize(product.sizes[0]);
    setQuantity(1);
    setIsModalOpen(true);
  };

  const handleWhatsAppPurchase = () => {
    if (!selectedProduct || !selectedColor || !selectedSize) return;
    
    // const message = `Bonjour, je suis intéressé par: ${selectedProduct.name}, couleur ${selectedColor}, taille ${selectedSize}, ${quantity} pairs.`;
    // Image du produit: ${window.location.origin}${selectedProduct.image}
    const message = `Bonjour, je suis intéressé par:
    
    *Produit:* ${selectedProduct.name}
    *Couleur: ${selectedColor}
    *Taille: ${selectedSize}
    *Quantité: ${quantity} paire
    *Prix Unitaire: ${selectedProduct.price.toLocaleString()} ${selectedProduct.currency}
    *Prix totale: ${(selectedProduct.price * quantity).toLocaleString()} ${selectedProduct.currency}
    
    Merci!`
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/237696767542?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
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
                        <button 
                          onClick={() => openProductModal(product)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                          Buy Now
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

       {/* Product Modal */}
       <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black opacity-[.5] flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">
                        {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                      </span>
                    </div>

                    <p className="text-gray-800 font-bold text-xl mb-4">
                      {selectedProduct.price.toLocaleString()} {selectedProduct.currency}
                    </p>

                    <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                    <div className="mb-6">
                      <h3 className="text-md font-medium text-gray-700 mb-2">Color</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map(color => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-600' : 'border-gray-200'}`}
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-md font-medium text-gray-700 mb-2">Size</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {selectedProduct.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-1 text-sm rounded-md border ${
                              selectedSize === size
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-md font-medium text-gray-700 mb-2">Quantity</h3>
                      <div className="flex items-center">
                        <button
                          onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                          className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-16 text-center border-t border-b border-gray-300 py-1"
                        />
                        <button
                          onClick={() => setQuantity(prev => prev + 1)}
                          className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleWhatsAppPurchase}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
                      >
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Commander via Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
