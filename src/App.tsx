import HomePage from './pages/HomePage.tsx';
import { Route, Routes } from 'react-router-dom';
import RecipeDetailPage from './pages/RecipeDetailPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
    </Routes>
  );
}

export default App;
