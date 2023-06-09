import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader';

const Layout = lazy(() => import('components/Layout'));
const Home = lazy(() => import('../../views/Home.jsx'));
const Tweets = lazy(() => import('../../views/Tweets.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
