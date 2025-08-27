const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise cancelling over-ear headphones.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track fitness, health, and more.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Laptop",
    description: "Lightweight and powerful performance.",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Tablet",
    description: "10-inch display with stylus support.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1640622841908-3a691b7b7ac9?q=80&w=1188&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    description: "High precision with RGB lighting.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    description: "RGB backlit keyboard with blue switches.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1664813398575-819b46e5ab8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    name: "Drone",
    description: "HD camera and long battery life.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    name: "Power Bank",
    description: "10000mAh fast charging portable charger.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    name: "Smart Glasses",
    description: "Augmented reality smart glasses.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1562330744-0e81c1e9dd88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    name: "Action Camera",
    description: "4K waterproof sports action cam.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1484506399805-c273b8e91dce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    name: "VR Headset",
    description: "Immersive virtual reality experience.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1707228773518-7ca0492d0c4d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 13,
    name: "Portable Projector",
    description: "Mini projector for home cinema.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1591127716075-976fc20df13f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 14,
    name: "Iphone 16",
    description: "Latest model with powerful camera.",
    price: 899,
    image: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-lineup-240909_big.jpg.large.jpg"
  },
  
  {
    id: 15,
    name: "Smart Home Hub",
    description: "Control all your smart devices.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=400&q=80"
  },
  

  {
    id: 16,
    name: "PJ-863 Mobile Printer",
    description: "The Brother PJ-863 is a compact A4 mobile thermal printer.",
    price: 59.99,
    image: "https://www.brother.co.za/-/media/ap2/products/mobileprinter/pj-863/pj-863_r.jpg?rev=edabb4b899dd4e80ab081af4e7f1ce70"
  }
];
