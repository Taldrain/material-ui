// @flow

import * as React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from '../test-utils';
import CardActions from './CardActions';

describe('<CardActions />', () => {
  let shallow;
  let classes;

  before(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<CardActions />);
  });

  it('should render a div with the root class', () => {
    const wrapper = shallow(<CardActions />);
    assert.strictEqual(wrapper.name(), 'div');
    assert.strictEqual(wrapper.hasClass(classes.root), true);
  });

  it('should pass the actionSpacing class to children', () => {
    const child3 = false;
    const wrapper = shallow(
      <CardActions>
        <div id="child1" />
        <div id="child2" />
        {child3 && <div id="child3" />}
      </CardActions>,
    );

    assert.strictEqual(wrapper.find('#child1').hasClass(classes.actionSpacing), true);
    assert.strictEqual(wrapper.find('#child2').hasClass(classes.actionSpacing), true);
  });

  it('should not pass the actionSpacing class to children', () => {
    const wrapper = shallow(
      <CardActions disableActionSpacing>
        <div id="child1" />
        <div id="child2" />
      </CardActions>,
    );

    assert.strictEqual(wrapper.find('#child1').hasClass(classes.actionSpacing), false);
    assert.strictEqual(wrapper.find('#child2').hasClass(classes.actionSpacing), false);
  });
});
