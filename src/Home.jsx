import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to My Website
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            A modern website built with React and TailwindCSS
        </p>
        </div>
    </header>
    
    <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
                Discover Our Features
            </h2>
            <div className="mt-4 text-gray-600">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                vestibulum enim, vitae efficitur arcu volutpat vel. Donec facilisis
                turpis a enim scelerisque, at feugiat ligula malesuada.
                </p>
            </div>
            <div className="mt-8">
                <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                Learn More
                </Link>
            </div>
            </div>
        </div>
        </div>
    </main>
    </div>
);
};

export default Home;

