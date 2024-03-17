// DestinationsSection.js
import React from 'react';
import DestinationCard from './DestinationCard';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <div className="container">
        <h2>Popular Destinations</h2>
        <div className="row">
          <div className="col-md-4">
            <DestinationCard
              image="https://welcomesaudi.com/uploads/0000/1/2021/07/23/23-new-jeddah-corniche-makkah-province.jpg"
              title="Jeddah Water Front"
              description="The Jeddah Corniche, also known as the Jeddah Waterfront, is a 30 km coastal resort area of the city of Jeddah, Saudi Arabia. Located along the Red Sea, the corniche features a coastal road, recreation areas, pavilions and large-scale civic sculptures."
            />
          </div>
          <div className="col-md-4">
            <DestinationCard
              image="https://www.visitsaudi.com/content/dam/articles/al-balad-street-food-crawl/al-balad-street-food-crawl.jpg"
              title="Al-Balad"
              description="Al-Balad, also known as Jeddah Historic District, is the historical area of Jeddah, the second largest city of Saudi Arabia. Al-Balad can literally be translated to 'The Town.' Al-Balad is the historic center of the City of Jeddah."
            />
          </div>
          <div className="col-md-4">
            <DestinationCard
              image="https://resizer.wafyapp.com/?source=https://prod-wafy-api.s3.eu-central-1.amazonaws.com/images/articles/708-20201129225504-5043205.jpg&width=900"
              title="King Fahd's Fountain"
              description="King Fahd's Fountain, also known as the Jeddah Fountain, is in Jeddah, Saudi Arabia. It is the tallest fountain of its type in the world. It is named after King Fahd bin Abdulaziz, the ruler of Saudi Arabia from 1982 until 2005."
            />
          </div>
          {/* Add more DestinationCard components for additional destinations */}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
