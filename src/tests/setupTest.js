import Emzyme, {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Emzyme.configure({
  adapter: new Adapter()
})