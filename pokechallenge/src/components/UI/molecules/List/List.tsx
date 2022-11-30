import { POKEBALL_LOGO } from "../../../../common/constants/literals";
import { listProps, Result } from "../../../../common/interfaces/ui-interfaces";
import Text from '../../atoms/Text/Text'
import "./List.scss"

const setNewPage = (item: Result, event: React.Dispatch<React.SetStateAction<number>>) => {
    const url = item.url.split("/");
    const endpointNumber = parseInt(url[url.length - 2]);
    event(endpointNumber - 1);
}

const List = ({ elements, setPage }: listProps) => {
    return (
        <ul className="list__container">
            {elements?.results.map((item) => {
                return <div><li key={item.name} onClick={() => setNewPage(item, setPage)} className="list_element" ><img src={POKEBALL_LOGO} width={20} height={20} /><Text message={item.name.charAt(0).toLocaleUpperCase() + item.name.slice(1)} type={"xs"} /></li></div>;
            })}
        </ul>
    )
}

export default List;