import {connect} from 'react-redux';

import Todos from './components/Todos.jsx';
import {getTodos} from '../logic/reducers/root';

const mapStateToProps = state => ({todos: getTodos(state)});

export default connect(mapStateToProps)(Todos);
