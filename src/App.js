import Topbar from "./components/topbar/Topbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Homepage from "./pages/home/Homepage";
import Contact from "./pages/contact/Contact";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import SinglePost from "./pages/singlepost/SinglePost";
import Register from "./pages/register/Register";


const App =()=> {
  return (
    <>
      <Topbar />
        <Router>
          <Switch>
            <Route exact path="/" component={()=><Homepage />} />
            <Route exact path="/post/:id" component={()=><SinglePost />} />
            <Route exact path="/contact" component={()=><Contact />} />
            <Route exact path="/write" component={()=><Write />} />
            <Route exact path="/login" component={()=><Login />} />
            <Route exact path="/register" component={()=><Register />} />
          </Switch>
        </Router>
        <Footer />
   </>
  );
}

export default App;
