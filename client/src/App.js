import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBootstrap from './components/Navbar/NavbarBootstrap';
import AuthRoute from './components/AuthRoute/AuthRoute';
import UserForm from './components/UserForm/UserForm';
import MenuPage from './components/MenuPage/MenuPage';
import Footer from './components/Footer/Footer';
import NewCheck from './components/NewCheck/NewCheck';

function App() {
  return (
    <div className="App">
      <NavbarBootstrap />
      <div className="flex">
        <Routes>
          <Route
            path="/"
            element={(
              <AuthRoute>
                <MenuPage />
              </AuthRoute>
            )}
          />

          <Route
            path="/newCheck"
            element={(
              <NewCheck />
            )}
          />

          <Route
            path="/auth"
            element={(
              <AuthRoute>
                <UserForm />
              </AuthRoute>
            )}
          />

          <Route
            path="*"
            element={(
              <div className="error">
                <h2>Ошибочка, нет такой страницы</h2>
                <img src="https://gif.cmtt.space/3/club/1f/b8/ae/ea74f32bd5e2d2.png" alt="error" />
              </div>
            )}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
