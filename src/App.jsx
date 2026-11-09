import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import TodoPage from './TodoPage';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        
        {/* Navigation Headings */}
        <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#f4f4f4', marginBottom: '20px', borderRadius: '5px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
          <Link to="/todos" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>To-Do App</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>About</Link>
        </nav>

        {/* Dynamic Window Handlers */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}
