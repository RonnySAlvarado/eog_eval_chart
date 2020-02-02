import React from 'react';
import { render } from '@testing-library/react';

import Linegraph from '../components/Linegraph';

const data = [
  {
    at: Date.now() - 1000 * 60 * 15,
    value: 200,
  },
  {
    at: Date.now() - 1000 * 60 * 15,
    value: 150,
  },
  {
    at: Date.now(),
    value: 100,
  },
];

describe('<Linegraph />', () => {
  it('Matches snapshot', () => {
    const graph = render(<Linegraph data={data} />);
    expect(graph).toMatchSnapshot();
  });
});
