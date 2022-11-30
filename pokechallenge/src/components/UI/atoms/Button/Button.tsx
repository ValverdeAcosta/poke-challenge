import { buttonProps } from "../../../../common/interfaces/ui-interfaces";
import { useHasImg } from "../../../../hooks/custom-hooks/useHasImg";
import "./Button.scss"

const Button = (props: buttonProps) => {
    return (
        useHasImg(props)
    )
}

export default Button;