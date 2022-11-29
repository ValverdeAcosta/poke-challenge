import { buttonProps } from "../../common/interfaces/ui-interfaces";

export function hasImg(props: buttonProps) {
    if (props.img !== '') {
        return <img src={props.img} />;
    }
    return <button>{props.message}</button>;
}