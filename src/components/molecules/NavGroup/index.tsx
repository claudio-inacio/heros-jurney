
import { INavGroup } from "./NavGroup.interface";
import NavItem from "@/components/atoms/NavItem";


type NavItemsArray = INavGroup[]

const NavGroup: React.FC<{items: NavItemsArray}> = ({items}) => {
    return (
    <div>
        <ul className="space-x-2 flex">
            {items.map((navItem: INavGroup) => {
                return (<NavItem key={navItem.name} name={navItem.name} route={navItem.route} />)
            })}
        </ul>            
    </div>
    )
}


export default NavGroup;