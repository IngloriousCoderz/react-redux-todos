import {connect} from 'react-redux';

import Form from './components/Form.jsx';
import {getText} from '../logic/reducers/root';
import {setText, addTodo} from '../logic/actions';

const mapStateToProps = state => ({text: getText(state)});

export default connect(mapStateToProps, {setText, addTodo})(Form);
