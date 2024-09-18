import HomePage from './pages/HomePage.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/*<Route path="/recipes/:id" element={<RecipeDetailPage />} />*/}
    </Routes>
  );
}

export default App;
