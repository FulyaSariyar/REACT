import logo from './logo.svg';
import './App.css';

const test = 34;
const isAuth = true;
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {1 + 1}
       <h4>{"Fulya".toUpperCase()}</h4>
       <h5>{test}</h5>
       <div>
        {
          isAuth ? <p>Kullanıcı Kayıtlı</p>
          : null

        }
       </div>
      </header>
    </div>
    
  );
}

export default App;
