import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ResturantDetais from './components/ResturantDetais';
import { Container } from 'react-bootstrap';



function App() {
  return (
    <div >
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="resturants/:id" element={<ResturantDetais />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
