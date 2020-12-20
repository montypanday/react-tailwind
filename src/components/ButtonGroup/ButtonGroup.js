import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import classNames from 'classnames';

export function ButtonGroup({
    ...props
}) {

    const childrenWithProps = React.Children.map(props.children, (child, index) => {
        // checking isValidElement is the safe way and avoids a typescript error too
        if (React.isValidElement(child)) {
            let childProps = { // default props for every child
                margin: ''
            }
            if (props.type !== Button.defaultProps.type) {
                childProps.type = props.type;
            }
            if (props.size !== Button.defaultProps.size) {
                childProps.size = props.size;
            }
            let rounded = [];
            if (typeof props.children[index + 1] !== "undefined") {
                rounded.push('rounded-r-none');
            } else {
                console.log(`rounded-r-${props.rounded}`);
                rounded.push(`rounded-r-${props.rounded}`);
            }
            if (typeof props.children[index - 1] !== "undefined") {
                rounded.push('rounded-l-none');
            } else {
                console.log(`rounded-l-${props.rounded}`);
                rounded.push(`rounded-l-${props.rounded}`);
            }
            if (rounded.length > 0) {
                childProps.rounded = classNames(rounded);
            }
            return React.cloneElement(child, childProps);
        }
        return child;
    });

    return (
        <Fragment>
            {childrenWithProps}
        </Fragment>
    );
}

ButtonGroup.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'plain']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    rounded: PropTypes.oneOf(['sm', 'md', 'xl']),
};

ButtonGroup.defaultProps = {
    type: 'plain',
    size: 'md',
    rounded: 'md'
};
