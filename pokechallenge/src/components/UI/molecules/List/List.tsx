import { listProps } from "../../../../common/interfaces/ui-interfaces";
import Text from '../../atoms/Text/Text'
import "./List.scss"

const setNewPage = (item: any, event: any) => {
    const url = item.url.split("/");
    const endpointNumber = parseInt(url[url.length - 2]);
    event(endpointNumber - 1);
}

const List = (props: listProps) => {
    return (
        <ul className="list__container">
            {props.elements?.results.map((item) => {
                return <li key={item.name} onClick={() => setNewPage(item, props.setPage)} ><Text message={item.name} type={"xs"} /></li>;
            })}
        </ul>
    )
}

export default List;