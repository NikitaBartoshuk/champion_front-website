import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import Vacancies from "./pages/Vacancies/Vacancies";
import { Route, Routes} from 'react-router-dom'
import NavBar from "./common/NavBar/NavBar";
import Blog from "./pages/Blog/Blog";
import Personal from "src/pages/Personal/Personal";
import Shop from "./pages/Shop/Shop";
import {PAGES_PATHS} from "src/constants/path";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App() {
  return (
      <div>
          <NavBar />
          <Routes>
              <Route path={PAGES_PATHS.mainPage} element={<MainPage />} />
              <Route path={PAGES_PATHS.vacancies} element={<Vacancies />} />
              <Route path={PAGES_PATHS.blog} element={<Blog />} />
              <Route path={PAGES_PATHS.personal} element={<Personal />} />
              <Route path={PAGES_PATHS.shop} element={<Shop />} />
              <Route path={PAGES_PATHS.adminpanel} element={<AdminPanel />} />
          </Routes>
      </div>
  );
}

export default App;
