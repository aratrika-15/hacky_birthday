import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BookDetails from './components/BookDetails';
import MyPage from './components/MyPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/bookdetails" component={BookDetails}/>
    <Route path="/mypage" component={MyPage}/>
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
