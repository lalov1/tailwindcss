import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

// Home page component
// function Home() {
// return (
//     <div className="p-4">
//     <h1 className="text-2xl font-bold mb-4">Home Page</h1>
//     <p>Welcome to our application!</p>
//     </div>
// );
// }

// About page component
// function About() {
// return (
//     <div className="p-4">
//     <h1 className="text-2xl font-bold mb-4">About Page</h1>
//     <p>This is a React application using React Router and TailwindCSS.</p>
//     </div>
// );
// }

function App() {
return (
    // <Router>
    <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
        </div>
        </nav>
        
        {/* Main content */}
        <div className="container mx-auto py-4">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </div>
    </div>
    // </Router>
);
}

export default App;

