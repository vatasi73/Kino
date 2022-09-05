import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import { setSort } from "../../store/search/searchAction";
import { selectSort } from "../../store/search/searchSelector";

export default function Sort() {
  const optionsMap = {
    drama: {
      value: "драма",
      label: "драма",
    },
    комедия: {
      value: "комедия",
      label: "комедия",
    },
    приключения: {
      value: "приключения",
      label: "приключения",
    },
  };
  const options = Object.values(optionsMap);
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const handleSelect = (genre) => {
    dispatch(setSort(genre?.value || ""));
  };

  return (
    <>
      {" "}
      <Select
        options={options}
        placeholder="Выбрать жанр"
        isClearable
        isSearchable={false}
        value={optionsMap[sort] || ""}
        onChange={handleSelect}
      />
    </>
  );
}
