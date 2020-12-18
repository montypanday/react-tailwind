import React, { Fragment } from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const AllButtons = (args) => (
  <Fragment>
    <p className="mt-4 mb-2">Primary Buttons</p>
    <Button type="primary">Primary</Button>
    <Button type="primary" size="sm">Primary</Button>
    <Button type="primary" loading={true}>Primary</Button>
    <Button type="primary" size="sm" loading={true}>Loading</Button>
    <Button type="primary" size="lg">Primary</Button>
    <Button type="primary" size="lg" loading={true}>Loading</Button>

    <hr />
    <p className="mt-4 mb-2">Secondary Buttons</p>
    <Button>Secondary</Button>
    <Button loading={true}>Loading</Button>
    <Button size="sm">Secondary</Button>
    <Button size="lg">Secondary</Button>
    <Button size="lg" loading={true}>Loading</Button>
    <Button size="sm" loading={true}>Loading</Button>
  </Fragment>
);

AllButtons.storyName = 'all buttons';