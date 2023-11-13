import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { PageNotFound } from "./pages/PageNotFound";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/Home";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
