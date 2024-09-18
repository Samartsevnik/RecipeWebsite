import HomePage from './pages/HomePage.tsx';
import { Route, Routes } from 'react-router-dom';
import RecipeDetailPage from './pages/RecipeDetailPage.tsx';
import { AboutUsPage } from './pages/AboutUsPage.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
