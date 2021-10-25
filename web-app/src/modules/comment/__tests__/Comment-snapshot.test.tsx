import React from 'react';
import renderer from 'react-test-renderer';

import Comments from '../components/Comments';

it('renders correctly ', () => {
  const tree = renderer.create(<Comments />).toJSON();
  expect(tree).toMatchSnapshot();
});