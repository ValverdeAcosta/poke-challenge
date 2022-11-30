import { buttonProps } from "../../common/interfaces/ui-interfaces";

export function useChangePage(props: buttonProps) {
    if (props.img?.includes("previous") && props.page > 0) {
        props.setPage(props.page - 1)
    }
    if (props.img?.includes("next") && props.page < 150) {
        props.setPage(props.page + 1)
    }
}