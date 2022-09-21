import React from "react";
import Select from "react-select";

import { useSort } from "./use-sort";

export default function Sort() {
  const optionsMap = {
    драма: {
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
    боевик: {
      value: "боевик",
      label: "боевик",
    },
    детектив: {
      value: "детектив",
      label: "детектив",
    },
    триллер: {
      value: "триллер",
      label: "триллер",
    },
    фэнтези: {
      value: "фэнтези",
      label: "фэнтези",
    },
    фантастика: {
      value: "фантастика",
      label: "фантастика",
    },
  };

  const options = Object.values(optionsMap);

  const [sort, handleSort] = useSort();

  return (
    <>
      {" "}
      <Select
        options={options}
        placeholder="Выбрать жанр"
        isClearable
        isSearchable={false}
        value={optionsMap[sort] || ""}
        onChange={handleSort}
      />
    </>
  );
}
