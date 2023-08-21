/*
  Results search object structure it should have field with a name of hotel and price
*/

type AzureSearchResult = {
  HotelId: string;
  HotelName: string;
  Description: string;
  Category: string;
  Tags: string[];
  ParkingIncluded: boolean;
  LastRenovationDate: string;
  Rating: number;
  Location: {
    type: string;
    coordinates: number[];
    crs: {
      type: string;
      properties: {
        name: string;
      };
    };
  };
  Rooms: {
    RoomId: string;
    RoomName: string;
    Description: string;
    DailyRate: number;
    RoomType: string;
    BedOptions: string;
    SleepsCount: number;
    SmokingAllowed: boolean;
    Tags: string[];
  }[];
  pii_entities: never[];
};

/*
 Component to display search results in the center of UI
*/
import React from 'react';

interface Props {
  results: AzureSearchResult[];
}

export function SearchResultsComponent({ results }: Props) {
  return (
    <div className="container mx-auto px-4 object-right">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center p-4">
          <span className="font-semibold text-xl tracking-tight">
            Hotels
          </span>
        </div>
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Generate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
