import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import LogInForm from './components/LogInForm/LogInForm';
import { createContext, useState } from 'react';
import NewPost from './components/NewPost/NewPost';
import MyPost from './components/MyPost/MyPost';

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    img: '',
    message: ''
  })
  return (
  <UserContext.Provider value={[user, setUser]}>
    <h2>{user.name}</h2>
    <h2>{user.email}</h2>
    <img src={user.img} alt="" />
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/my-posts">
          <MyPost/>
        </Route>
        <Route path="/new-post">
          <NewPost/>
        </Route>
        <Route path="/login">
          <LogInForm/>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
