/*
    Load data from useState 
     const [brochure, setBrochure] = useState<Brochure | null>(null);
*/

"use client";

import { useState } from "react";

export default function Page() {
  const [brochure] = useState<Brochure>();

  return (
    <div className="row">
      <div>
        <h1>Brochure</h1>
        <p>{brochure?.hotel_name}</p>
        <p>{brochure?.description}</p>
        <p>{brochure?.brochure_title}</p>
        <p>{brochure?.brochure_description}</p>
        <p>{brochure?.near_area_title}</p>
        <p>{brochure?.near_area_description}</p>
        <p>Attractions</p>
        {brochure?.attractions.map((attraction, index) => (
          <div key={index}>
            <p>{attraction.name}</p>
            <p>{attraction.description}</p>
            <p>{attraction.fun_fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
