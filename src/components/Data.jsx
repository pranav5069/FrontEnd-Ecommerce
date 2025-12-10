const products = [
    { id: 1, name: 'Wireless Headphones', title: 'Wireless Headphones', price: 79, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', rating: 4.5, description: 'Comfortable wireless headphones with long battery life.' },
    { id: 2, name: 'USB-C Cable', title: 'USB-C Cable', price: 12, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop', rating: 4.8, description: 'Durable braided USB-C cable for fast charging.' },
    { id: 3, name: 'Phone Case', title: 'Phone Case', price: 24, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop', rating: 4.3, description: 'Slim protective phone case with anti-scratch finish.' },
    { id: 4, name: 'Screen Protector', title: 'Screen Protector', price: 9, image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop', rating: 4.6, description: 'Tempered glass screen protector, high clarity.' },
    { id: 5, name: 'Power Bank', title: 'Power Bank', price: 34, image: 'https://dummyimage.com/400x300/cccccc/969696.jpg?text=Power+Bank', rating: 4.7, description: '10,000mAh portable power bank with dual USB output.' },
    { id: 6, name: 'Phone Stand', title: 'Phone Stand', price: 19, image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=300&fit=crop', rating: 4.4, description: 'Adjustable phone stand for desk and bedside use.' },
    { id: 7, name: 'Portable Speaker', title: 'Portable Speaker', price: 49, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop', rating: 4.5, description: 'Compact Bluetooth speaker with rich sound.' },
    { id: 8, name: 'Charging Dock', title: 'Charging Dock', price: 29, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop', rating: 4.6, description: 'Multi-device charging dock with tidy cable management.' },
    { id: 9, name: 'Wireless Mouse', title: 'Wireless Mouse', price: 25, image: 'https://images.unsplash.com/photo-1587829741301-dc798b82b5f9?w=400&h=300&fit=crop', rating: 4.4, description: 'Ergonomic wireless mouse with adjustable DPI.' },
    { id: 10, name: 'Mechanical Keyboard', title: 'Mechanical Keyboard', price: 89, image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop', rating: 4.7, description: 'Compact mechanical keyboard with RGB lighting.' },
    { id: 11, name: 'Webcam', title: 'HD Webcam', price: 49, image: 'https://images.unsplash.com/photo-1583488972453-8f3d3f6f7b0e?w=400&h=300&fit=crop', rating: 4.3, description: '1080p webcam with autofocus and built-in mic.' },
    { id: 12, name: 'Bluetooth Adapter', title: 'Bluetooth Adapter', price: 15, image: 'https://dummyimage.com/400x300/cccccc/969696.jpg?text=Bluetooth+Adapter', rating: 4.2, description: 'USB Bluetooth adapter for legacy devices.' },
    { id: 13, name: 'Laptop Sleeve', title: 'Laptop Sleeve', price: 22, image: 'https://images.unsplash.com/photo-1541807084-5c52b6b7d0c0?w=400&h=300&fit=crop', rating: 4.5, description: 'Protective neoprene laptop sleeve, slim fit.' },
    { id: 14, name: 'SD Card 128GB', title: 'SD Card 128GB', price: 39, image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=300&fit=crop', rating: 4.6, description: 'High-speed SD card for cameras and drones.' },
    { id: 15, name: 'Wireless Charger', title: 'Wireless Charger', price: 27, image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41e6?w=400&h=300&fit=crop', rating: 4.4, description: 'Fast wireless charging pad with non-slip surface.' },
    { id: 16, name: 'Smart Plug', title: 'Smart Plug', price: 18, image: 'https://images.unsplash.com/photo-1580894908361-6f8a1b9e9f2b?w=400&h=300&fit=crop', rating: 4.1, description: 'Wi-Fi smart plug with app scheduling.' },
    { id: 17, name: 'Noise Cancelling Earbuds', title: 'Noise Cancelling Earbuds', price: 119, image: 'https://images.unsplash.com/photo-1585386959984-a415522c7b3b?w=400&h=300&fit=crop', rating: 4.6, description: 'In-ear true wireless earbuds with ANC.' },
    { id: 18, name: 'Fitness Band', title: 'Fitness Band', price: 59, image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=400&h=300&fit=crop', rating: 4.2, description: 'Activity tracker with heart-rate monitoring.' },
]





const cartItems = [];

export {products, cartItems };