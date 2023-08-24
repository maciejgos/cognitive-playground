/*
  1. We should have a main content with a search bar and a list of items
  2. On the bottom we should have a footer
  3. Selected item should be open in a modal
  4. In modal window we should have a button to close it and 5 predefined buttons on right side
*/
"use client";

import { useEffect, useState } from "react";
import { NavbarComponent } from "./components/NavbarComponent";
import { SearchResultsComponent } from "./components/SearchResultsComponent";
import { useRouter } from "next/navigation";
import Modal from "react-modal";

/*
  Call api endpoint /api/search to get data and pass it to SearchResultsComponent
  Function should use client side fetch to get data
*/

export default function Home() {
  /*
    1. Call api endpoint /api/search to get data and pass it from NavbarComponent to SearchResultsComponent
    2. Use use query string to pass search value to api endpoint
    3. Execute search on enter key press
    4. Execute search on magnifying glass icon click
   */

  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [brochure, setBrochure] = useState<Brochure | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const router = useRouter();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  function handleGenerate(hotel: AzureSearchResult) {
    console.log("generate");
    console.log(hotel);

    fetch("/api/brochure", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotel),
    })
      .then((res) => {
        const data = res.json();
        console.log(data);
        return data;
      })
      .then((data) => {
        setBrochure(data);
        handleOpenModal();
        // router.push("/brochure");
      });
  }

  return (
    <main>
      <NavbarComponent
        handleSearch={handleSearch}
        setSearchInput={setSearchInput}
        searchInput={searchInput}
      />
      {/* Use fullscreen to display search results */}
      <div className="row">
        {/* Use props to pass value to component */}
        {/* On button click popup window should be displayed with a generated brochure and executed POST API call to /api/brochure */}
        {/* Use useState hook to store selected hotel */}
        <SearchResultsComponent
          results={searchResults}
          handleGenerate={handleGenerate}
        />
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
          <h1>{brochure?.hotel_name}</h1>
          <p>{brochure?.description}</p>
          <h2>Brochure Title</h2>
          <p>{brochure?.brochure_title}</p>
          <h2>Brochure Description</h2>
          <p>{brochure?.brochure_description}</p>
          <h2>Near Area Title</h2>
          <p>{brochure?.near_area_title}</p>
          <h2>Near Area Description</h2>
          <p>{brochure?.near_area_description}</p>
          <h2>Attractions</h2>
          {brochure?.attractions.map((attraction) => (
            <div key={attraction.name}>
              <h4>{attraction.name}</h4>
              <p>{attraction.description}</p>
              <p>Fun fact: {attraction.fun_fact}</p>
            </div>
          ))}
        </Modal>
      </div>
    </main>
  );
}
