import { useState } from 'react';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4">
      <Header />
      <main className="py-8">
        <Home />
        <div className="mt-8 rounded-lg bg-slate-100 p-8 shadow-md">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
