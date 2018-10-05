import React from 'react';
import ScrollInto from './index';
import renderer from 'react-test-renderer';

test('ScrollInto renders with children', () => {
  const component = renderer.create(
    <ScrollInto selector="test">
      <div>Some child content</div>
    </ScrollInto>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ScrollInto renders with custom className', () => {
  const component = renderer.create(
    <ScrollInto selector="test" className="custom-class">
      <div>Some child content</div>
    </ScrollInto>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ScrollInto renders with custom styles', () => {
  const component = renderer.create(
    <ScrollInto selector="test" style={{ display: 'inline' }}>
      <div>Some child content</div>
    </ScrollInto>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('ScrollInto renders with custom styles and className', () => {
  const component = renderer.create(
    <ScrollInto
      selector="test"
      style={{ display: 'inline', color: 'red' }}
      className="pinky"
    >
      <div>Some child content</div>
    </ScrollInto>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
