import React from 'react';
import clsx from 'clsx';
import { Link as MaterialUILink, LinkProps } from '@material-ui/core';
import { useLinkStyles } from './useLinkStyles';

export const Link: React.FC<LinkProps> = ({
    className, ...restProps
}) => {
    const cssClasses = useLinkStyles();

    return (
        <MaterialUILink className={clsx(cssClasses.link, className)} {...restProps} />
    );
};

Link.defaultProps = {
    color: 'inherit',
}
