import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import LogInForm from './components/LogInForm/LogInForm';
import NewPost from './components/NewPost/NewPost';
import MyPost from './components/MyPost/MyPost';
import UpdateForm from './components/UpdateForm/UpdateForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LogInForm}/>
          <PrivateRoute exact path="/my-posts" component={MyPost}/>
          <PrivateRoute path="/new-post" component={NewPost}/>
          <PrivateRoute path="/my-posts/:id" component={UpdateForm}/>
      </Switch>
    </Router>
  );
}

export default App;



{/* <Route path="/my-posts/:id" component={UpdateForm}>
          <UpdateForm/>
        </Route>
        <PrivateRoute path="/my-posts">
          <MyPost/>
        </PrivateRoute>
        <Route path="/new-post">
          <NewPost/>
        </Route>
        <Route path="/login">
          <LogInForm/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route> */}
