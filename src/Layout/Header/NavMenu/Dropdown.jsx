import useScrollPosition from "../../../hooks/useScrollPosition";
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  const scrollPosition = useScrollPosition();
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      <div
        style={{ background: scrollPosition > 50 ? "#fff" : "#000" }}
        className="menu_wrapper"
      >
        {submenus.map((submenu, index) => (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </div>
    </ul>
  );
};

export default Dropdown;
