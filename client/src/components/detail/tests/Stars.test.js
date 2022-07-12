import renderer from 'react-test-renderer';
import Title from '../Title';

it('renders without crashing', () => {
  shallow(<Title />);
});
