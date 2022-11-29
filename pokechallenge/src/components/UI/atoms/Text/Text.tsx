import { textProps } from "../../../../common/interfaces/ui-interfaces";
import "./Text.scss"

const Text = (props: textProps) => {
    return (
        <h1 className={props.type} >{props.message}</h1>
    )
}

export default Text;