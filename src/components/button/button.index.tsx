import React from "react";

import { Wrapper } from "./button.style";

type Props = {
    text: string;
    callback: () => void;
}

const Button : React.FC<Props>  = ({text, callback}) => (
    <Wrapper onClick={callback}>
        {text}
    </Wrapper>
);


export default Button;