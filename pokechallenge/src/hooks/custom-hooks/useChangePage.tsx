import { buttonProps } from "../../common/interfaces/ui-interfaces";

export function useChangePage({ img, page, setPage }: buttonProps) {
    if (img?.includes("previous") && page > 0) {
        setPage(page - 1)
    }
    if (img?.includes("next") && page < 150) {
        setPage(page + 1)
    }
}