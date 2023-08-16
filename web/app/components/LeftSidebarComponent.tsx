/*
  Left Sidebar  with a filters takes 25%
*/
export function LeftSidebarComponent() {
  return (
    <div className="container mx-auto px-4 object-left">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center p-4">
          <span className="font-semibold text-xl tracking-tight">Filters</span>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Clear All</span>
          </button>
        </div>
        <div className="flex flex-col p-4">
          {/* <li>
            <div id="CategoryFacet"></div>
          </li>
          <li>
            <div id="TagsFacet"></div>
          </li>
          <li>
            <div id="RatingFacet"></div>
          </li>
          <li>
            <div id="Address/CityFacet"></div>
          </li>
          <li>
            <div id="Address/StateProvinceFacet"></div>
          </li>
          <li>
            <div id="Address/PostalCodeFacet"></div>
          </li>
          <li>
            <div id="Address/CountryFacet"></div>
          </li>
          <li>
            <div id="Rooms/TypeFacet"></div>
          </li>
          <li>
            <div id="Rooms/BaseRateFacet"></div>
          </li>
          <li>
            <div id="Rooms/BedOptionsFacet"></div>
          </li>
          <li>
            <div id="Rooms/SleepsCountFacet"></div>
          </li>
          <li>
            <div id="Rooms/TagsFacet"></div>
          </li> */}
        </div>
      </div>
    </div>
  );
}
