import { EvidenceSearch } from './components/EvidenceSearch';
import { ShowEvidenceResults } from './components/ShowEvidenceResults';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={EvidenceSearch} />
        <Route path='/show-results' component={ShowEvidenceResults} />
      </div>
    </Router>
  );
}

export default App;