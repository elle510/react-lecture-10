import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ContextAPI from './pages/lectures/lecture01/ContextApi';
import PropsDrilling from './pages/lectures/lecture01/PropsDrilling';
import StateProps from './pages/lectures/lecture01/StateProps';
import StateManagement from './pages/lectures/lecture02/StateManagement';
import ActionStateExample from './pages/lectures/lecture03/ActionStateExample';
import SeoExample from './pages/lectures/lecture03/SeoExample';

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
            <Route path="/lecture/1-3" element={<ContextAPI />} />
            <Route path="/lecture/2" element={<StateManagement />} />
            <Route path="/lecture/3-1" element={<SeoExample />} />
            <Route path="/lecture/3-2" element={<ActionStateExample />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
