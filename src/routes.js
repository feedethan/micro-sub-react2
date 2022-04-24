import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

function SubRoutes(props) {
  const routePrefix = '/micro/react2';
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${routePrefix}/aaa`} element={<Home />} />
        <Route path={`${routePrefix}/bbb`} element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SubRoutes;
