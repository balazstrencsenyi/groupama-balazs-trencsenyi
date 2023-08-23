function Details () {
    return (
        <div className="Details">
            <div className="Menu">
              <nav>Fizetendő tételek</nav>
              <nav>Eseti díj befizetése</nav>
              <nav className="CurrentPage">Fizetési előzmények</nav>
            </div>

            <div className="LetterHead">
              <div >Azonosító</div>
              <div >Befizetés módja</div>
              <div >Dátum</div>
              <div className="Amount">Összeg</div>
              <div className="Status">Státusz</div>
            </div>

            <div className="Cards">
              <div className="Card1">
                <div className="Card1Id">EPAYMT8...</div>
                <div className="Card1Method">Bankkártya</div>
                <div className="Card1Date">2019.06.25</div>
                <div className="Card1Amount">5 000 Ft</div>
                <div className="Card1Status">Folyamatban</div>
                <img src="./src/assets/attack.svg" className="AttachIcon" />
                <img src="./src/assets/arrow.svg" className="Arrow" />
              </div>

              <div className="Card2">
                <div className="Card2Id">123456789</div>
                <div className="Card2Method">Átutalás</div>
                <div className="Card2Date">2019.06.25</div>
                <div className="Card2Amount">5 000 Ft</div>
                <div className="Card2Status">Beérkezett</div>
                <img src="./src/assets/attack.svg" className="AttachIcon" />
                <img src="./src/assets/arrow.svg" className="Arrow" />
              </div>

              <div className="Card3">
                <div className="Card3Id">EPAYMT8...</div>
                <div className="Card3Method">Bankkártya</div>
                <div className="Card3Date">2019.06.25</div>
                <div className="Card3Amount">5 000 Ft</div>
                <div className="Card3Status">Sikertelen</div>
                <img src="./src/assets/attack.svg" className="AttachIcon" />
                <img src="./src/assets/arrow.svg" className="Arrow" />
              </div>

              <div className="Card4">
                <div className="Card4Id">EPAYMT8...</div>
                <div className="Card4Method">Bankkártya</div>
                <div className="Card4Date">2019.06.25</div>
                <div className="Card4Amount">5 000 Ft</div>
                <div className="Card4Status">Beérkezett</div>
                <img src="./src/assets/attack.svg" className="AttachIcon" />
                <img src="./src/assets/arrow.svg" className="Arrow" />
                </div>
            </div>
        </div>
    )
}

export default Details;