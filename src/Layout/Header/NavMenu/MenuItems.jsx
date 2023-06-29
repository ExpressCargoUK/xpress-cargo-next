import { useState, useEffect, useRef } from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";
import useWindowSize from "../../../hooks/useWindowSize";
import Dropdown from "./Dropdown";
import Link from "next/link";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const { width } = useWindowSize();
  const scrollPosition = useScrollPosition();

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (typeof window !== "undefined") {
      window.innerWidth > 960 && setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (typeof window !== "undefined") {
      window.innerWidth > 960 && setDropdown(false);
    }
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            style={{ color: scrollPosition > 50 ? "#000" : "#fff" }}
          >
            {width < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <Link
                href={items.url}
                // style={{ color: scrollPosition > 50 ? "#000" : "#fff" }}
              >
                {items.title}
              </Link>
            )}

            {depthLevel > 0 && width < 960 ? null : depthLevel > 0 &&
              width > 960 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            // style={{ color: scrollPosition > 50 ? "#000" : "#fff" }}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link
          href={items.url}
          style={{
            color: scrollPosition > 50 ? "#000" : "#fff",
          }}
        >
          {items.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
