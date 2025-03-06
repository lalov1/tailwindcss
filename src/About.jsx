import React from 'react';
import { Link } from 'react-router-dom';

function About() {
return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">About Us</h1>
        
        <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
            Welcome to our website! We are a passionate team dedicated to creating beautiful and
            functional web applications using modern technologies like React and TailwindCSS.
            </p>
            
            <p className="text-lg text-gray-700 mb-4">
            Our mission is to provide high-quality solutions that combine elegant design with 
            powerful functionality. We believe in keeping things simple yet effective.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Story</h2>
            <p className="text-lg text-gray-700 mb-4">
            Founded in 2023, our journey began with a simple idea: to make web development 
            accessible and enjoyable. Since then, we've grown into a team of dedicated professionals
            working together to bring creative ideas to life.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
            Have questions or want to collaborate? Reach out to us at 
            <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800 ml-1">
                contact@example.com
            </a>
            </p>
        </div>
        
        <div className="mt-8 text-center">
            <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 font-medium"
            >
            ← Back to Home
            </Link>
        </div>
        </div>
    </div>
    </div>
);
}

export default About;

