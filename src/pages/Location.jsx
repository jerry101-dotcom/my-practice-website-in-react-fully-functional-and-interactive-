import { locationInfoArray } from "../data";
import GetInTouch from "../components/get-in-touch"
function Location() {
  const locationArrayInfo = locationInfoArray.map((item) => {
    return (
      <section className="location-page-section">
        <div className="location-details">
          <h1>{item.country}</h1>
          <div className="location-info">
            <div>
              <p>
                <strong>{item.address.lineOne}</strong>
              </p>
              <p>{item.address.lineTwo}</p>
              <p>{item.address.lineThree}</p>
            </div>

            <div>
              <p>
                <strong>{item.contact.lineOne}</strong>
              </p>
              <p>{item.contact.lineTwo}</p>
              <p>{item.contact.lineThree}</p>
            </div>
          </div>
        </div>

        <div className="location-image-wrapper">
          <img
            src={item.image}
            alt={`${item.country} Location`}
          />
        </div>
      </section>
    );
  });
  return (
  <main className="location-main">
    {locationArrayInfo}
    <GetInTouch />
  </main>
);
}

export default Location;
