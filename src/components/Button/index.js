import React from 'react';

import { Button } from './styles';

function ButtonCustom({ children, ...rest }) {
    return (
        <Button {...rest}>{children}</Button>
    );
}

export default ButtonCustom;