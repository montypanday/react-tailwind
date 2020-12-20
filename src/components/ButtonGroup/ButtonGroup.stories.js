import React, { Fragment } from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

export default {
    title: 'Design System/Button Group',
    component: ButtonGroup,
};


export const SimpleButtonGroup = (args) => (
    <Fragment>
        <p className="mt-4 mb-2">Simple Button Group</p>
        <ButtonGroup>
            <Button type="plain">Primary</Button>
            <Button type="plain">Primary</Button>
        </ButtonGroup>
        <p className="mt-4 mb-2">Small Button Group</p>
        <ButtonGroup size="sm">
            <Button type="plain">Primary</Button>
            <Button type="plain">Primary</Button>
        </ButtonGroup>
        <p className="mt-4 mb-2">Represent Selection</p>
        <ButtonGroup size="sm">
            <Button type="primary">Primary</Button>
            <Button type="plain">Primary</Button>
        </ButtonGroup>
        <p className="mt-4 mb-2">Large Button Group Selection</p>
        <ButtonGroup size="lg">
            <Button type="primary">Primary</Button>
            <Button type="plain">Primary</Button>
        </ButtonGroup>
    </Fragment>
);

SimpleButtonGroup.storyName = 'simple';