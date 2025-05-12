// src/data/productData.js

import image1 from "../assets/image/image1.jpg"
import image2 from "../assets/image/image2.jpg"
import image3 from "../assets/image/image3.jpg"
import image4 from "../assets/image/image4.jpg"
import image5 from "../assets/image/image5.jpg"
import image6 from "../assets/image/image6.jpg"

const products = [
    {
      id: 1,
      name: "Air Nike 1",
      price: 15000,
      currency: "FCFA",
      image: image1,
      sizes: [38, 39, 40, 41, 42, 43, 44],
      colors: ["black", "white", "red"],
      category: "running",
      rating: 4.5,
      reviews: 128,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      featured: true
    },
    {
      id: 2,
      name: "Air Nike 2",
      price: 10000,
      currency: "FCFA",
      image: image2,
      sizes: [39, 40, 41, 42],
      colors: ["blue", "white"],
      category: "casual",
      rating: 4.2,
      reviews: 85,
      description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
      featured: false
    },
    {
      id: 3,
      name: "Air Jordan Pro",
      price: 18000,
      currency: "FCFA",
      image: image3,
      sizes: [40, 41, 42, 43, 44],
      colors: ["black", "red"],
      category: "basketball",
      rating: 4.8,
      reviews: 215,
      description: "Sed consectetur arcu eu diam vestibulum at interdum erat sollicitudin.",
      featured: true
    },
    {
      id: 4,
      name: "Runner XT",
      price: 12000,
      currency: "FCFA",
      image: image4,
      sizes: [38, 39, 40, 41, 42],
      colors: ["gray", "blue", "green"],
      category: "running",
      rating: 4.3,
      reviews: 92,
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      featured: false
    },
    {
      id: 5,
      name: "Street Classic",
      price: 9500,
      currency: "FCFA",
      image: image5,
      sizes: [37, 38, 39, 40, 41],
      colors: ["white", "black"],
      category: "casual",
      rating: 4.1,
      reviews: 76,
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      featured: false
    },
    {
      id: 6,
      name: "Bounce Elite",
      price: 13500,
      currency: "FCFA",
      image: image6,
      sizes: [39, 40, 41, 42, 43],
      colors: ["black", "yellow"],
      category: "training",
      rating: 4.4,
      reviews: 104,
      description: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
      featured: true
    }
  ];
  
  export default products;
  


