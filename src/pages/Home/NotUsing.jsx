const NotUsing = () => {
  return (
    <>
      <div id="preloader" className="preloader hide">
        <div className="preloaderContainer">
          <img
            src="https://cricx.onlyplaygames.net/assets/images/logo_9e20568b3918c1cb0ae1.svg"
            className="gameLogoImage"
          />
          <object
            data="https://cricx.onlyplaygames.net/assets/images/logo_bfa067388b6f0f4747fa.svg"
            className="preloaderLogoBase preloaderLogo"
          />
          <div id="percents">100%</div>
          <div className="progressContainer">
            <div className="progressBg">
              <div
                id="progressBar"
                className="progress"
                style={{ width: "99%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="delayedPreloader" className="delayedPreloader">
        <div className="preloaderLogo delayedLogo animLogo" />
      </div>
      <div id="messageView" className="opWrapperMessageBlocker">
        <div className="messageContainer">
          <div className="messageTextContainer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={120}
              height={120}
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M60 110C87.5 110 110 87.5 110 60C110 32.5 87.5 10 60 10C32.5 10 10 32.5 10 60C10 87.5 32.5 110 60 110Z"
                stroke="white"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M60 40V65"
                stroke="white"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M59.9727 80H60.0176"
                stroke="white"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div id="messageTitle">Title</div>
            <div id="messageDesc">Some error described here</div>
          </div>
          <div className="messageLine" />
          <div className="messageButtonContainer">
            <div id="buttonOk">OK</div>
            <a id="customButton" target="_parent" />
          </div>
        </div>
      </div>
      <div id="opMainContainer" className="opWrapper">
        <div
          id="OPFullscreenButton"
          className="hide"
          style={{ top: "623.3px" }}
        >
          <img
            id="OPFullscreenButton_image"
            src="https://cricx.onlyplaygames.net/assets/images/fullscreen_b40336aaa3ca86d48b75.svg"
          />
        </div>
        <div id="gameLimitsView" className="blocker">
          <div id="gameLimitsContainer">
            <div className="gameLimits__head">
              <div id="gameLimitsTitle">Limits</div>
              <div id="gameLimitsClose">✖</div>
            </div>
            <div className="gameLimitsTable">
              <div className="row">
                <div>Minimum bet:</div>
                <div className="gameLimits__amount" id="gameLimits__minBet" />
              </div>
              <div className="row">
                <div>Maximum bet:</div>
                <div className="gameLimits__amount" id="gameLimits__maxBet" />
              </div>
              <div className="row">
                <div>Maximum win for one bet:</div>
                <div className="gameLimits__amount" id="gameLimits__maxWin" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bottomBar hideBottomBar"
          id="bottomBar"
          style={{ display: "none" }}
        >
          <div className="bottomBar-column">
            <button className="button close" title id="betSelector-close">
              <span className="text" title />
            </button>
          </div>
          <div className="bottomBar-row mt-1">
            <div className="bottomBar-column">
              <h4 id="betSelector-label" className="bottomBar-headline">
                CASH BET
              </h4>
              <div className="bottomBar-row align-items-center">
                <div className="bottomBar-column">
                  <button className="button min" title id="betSelector-min">
                    <span className="text" title />
                  </button>
                </div>
                <div className="bottomBar-column">
                  <button
                    className="button minus"
                    title
                    id="betSelector-decrease"
                  >
                    <span className="text" title />
                  </button>
                </div>
                <div className="bottomBar-column">
                  <div className="betSelector" id="betSelector" />
                </div>
                <div className="bottomBar-column">
                  <button
                    className="button plus"
                    title
                    id="betSelector-increase"
                  >
                    <span className="text" title />
                  </button>
                </div>
                <div className="bottomBar-column">
                  <button className="button max" title id="betSelector-max">
                    <span className="text" title />
                  </button>
                </div>
              </div>
              <div className="bottomBar-column">
                <button
                  className="button confirm"
                  title="CONFIRM"
                  id="betSelector-confirm"
                >
                  <span className="text" title="CONFIRM">
                    CONFIRM
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="rulesWindow"
          className="wrapper_rules_container"
          style={{ display: "none" }}
        >
          <div className="window">
            <div className="buttonClose">×</div>
            <div className="rules_window_head">
              <div id="rules_title" className="title">
                RULES
              </div>
              <div className="link_box">
                <a id="rules_download_link" style={{ display: "none" }}>
                  DOWNLOAD (PDF)
                </a>
              </div>
            </div>
            <div id="iframe_rules_box" className="iframe_rules">
              <div className="iframe_rules__spinner_container hidden">
                <div
                  id="common_ui__game_rules_spinner__root"
                  className="system-ui-container__spinner"
                >
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opInfoPanel" />
    </>
  );
};

export default NotUsing;
