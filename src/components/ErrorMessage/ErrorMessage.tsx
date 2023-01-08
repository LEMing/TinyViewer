import Label from "../Label";
import './ErrorMessage.scss';

const ErrorMessage = ({msg, debugDetails}:{msg: string, debugDetails?: string}) => {
    console.debug(debugDetails);
    return <div className="ErrorMessage__layout">
        <Label>{msg}</Label>
    </div>
}

export default ErrorMessage;
