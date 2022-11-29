import { buttonProps } from "../../../../common/interfaces/ui-interfaces";
import { hasImg } from "../../../../hooks/custom-hooks/useHasImg";
import "./Button.scss"

const Button = (props: buttonProps) => {
    return (
        hasImg(props)
    )
}

export default Button;