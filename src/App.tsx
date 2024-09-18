import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Skeleton from './components/skeleton/Skeleton.tsx';

const HomePage = lazy(() => import('./pages/HomePage'));
const RecipeDetailPage = lazy(() => import('./pages/RecipeDetailPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
