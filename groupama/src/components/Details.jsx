
function Details() {
  return (
    <div className="Details">
      <div className="Menu">
        <nav>Fizetendő tételek</nav>
        <nav>Eseti díj befizetése</nav>
        <nav className="CurrentPage">Fizetési előzmények</nav>
        <img src="./src/assets/rectangle.svg" alt="rectangle" className="rectangle" />
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
          <div className="Card1Date">2019.06.25</div>
          <div className="CardAmount">5 000 Ft</div>
          <img src="./src/assets/ellipse.svg"  className="ellipse" />
          <div className="Card1Status">Folyamatban</div>
          <div className="TransactionIcons">
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
          <div className="Card2Date">2020.01.15</div>
          <div className="CardAmount">5 000 Ft</div>
          <img src="./src/assets/green.svg"  className="ellipse" />
          <div className="Card2Status">Beérkezett</div>
          <div className="TransactionIcons">
            <img src="./src/assets/attack.svg"  className="AttachIcon" />
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>

        <div className="Card3">
          <div className="TransactionPart">
            <img src="./src/assets/vector.svg"  className="vector" />
            <div className="Card3Id">EPAYMT10...</div>
          </div>
          <div className="Card3Method">Bankártya</div>
          <div className="Card3Date">2020.03.22</div>
          <div className="CardAmount">5 000 Ft</div>
          <img src="./src/assets/red.svg"  className="ellipse" />
          <div className="Card3Status">Sikertelen</div>
          <div className="TransactionIcons">
            <img src="./src/assets/attack.svg"  className="AttachIcon" />
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>

        <div className="Card4">
          <div className="TransactionPart">
            <img src="./src/assets/vector.svg"  className="vector" />
            <div className="Card4Id">EPAYMT11...</div>
          </div>
          <div className="Card4Method">Bankkártya</div>
          <div className="Card4Date">2021.05.08</div>
          <div className="CardAmount">5 000 Ft</div>
          <img src="./src/assets/green.svg"  className="ellipse" />
          <div className="Card4Status">Beérkezett</div>
          <div className="TransactionIcons">
            <img src="./src/assets/attack.svg"  className="AttachIcon" />
            <img src="./src/assets/arrow.svg"  className="Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
