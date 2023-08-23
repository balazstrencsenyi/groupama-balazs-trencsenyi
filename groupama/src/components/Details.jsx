
function Details() {
  return (
    <div className="Details">
      <div className="Menu">
        <nav>Fizetendő tételek</nav>
        <nav>Eseti díj befizetése</nav>
        <div className="CurrentPageContainer">
        <nav className="CurrentPage">Fizetési előzmények</nav>
        <img src="./src/assets/rectangle.svg"  className="rectangle" />
        </div>
      </div>

      <div className="LetterHead">
        <div>Azonosító</div>
        <div>Befizetés módja</div>
        <div>Dátum</div>
        <div className="Amount">Összeg</div>
        <div className="Status">Státusz</div>
      </div>

      <div className="Cards">
        <div className="Card1">
          <div className="TransactionPart">
            <img src="./src/assets/vector.svg"  className="vector" />
            <div className="Card1Id">EPAYMT8...</div>
          </div>
          <div className="Card1Method">Bankkártya</div>
          <div className="TransactionMiddle" id="Middle1">
          <div className="Card1Date">2019.06.25</div>
          <div className="CardAmount">5 000 Ft</div>
          <div className="StatusContainer">
          <img src="./src/assets/ellipse.svg"  className="ellipse" />
          <div className="Card1Status">Folyamatban</div>
          </div>
          </div>
          <div className="TransactionIcons" id="Icons1">
            <img src="./src/assets/attack.svg"  className="AttachIcon" />
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>

        <div className="Card2">
          <div className="TransactionPart">
            <img src="./src/assets/vector.svg"  className="vector" />
            <div className="Card2Id">123456789</div>
          </div>
          <div className="Card2Method">Átutalás</div>
          <div className="TransactionMiddle" id="Middle2">
          <div className="Card2Date">2019.06.25</div>
          <div className="CardAmount">5 000 Ft</div>
          <div className="StatusContainer">
          <img src="./src/assets/green.svg"  className="ellipse" />
          <div className="Card2Status">Beérkezett</div>
          </div>
          </div>
          
          <div className="TransactionIcons" id="Icons2">
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>

        <div className="Card3">
          <div className="TransactionPart">
            <img src="./src/assets/vector.svg"  className="vector" />
            <div className="Card3Id">EPAYMT8...</div>
          </div>
          <div className="Card3Method">Bankártya</div>
          <div className="TransactionMiddle" id="Middle3">
          <div className="Card3Date">2020.03.22</div>
          <div className="CardAmount">5 000 Ft</div>
          <div className="StatusContainer">
          <img src="./src/assets/red.svg"  className="ellipse" />
          <div className="Card3Status">Sikertelen</div>
          </div>
          </div>
          <div className="TransactionIcons" id="Icons3">
            <img src="./src/assets/attack.svg"  className="AttachIcon" />
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>

        <div className="Card4">
          <div className="TransactionPart">
            <img src="./src/assets/vector.svg"  className="vector" />
            <div className="Card4Id">EPAYMT8...</div>
          </div>
          <div className="Card4Method">Bankkártya</div>
          <div className="TransactionMiddle" id="Middle4">
          <div className="Card4Date">2019.06.25</div>
          <div className="CardAmount">5 000 Ft</div>
          <div className="StatusContainer">
          <img src="./src/assets/green.svg"  className="ellipse" />
          <div className="Card4Status">Beérkezett</div>
          </div>
          </div>
          <div className="TransactionIcons" id="Icons4">
            <img src="./src/assets/attack.svg"  className="AttachIcon" />
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
