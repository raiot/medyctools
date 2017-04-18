/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities

// const TestUtils = React.addons.TestUtils;
import React from 'react';
import {shallow} from 'enzyme';

import Main from 'components/Main';

describe('<Main/>', function () {
  it('- should render successfully', function () {
    expect(shallow(<Main/>).length).to.equal(1);
  });
});
