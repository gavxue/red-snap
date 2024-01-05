function Header() {
  return (
    <div className="header">
      <h1>Red Snap</h1>
      <p>View the latest and past photos taken from NASA's rovers on Mars</p>
      <div className="row-header">
        <a
          className="button-github"
          href="https://github.com/gavinxue050705/red-snap"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i> Gavin Xue
        </a>
      </div>
      <hr />
    </div>
  );
}

export default Header;
