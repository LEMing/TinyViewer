import React, {ReactNode} from 'react';
import './Label.scss';

interface LabelProps {
    children: ReactNode;
}
const Label = (props: LabelProps) => {
    const {children} = props;
    return (
        <p className="Label">
            {children}
        </p>
    )
}

export default Label;
