import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });

// stub para ignorar cuando incluimos css con css loader en nuestros componentes

const stubCSS = '';

export default stubCSS;