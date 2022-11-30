import { listProps } from "../../../../common/interfaces/ui-interfaces";
import Text from '../../atoms/Text/Text'
import "./List.scss"

const List = (props: listProps) => {
    return (
        <ul className="list__container">
            {props.elements?.results.map((item) => {
                return <li key={item.name} ><Text message={item.name} type={"xs"} /></li>;
            })}
        </ul>
    )
}

export default List;