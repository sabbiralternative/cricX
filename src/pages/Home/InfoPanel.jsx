const InfoPanel = () => {
  return (
    <div id="info_panel" className="info_panel info_panel__landscape">
      <div>
        <div className="info_panel__item">
          <span id="info_panel__online_label" className="info_panel__item_key">
            Online:
          </span>
          <span
            id="info_panel__online_value"
            className="info_panel__item_value"
          >
            48
          </span>
        </div>
        <div className="info_panel__item">
          <span id="info_panel__bets_label" className="info_panel__item_key">
            Bets:
          </span>
          <span id="info_panel__bets_value" className="info_panel__item_value">
            9
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
