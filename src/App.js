import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import HomePage from './routes/HomePage';
import ContactPage from './routes/ContactPage';
import ExperiencePage from './routes/ExperiencePage';
import ProjectsPage from './routes/ProjectsPage';
import './styles/styles.css';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navigation />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/experience" element={<ExperiencePage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className='page-body'>
      <h1 className='text-5xl font-extrabold'>Sadly, it appears the page you are looking for does not exist.</h1>
      <p className='text-xl pt-6'>Maybe come back later and try again?</p>
    </div>
  );
}

export default App;
