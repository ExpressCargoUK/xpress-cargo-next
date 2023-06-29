import { navMenuData } from "../../../data";
import MenuItems from "./MenuItems";

const NavMenu = () => {
  return (
    <nav>
      <ul className="menus">
        {navMenuData.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
