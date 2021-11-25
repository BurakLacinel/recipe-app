// 4 sayfa oluşturmak istiyoruz ama bu sayfaların her biri, bir kaç "component"a sahip olabilir. Karışıklık olmaması için "pages" klasörü içinde, her bir sayfayı farklı klasör'ler içerisinde ayırıyoruz.

// "Navbar.js"i, "pages"yerine, "components" adlı klasörde oluşturuyoruz. Çünkü "Navbar" bir sayfaya özel değil. Tüm sayfalarda görünecek.

import { BrowserRouter, Switch, Route } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
