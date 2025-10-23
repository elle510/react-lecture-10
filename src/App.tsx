import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import PropsDrilling from './pages/lectures/lecture01/PropsDrilling';
import StateProps from './pages/lectures/lecture01/StateProps';

// import ContextAPI from './pages/lectures/lecture02/ContextAPI';

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-7xl px-4">
        <Header />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lecture/1-1" element={<StateProps />} />
            <Route path="/lecture/1-2" element={<PropsDrilling />} />
            {/* <Route path="/lecture/1-3" element={<ContextAPI />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
