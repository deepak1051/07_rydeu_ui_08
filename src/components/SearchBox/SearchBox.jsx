import './searchbox.css';

function SearchBox() {
  return (
    <div className="search-box">
      <div className="search-tabs">
        <button>One way</button>
        <button>Round Trip</button>
        <button>Hourly</button>
      </div>
      <form>
        <input type="text" placeholder="From (airport, hotel, address)" />
        <input type="text" placeholder="To (airport, hotel, address)" />
        <input type="date" />
        <input type="time" />
        <input type="text" placeholder="Add Passenger & Baggage" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Additional Requirements"></textarea>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
