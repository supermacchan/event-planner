import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFound/NotFoundPage';
import { Layout } from 'components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Edit = lazy(() => import('./pages/Edit/Edit'));
const Create = lazy(() => import('./pages/Create/Create'));
const Event = lazy(() => import('./pages/Event/Event'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='event/:id' element={<Event />} />
            <Route path='edit' element={<Edit />} />
          {/* 404 Not Found Page with delayed redirect */}
          <Route path="*" element={
            <NotFoundPage component={NotFound} redirectTo="/" />
          } />
        </Route>
      </Routes>

      {/* notifications config */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
