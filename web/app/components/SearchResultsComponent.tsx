/*
  Results search object structure it should have field with a name of hotel and price
*/

interface ResultsProps {
  handleGenerate: (hotel: AzureSearchResult) => void;
  results: AzureSearchResult[];
}

/*
 Component to display search results in the center of UI
*/
import React from 'react';

export function SearchResultsComponent({ handleGenerate, results }: ResultsProps) {

  return (
    <div className="container mx-auto px-4 object-right">
      <div className="flex flex-col">
        {results.map((result, index) => (
          /* Display in header name of hotel and below description. On right side it should be a button with Generate label */
          <div key={index} className="flex flex-row justify-between items-center p-4">
            <div className="flex flex-col">
              <span className="font-semibold text-xl tracking-tight">
                {result.HotelName}
              </span>
              <span className="font-light text-l tracking-tight mt-2">
                {result.Description}
              </span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
              console.log(result);
              handleGenerate(result);
            }}>
              Generate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
