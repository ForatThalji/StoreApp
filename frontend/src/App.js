import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3270/products/category/jewelery')
            .then(response => {
                setProducts(response.data);
            });
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-8">Jewelry Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.title}</h2>
                            <p className="text-gray-700 mt-2">Price: ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;