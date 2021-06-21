import 'bootstrap/dist/css/bootstrap.min.css';
import CourseHome from './components/CourseHome/CourseHome/CourseHome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import WarmupPuzzles from './components/WarmupPuzzles/WarmupPuzzles/WarmupPuzzles';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/' component={CourseHome} />

          <Route path='/warmup-puzzles' component={WarmupPuzzles} />

          <Route path='*' component={NotFound} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
