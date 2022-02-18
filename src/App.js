import Navigation from './navigation'
import { Router } from 'react-router-dom';
import history from './utils/history'

function App() {
  return (
    <Router history={history}>
      <Navigation />
    </Router>
  );
}

export default App;