import { useState } from "react";

export function SearchBar(items, searchBar) {
    const [filteredItems, setFilteredItems] = useState(items);
    setFilteredItems(
        items.filter((item) => item.name.match(new RegExp(searchBar, "i")))
    );

    return filteredItems;
}
