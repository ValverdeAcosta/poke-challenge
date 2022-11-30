import { buttonProps } from "../../common/interfaces/ui-interfaces";
import { useChangePage } from "./useChangePage";

export function useHasImg(props: buttonProps) {
    if (props.img !== '') {
        return <img src={props.img} onClick={() => useChangePage(props)} width="30px" height="30px" />;
    }
    return <button onClick={() => useChangePage(props)}>{props.message}</button>;
}