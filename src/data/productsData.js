// src/data/productData.js

// Nike Dunks 
import image1 from "../assets/image/nike_dunk/image1.jpg"
import image2 from "../assets/image/nike_dunk/image2.jpg"
import image4 from "../assets/image/nike_dunk/image4.jpg"
import image5 from "../assets/image/nike_dunk/image5.jpg"
import image6 from "../assets/image/nike_dunk/image6.jpg"
import image3 from "../assets/image/nike_dunk/image3.jpg"

// Mocassin
import mocasinblanc from "../assets/image/mocassin/mocassinblanc.png"
import mocasinblanc2 from "../assets/image/mocassin/mocassinblanc2.png"
import mocasinmarron from "../assets/image/mocassin/mocassinmarron.jpg"
import mocasinmarron2 from "../assets/image/mocassin/mocassinmarron2.jpg"
import mocasinmarron3 from "../assets/image/mocassin/mocassinmarron3.jpg"
import mocasinmarron4 from "../assets/image/mocassin/mocassinmarron4.jpg"
import mocasinnoir from "../assets/image/mocassin/mocassinnoir.jpg"
import mocasinnoir2 from "../assets/image/mocassin/mocassinnoir2.jpg"
import mocasinvert from "../assets/image/mocassin/mocassinvert.jpg"
import mocasinvert2 from "../assets/image/mocassin/mocassinvert2.jpg"
import mocasinbjaune from "../assets/image/mocassin/mocassinjaune.jpg"

// Mcqueen
import mcblanc from "../assets/image/mcqueen/mcblanc.jpg";
import mcblanc2 from "../assets/image/mcqueen/mcblanc2.jpg"
import mcjaune from "../assets/image/mcqueen/mcjaune.jpg"
import mcmulti from "../assets/image/mcqueen/mcmulti.jpg"
import mcnoir from "../assets/image/mcqueen/mcnoir.jpg"
import mcnoir2 from "../assets/image/mcqueen/mcnoir2.jpeg"
import mcrouge from "../assets/image/mcqueen/mcrouge.webp"

const products = [
    /* Nike dunks */
    {
      id: 1,
      name: "Air Nike 1",
      price: 15000,
      currency: "FCFA",
      image: image1,
      sizes: [38, 39, 40, 41, 42, 43, 44],
      colors: ["black", "white", "red"],
      category: "nike-dunk",
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
      category: "nike-dunk",
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
      category: "nike-dunk",
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
      category: "nike-dunk",
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
      category: "nike-dunk",
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
      category: "nike-dunk",
      rating: 4.4,
      reviews: 104,
      description: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
      featured: true
    },

    // Mocassin
    {
      id: 7,
      name: "Mocassin ",
      price: 15000,
      currency: "FCFA",
      image: mocasinblanc,
      sizes: [38, 39, 40, 41, 42, 43, 44],
      colors: ["black", "white", "red"],
      category: "mocassin",
      rating: 4.5,
      reviews: 128,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      featured: true
    },
    {
      id: 8,
      name: "Mocassin Italienne",
      price: 10000,
      currency: "FCFA",
      image: mocasinblanc2,
      sizes: [39, 40, 41, 42],
      colors: ["blue", "white", "brown"],
      category: "mocassin",
      rating: 4.2,
      reviews: 85,
      description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
      featured: false
    },
    {
      id: 9,
      name: "Mocassin VIP",
      price: 18000,
      currency: "FCFA",
      image: mocasinnoir2,
      sizes: [40, 41, 42, 43, 44],
      colors: ["black", "red"],
      category: "mocassin",
      rating: 4.8,
      reviews: 215,
      description: "Sed consectetur arcu eu diam vestibulum at interdum erat sollicitudin.",
      featured: true
    },
    {
      id: 10,
      name: "Mocassin",
      price: 12000,
      currency: "FCFA",
      image: mocasinvert,
      sizes: [38, 39, 40, 41, 42],
      colors: ["gray", "blue", "green"],
      category: "mocassin",
      rating: 4.3,
      reviews: 92,
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      featured: false
    },
    {
      id: 11,
      name: "Pair CMR",
      price: 9500,
      currency: "FCFA",
      image: mocasinbjaune,
      sizes: [37, 38, 39, 40, 41],
      colors: ["white", "black"],
      category: "mocassin",
      rating: 4.1,
      reviews: 76,
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      featured: false
    },
    {
      id: 12,
      name: "Pair Classique",
      price: 13500,
      currency: "FCFA",
      image: mocasinvert,
      sizes: [39, 40, 41, 42, 43],
      colors: ["black", "yellow"],
      category: "mocassin",
      rating: 4.4,
      reviews: 104,
      description: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
      featured: true
    },

    // MCQUEEN
    {
      id: 13,
      name: "Mcqueen classique ",
      price: 15000,
      currency: "FCFA",
      image: mcblanc,
      sizes: [38, 39, 40, 41, 42, 43, 44],
      colors: ["black", "white", "red", "gray", "pink"],
      category: "mcqueen",
      rating: 4.5,
      reviews: 128,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
      featured: true
    },
    {
      id: 14,
      name: "Mcqueen",
      price: 10000,
      currency: "FCFA",
      image: mcblanc2,
      sizes: [39, 40, 41, 42],
      colors: ["blue", "white", "brown"],
      category: "mcqueen",
      rating: 4.2,
      reviews: 85,
      description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
      featured: false
    },
    {
      id: 15,
      name: "Mcquenn M fille",
      price: 18000,
      currency: "FCFA",
      image: mcjaune,
      sizes: [40, 41, 42, 43, 44],
      colors: ["black", "red"],
      category: "mcqueen",
      rating: 4.8,
      reviews: 215,
      description: "Sed consectetur arcu eu diam vestibulum at interdum erat sollicitudin.",
      featured: true
    },
    {
      id: 16,
      name: "Mcqueen multi",
      price: 12000,
      currency: "FCFA",
      image: mcmulti,
      sizes: [38, 39, 40, 41, 42],
      colors: ["gray", "blue", "green"],
      category: "mcqueen",
      rating: 4.3,
      reviews: 92,
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      featured: false
    },
    {
      id: 17,
      name: "Mcqueen CMR",
      price: 9500,
      currency: "FCFA",
      image: mcrouge,
      sizes: [37, 38, 39, 40, 41],
      colors: ["white", "black"],
      category: "mcqueen",
      rating: 4.1,
      reviews: 76,
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
      featured: false
    },
    {
      id: 18,
      name: "Mcqueen",
      price: 13500,
      currency: "FCFA",
      image: mcnoir,
      sizes: [39, 40, 41, 42, 43],
      colors: ["black", "yellow"],
      category: "mcqueen",
      rating: 4.4,
      reviews: 104,
      description: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.",
      featured: true
    }
  ];
  
  export default products;
  


