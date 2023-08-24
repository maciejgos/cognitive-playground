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