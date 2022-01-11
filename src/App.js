
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import { ThemeProvider } from './Context/ThemeContext'


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
