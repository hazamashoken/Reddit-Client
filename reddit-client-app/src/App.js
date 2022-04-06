import './App.css';
import Header from './features/Header/Header';
import Home from './features/Home/Home';

function App() {
  return (
  <>
    <Header />
    <main>
      <Home />
    </main>
    <aside>
      {/* <Subbreddits /> */}
    </aside>
  </>
  );
}

export default App;
