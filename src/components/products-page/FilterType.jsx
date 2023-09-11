import { useState, useRef, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { defaultFilters } from "../../constants";

const FILTER_OPTIONS = {};

defaultFilters.forEach((filter) => {
  FILTER_OPTIONS[filter.type] = true;
});

FILTER_OPTIONS.all = true;

const FilterType = ({ getFilterOptions }) => {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [options, setOptions] = useState(FILTER_OPTIONS);
  const filterMenuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (filterMenuRef.current && !filterMenuRef.current.contains(e.target)) {
      setOpenFilterMenu(false);
    }
  };

  useEffect(() => {
    getFilterOptions(options);
  }, [options]);

  useEffect(() => {
    // Attach event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleFilterMenu = () => {
    setOpenFilterMenu(true);
  };

  const handleClickOptions = (opt) => {
    if (opt === "all") {
      const updateOptions = { ...options };
      for (const key in updateOptions) {
        updateOptions[key] = !options.all;
      }
      setOptions(updateOptions);
    } else {
      setOptions((prevOptions) => {
        if (prevOptions[opt])
          return {
            ...prevOptions,
            [opt]: !prevOptions[opt],
            all: false,
          };
        else {
          const updateOptions = { ...options };
          updateOptions[opt] = !options[opt];
          for (const key in updateOptions) {
            if (key === "all") break;
            if (!updateOptions[key]) {
              console.log("yeah", updateOptions);
              return updateOptions;
            }
          }
          console.log("brr");
          return {
            ...updateOptions,
            all: true,
          };
        }
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center px-2 border-2 rounded-lg cursor-pointer border-grayy">
      <div className="flex gap-2 cursor-pointer" onClick={toggleFilterMenu}>
        <div>Filter By</div>
        <div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <div
        ref={filterMenuRef}
        className={`${
          openFilterMenu ? "flex" : "hidden"
        } absolute bg-white shadow-lg top-[120%] left-0 w-[200px] z-10 p-3  items-start justify-center flex-col max-h-[210px] rounded-md`}
      >
        <ul className="w-full">
          <li
            className="flex items-center justify-start w-full px-2 rounded-sm hover:bg-grayy"
            onClick={() => handleClickOptions("all")}
          >
            <input
              type="checkbox"
              checked={options.all}
              onChange={() => {}}
              className="relative w-4 h-4 mt-1 bg-white border-2 rounded-sm appearance-none border-grayy shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-primary checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
            />
            <div className="pl-2">all</div>
          </li>
          <hr className="mt-1" />
          {defaultFilters.map((item) => (
            <li
              className="flex items-center justify-start w-full px-2 rounded-sm hover:bg-grayy"
              key={item.type}
              onClick={() => handleClickOptions(item.type)}
            >
              <input
                checked={options[item.type]}
                onChange={() => {}}
                type="checkbox"
                className="relative w-4 h-4 mt-1 bg-white border-2 rounded-sm appearance-none border-grayy shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-primary checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
              />
              <div className="pl-2">{item.type}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterType;
