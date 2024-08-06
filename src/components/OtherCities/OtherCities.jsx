import './othercities.css';

function OtherCities() {
  const cities = [
    { name: 'Naples', path: '/city1.png' },
    { name: 'Florence', path: '/city2.png' },
    { name: 'Naples', path: '/city2.png' },
    { name: 'Florence', path: '/city1.png' },
    { name: 'Naples', path: '/city2.png' },
    { name: 'Florence', path: '/city1.png' },
    { name: 'Naples', path: '/city2.png' },
    { name: 'Florence', path: '/city1.png' },
  ];

  return (
    <div className="other-cities">
      {cities.map((city, index) => (
        <div key={index} className="city-card">
          <img src={city?.path} alt={city} />
          <h3>{city.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default OtherCities;
