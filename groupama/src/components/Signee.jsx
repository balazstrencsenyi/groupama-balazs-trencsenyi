function Signee() {
  return (
    <div className="Signee">
      <div className="UpperContainer">
        <div>Folyamatos Díjfizetésű Ultra</div>
        <div>Prémium Életbiztosítás</div>
      </div>

      <div className="BottomContainer">
        <div className="SigneeName">
          <div>Szerződő neve</div>
          <div>Kovács István</div>
        </div>

        <div className="SigneeNumber">
          <div>Szerződésszám</div>
          <div>87562443</div>
        </div>

        <div className="LastTransaction">
          <div>Utolsó befizetés</div>
          <div>2019.06.25</div>
        </div>

        <div className="TransactionCompleted">
          <div>Biztosítási díj rendezve</div>
          <div>2019.07.01.</div>
        </div>
      </div>
    </div>
  );
}

export default Signee;
