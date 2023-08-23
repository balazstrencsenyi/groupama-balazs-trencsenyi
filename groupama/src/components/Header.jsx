function Header() {
  return (
    <div className="Header">
      <div id="LeftContainer">
        <img src="./src/assets/logo.svg" id="Logo" />
      </div>

      <div id="RightContainer">
        <img src="./src/assets/exit.svg" id="ExitIcon" />
        <p>Kilépés</p>
      </div>
    </div>
  );
}

export default Header;
