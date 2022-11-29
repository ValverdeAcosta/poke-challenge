import { listProps } from "../../../../common/interfaces/ui-interfaces";
import Text from '../../atoms/Text/Text'
import "./List.scss"

const List = (props: listProps) => {
    return (
        <>
            {props.elements.map((item) => {
                return <li key={item}><Text message={item} type={"md"} /></li>;
            })}
        </>
    )
}

export default List;