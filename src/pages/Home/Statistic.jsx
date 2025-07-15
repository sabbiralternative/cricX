const Statistic = () => {
  return (
    <div className="statistics">
      <div id="stat_table" className="table_block">
        <div className="table_block__controls">
          <div
            className="table_block__controls__tabs"
            style={{ display: "flex" }}
          >
            <button data-type="bets" className="active_tab">
              All bets
            </button>
            <button data-type="myBets">My bets</button>
            <button data-type="previousBets" className="fadeIn">
              Previous
            </button>
          </div>
          <div
            id="info_panel_portrait"
            className="info_panel info_panel__portrait"
          >
            <div>
              <div className="info_panel__item">
                <span
                  id="info_panel__online_label_portrait"
                  className="info_panel__item_key"
                >
                  Online:
                </span>
                <span
                  id="info_panel__online_value_portrait"
                  className="info_panel__item_value"
                >
                  48
                </span>
              </div>
              <div className="info_panel__item">
                <span
                  id="info_panel__bets_label_portrait"
                  className="info_panel__item_key"
                >
                  Bets:
                </span>
                <span
                  id="info_panel__bets_value_portrait"
                  className="info_panel__item_value"
                >
                  9
                </span>
              </div>
            </div>
          </div>
        </div>
        <table id="table" className="table_block__table">
          <thead className="table_block__table_head">
            <tr>
              <th
                id="tabs_header__operator_tx_id"
                className="table_block__cell"
                style={{ display: "none" }}
              >
                <span>Id</span>
              </th>
              <th id="tabs_header__users_name" className="table_block__cell">
                Username
              </th>
              <th id="tabs_header__bets" className="table_block__cell">
                bet
              </th>
              <th id="tabs_header__takes" className="table_block__cell">
                x
              </th>
              <th id="tabs_header__wins" className="table_block__cell">
                win
              </th>
            </tr>
          </thead>
          <tbody className="table_block__table_body">
            <tr data-owner="other" className="collected">
              <td>
                <span>5071739</span>
              </td>
              <td>
                <span>36.00 lkr</span>
              </td>
              <td>
                <span>1.43</span>
              </td>
              <td>
                <span>51.48 lkr</span>
              </td>
            </tr>
            <tr data-owner="other" className="collected">
              <td>
                <span>6431612</span>
              </td>
              <td>
                <span>94.00 inr</span>
              </td>
              <td>
                <span>1.04</span>
              </td>
              <td>
                <span>97.76 inr</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6624612</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other" className="collected">
              <td>
                <span>6197666</span>
              </td>
              <td>
                <span>12.00 bdt</span>
              </td>
              <td>
                <span>1.35</span>
              </td>
              <td>
                <span>16.20 bdt</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6626017</span>
              </td>
              <td>
                <span>20.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6571326</span>
              </td>
              <td>
                <span>700.00 mmk</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6625872</span>
              </td>
              <td>
                <span>10.00 inr</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>5421289</span>
              </td>
              <td>
                <span>360.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
            <tr data-owner="other">
              <td>
                <span>6581490</span>
              </td>
              <td>
                <span>12.00 bdt</span>
              </td>
              <td>
                <span>---</span>
              </td>
              <td>
                <span>---</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table_block__footer">
          <div>
            <span data-localization-key="footer_0">This game is</span>
            <button className="back_panel rounded provably_fair_button">
              <span data-localization-key="footer_1">Provably Fair</span>
            </button>
          </div>
          <div>
            <span data-localization-key="footer_2">Powered by</span>
            <span>
              <img
                src="assets/images/onlyplay_logo_724cc8d453c1fa670c6e.svg"
                alt="onlyplay"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
