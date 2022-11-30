import { textProps } from "../../../../common/interfaces/ui-interfaces";
import "./Text.scss"

const Text = ({ message, type }: textProps) => {
    return (
        <p className={type}>{message}</p>
    )
}

export default Text;