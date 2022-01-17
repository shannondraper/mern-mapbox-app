import '../styles/App.css';

function Header() {
  return (
    <section className="header">
        Header
        <div className="search-bar">
            <input
                type="search"
                name="Search"
                id="search"
                placeholder="Search by city, postal code"
            />
            <input
                type="submit"
                value="Search"
            />
        </div>
    </section>
  );
}

export default Header;
