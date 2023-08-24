/*
    Convert below JSON to TypeScript type
      {
      "hotel_name": "Arcadia Resort & Restaurant",
      "description": "The largest year-round resort in the area offering more of everything for your vacation – at the best value! What can you enjoy while at the resort, aside from the mile-long sandy beaches of the lake? Check out our activities sure to excite both young and young-at-heart guests. We have it all, including being named “Property of the Year” and a “Top Ten Resort” by top publications.",
      "brochure_title": "Welcome to Arcadia Resort & Restaurant",
      "brochure_description": "Get ready for a vacation you won't forget at Arcadia Resort & Restaurant, the best value resort in the area. With endless fun activities and a stunning location, you'll have everything you need for an amazing stay!",
      "near_area_title": "Explore the Surrounding Area",
      "near_area_description": "Not only is Arcadia Resort & Restaurant an incredible destination, but the surrounding area is also filled with charm and attractions. Take a look at what you can discover just moments away from the resort.",
      "attractions": [
        {
          "name": "Lakeview Amusement Park",
          "description": "Only a short drive from the resort, Lakeview Amusement Park offers thrilling rides, delicious food, and endless entertainment for the whole family. Don't miss the giant roller coaster!",
          "fun_fact": "Did you know? Lakeview Amusement Park is home to the world's largest cotton candy!"
        },
        {
          "name": "Hiking Trails of Green Hills",
          "description": "Nature lovers rejoice! Just a few steps from the resort, you'll find the scenic hiking trails of Green Hills. Get lost in the beauty of nature and enjoy breathtaking views along the way.",
          "fun_fact": "Did you know? Green Hills is home to a rare species of wildflowers that can only be found in this area!"
        },
        {
          "name": "Historic Downtown Street",
          "description": "Step back in time as you stroll through the charming streets of Historic Downtown. Explore unique shops, dine in cozy restaurants, and admire the beautiful architecture of the past.",
          "fun_fact": "Did you know? The oldest building in Historic Downtown Street dates back to the 1800s!"
        }
      ]
    }
*/

type Brochure = {
    hotel_name: string;
    description: string;
    brochure_title: string;
    brochure_description: string;
    near_area_title: string;
    near_area_description: string;
    attractions: Attraction[];
}

type Attraction = {
    name: string;
    description: string;
    fun_fact: string;
}