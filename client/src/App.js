import "./App.css";
import Navigation from "./Components/NavBar/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import ProductDetails from "./Components/Products/ProductDetails";
import AllProducts from "./Components/Products/AllProducts";
import ShopCart from "./Components/ShopCart/ShopCart";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/product/:name/:id">
                        <Navigation></Navigation>
                        <ProductDetails></ProductDetails>
                    </Route>
                    <Route exact path="/all/products/:category">
                        <Navigation></Navigation>
                        <AllProducts></AllProducts>
                    </Route>
                    <Route exact path="/cart">
                        <Navigation></Navigation>
                        <ShopCart></ShopCart>
                    </Route>
                    <Route exact path="/">
                        <Navigation></Navigation>
                        <LandingPage></LandingPage>
                        <Categories></Categories>
                        <Products></Products>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
