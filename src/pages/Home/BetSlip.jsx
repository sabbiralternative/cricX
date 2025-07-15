const BetSlip = () => {
  return (
    <div className="bet_block">
      <div id="bet_block_template" className="bet_block__item">
        <div className="bet_block__item__bet">
          <div className="bet_block__amount_selector">
            <div className="auto_checkbox">
              <span className="auto_checkbox_label">
                <span className="rates-setting__switch-title">AUTO</span>
                <span className="rates-setting__title">BET</span>{" "}
              </span>
              <input
                type="checkbox"
                className="auto_checkbox auto_take_checkbox checkbox"
              />
            </div>
            <button className="button_minus">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17676 20.5631H30.8434"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              defaultValue="0.12345678"
              inputMode="decimal"
              className="amount_element"
            />
            <button className="button_plus">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20.8335H30"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 30.4168V11.2501"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bet_block__auto">
          <label>
            <div>
              <span className="rates-setting__title">BET</span>
              <span className="rates-setting__switch-title">AUTO</span>
            </div>
            <input type="checkbox" className="auto_mode_checkbox" />
          </label>
        </div>
        <div className="bet_block__item__predefined_bets">
          <button>
            <span>0.12345678 BTC</span>
          </button>
          <button>
            <span>0.12345678 BTC</span>
          </button>
          <button>
            <span>0.12345678 BTC</span>
          </button>
          <button>
            <span>0.12345678 BTC</span>
          </button>
        </div>
        <div className="bet_block__item__place_bet">
          <button className="button_bet">
            <span className="button_bet__title">
              <span>BET</span> <span>00.00 USD</span>
            </span>
          </button>
          <button className="button_add_bet">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20.8335H30"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 30.4168V11.2501"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="bet_block__item__take bet_block__amount_selector">
          <div className="auto_checkbox">
            <span className="rates-setting__title auto_checkbox_label">
              <span className="rates-setting__switch-title">AUTO</span>
              <span className="rates-setting__title">X</span>{" "}
            </span>
            <input
              type="checkbox"
              className="auto_checkbox auto_take_checkbox checkbox"
            />
          </div>
          <button className="button_minus">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.17676 20.5631H30.8434"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            defaultValue="x123"
            inputMode="decimal"
            className="amount_element"
          />
          <button className="button_plus">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20.8335H30"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 30.4168V11.2501"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="bet_block_0" className="bet_block__item">
        <div className="bet_block__item__bet">
          <div className="bet_block__amount_selector">
            <div className="auto_checkbox">
              <span className="auto_checkbox_label">
                <span className="rates-setting__switch-title">AUTO</span>
                <span className="rates-setting__title">bet</span>{" "}
              </span>
              <input
                type="checkbox"
                className="auto_checkbox auto_take_checkbox checkbox"
              />
            </div>
            <button className="button_minus">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17676 20.5631H30.8434"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              defaultValue="0.12345678"
              inputMode="decimal"
              className="amount_element"
              style={{ fontSize: "inherit" }}
            />
            <button className="button_plus">
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20.8335H30"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 30.4168V11.2501"
                  stroke="white"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bet_block__auto">
          <label>
            <div>
              <span className="rates-setting__title">bet</span>
              <span className="rates-setting__switch-title">AUTO</span>
            </div>
            <input type="checkbox" className="auto_mode_checkbox" />
          </label>
        </div>
        <div className="bet_block__item__predefined_bets">
          <button>1 505 inr</button> <button>2 006 inr</button>
          <button>3 010 inr</button> <button>5 016 inr</button>
        </div>
        <div className="bet_block__item__place_bet">
          <button className="button_bet">
            <span className="button_bet__title">
              <span>BET</span>
              <span>20 inr</span>
            </span>
          </button>
          <button className="button_add_bet">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20.8335H30"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 30.4168V11.2501"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="bet_block__item__take bet_block__amount_selector">
          <div className="auto_checkbox">
            <span className="rates-setting__title auto_checkbox_label">
              AUTO x
            </span>
            <input
              type="checkbox"
              className="auto_checkbox auto_take_checkbox checkbox"
            />
          </div>
          <button className="button_minus">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.17676 20.5631H30.8434"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            defaultValue="x123"
            inputMode="decimal"
            className="amount_element"
            style={{ fontSize: "inherit" }}
          />
          <button className="button_plus">
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20.8335H30"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 30.4168V11.2501"
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
