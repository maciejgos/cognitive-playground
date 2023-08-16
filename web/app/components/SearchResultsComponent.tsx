/*
  Results search object structure it should have field with a name of hotel and price
*/

interface SearchResult {
  hotel: string;
  price: number;
}

/*
 Component to display search results in the center of UI
*/
import React from 'react';

interface SearchResult {
  hotel: string;
  price: number;
}

interface Props {
  results: SearchResult[];
}

export function SearchResultsComponent({ results }: Props) {
  return (
    <div className="container mx-auto px-4 object-right">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center p-4">
          <span className="font-semibold text-xl tracking-tight">
            Search Results
          </span>
          <span>Sort By</span>
        </div>
        {results.map((result, index) => (
          <div className="flex flex-row justify-between items-center p-4" key={index}>
            <span className="font-semibold text-xl tracking-tight">
              {result.hotel}
            </span>
            <span>{result.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
