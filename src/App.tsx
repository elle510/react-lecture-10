import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Lecture01 from './pages/lectures/Lecture01';

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-7xl px-4">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecture/1" element={<Lecture01 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
