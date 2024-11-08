import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Rules from './pages/Rules';
import Champion from './pages/Champion';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/champion" element={<Champion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
