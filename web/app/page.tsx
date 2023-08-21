/*
  1. We should have a main content with a search bar and a list of items
  2. On the bottom we should have a footer
  3. Selected item should be open in a modal
  4. In modal window we should have a button to close it and 5 predefined buttons on right side
*/
"use client";

import { useEffect, useState } from "react";
import { LeftSidebarComponent } from "./components/LeftSidebarComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { SearchResultsComponent } from "./components/SearchResultsComponent";

/*
  Call api endpoint /api/search to get data and pass it to SearchResultsComponent
  Function should use client side fetch to get data
*/

export default function Home() {
  // const [ searchResults, setSearchResults ] = useState([])

  // useEffect(() => {
  //   const getSearchResults = () => {
  //     fetch('/api/search')
  //       .then(res =>  {
  //         const data = res.json()
  //         console.log(data)
  //         return data
  //       })
  //       .then(data => setSearchResults(data))
  //   }
  //   getSearchResults()
  // }, [])

  /*
    1. Call api endpoint /api/search to get data and pass it from NavbarComponent to SearchResultsComponent
    2. Use use query string to pass search value to api endpoint
    3. Execute search on enter key press
    4. Execute search on magnifying glass icon click
   */

  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    console.log("search");
    console.log(searchInput);

    fetch("/api/search?searchInput=" + searchInput)
      .then((res) => {
        const data = res.json();
        console.log(data);
        return data;
      })
      .then((data) => setSearchResults(data));
  }

  return (
    <main>
      <NavbarComponent handleSearch={handleSearch} setSearchInput={setSearchInput} searchInput={searchInput} />
      <div className="grid grid-flow-col-dense grid-cols-3">
        <div className="bg-white-200">
          <LeftSidebarComponent />
        </div>
        <div className="col-span-2">
          {/* Use props to pass value to component */}
          <SearchResultsComponent results={searchResults} />
        </div>
      </div>
    </main>
  );
}
