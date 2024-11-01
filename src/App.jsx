import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Home from './pages/Home';
// import Champion from './pages/Champion';
// import Rules from './pages/Rules';
// import Error from './pages/Error';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Champion />} />
          </Routes>
        </main>
        <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
