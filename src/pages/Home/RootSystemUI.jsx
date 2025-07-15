const RootSystemUI = () => {
  return (
    <div id="root-system-ui" className="system-ui-container">
      <div id="system-interface-container">
        <div id="system_ui__controller_sidebar" className="hidden">
          <div
            id="system_ui__controller_sidebar__overlay"
            className="system-ui-container__sidebar_overlay"
          >
            <div
              id="system_ui__controller_sidebar__scale_root"
              className="system-ui-container__sidebar_wrapper"
              style={{
                transform: "scale(0.348584) translateZ(0px)",
                width: "522px",
                height: "1944.14px",
                left: "-171.02px",
                top: "-633.322px",
              }}
            >
              <div
                id="system_ui__controller_sidebar__sidebar"
                className="system-ui-container__sidebar"
              >
                <div className="system-ui-container__sidebar__header">
                  <span id="system_ui__controller_sidebar__title">
                    Settings
                  </span>
                  <button
                    id="system_ui__controller_sidebar__close"
                    className="system-ui-container__close_button"
                  >
                    <svg
                      width={56}
                      height={56}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                        fill="#17142A"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3965 34.6032L34.6032 21.3965"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.6032 34.6032L21.3965 21.3965"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="system-ui-container__sidebar__body">
                  <div
                    id="system_ui__controller_sidebar__container_buttons"
                    className="system-ui-container__sidebar__body_content"
                  >
                    <button>
                      <div className="icon home" />
                      <span className="text">Home</span>
                    </button>
                    <button>
                      <div className="icon rules" />
                      <span className="text">Game information</span>
                    </button>
                  </div>
                  <div
                    id="system_ui__controller_sidebar__game_version_container"
                    className="sidebar_gameVersion"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="system_ui__controller_rounds_history" className="hidden">
          <div className="system-ui-container__modal_wrapper system-ui-container__modal_wrapper system-ui-container__modal_wrapper__rounds_history">
            <div
              id="system_ui__controller_rounds_history__scale_root"
              className="system-ui-container__modal_container system-ui-container__modal__rounds_history"
              data-orientation="portrait"
              style={{ transform: "scale(0.348584) translateZ(0px)" }}
            >
              <div className="system-ui-container__modal__rounds_history__header">
                <div>
                  <span id="system_ui__controller_rounds_history__header_title">
                    History
                  </span>
                </div>
                <button
                  id="system_ui__controller_rounds_history__close_button"
                  className="system-ui-container__close_button"
                >
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                      fill="#17142A"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3965 34.6032L34.6032 21.3965"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.6032 34.6032L21.3965 21.3965"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="system-ui-container__modal__rounds_history__body">
                <div
                  id="system_ui__controller_rounds_history__controller_rounds_history__spinner"
                  className="system-ui-container__modal__rounds_history__container_spinner hidden"
                >
                  <div
                    id="common_ui__controller_rounds_history__spinner__root"
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
                <div
                  id="system_ui__controller_rounds_history__controller_rounds_history__rounds_list"
                  className="system-ui-container__modal__rounds_history__body__rounds"
                >
                  <div className="system-ui-container__modal__rounds_history__body__rounds_table">
                    <div className="system-ui-container__modal__rounds_history__body__rounds_table__head">
                      <div className="system-ui-container__modal__rounds_history__body__rounds_table__row">
                        <div className="system-ui-container__modal__rounds_history__body__rounds_table__row__cell">
                          <span id="system_ui__controller_rounds_history__rounds_list__table_head_1">
                            Time(UTC)
                          </span>
                        </div>
                        <div className="system-ui-container__modal__rounds_history__body__rounds_table__row__cell">
                          <span id="system_ui__controller_rounds_history__rounds_list__table_head_2">
                            ID
                          </span>
                        </div>
                        <div className="system-ui-container__modal__rounds_history__body__rounds_table__row__cell">
                          <span id="system_ui__controller_rounds_history__rounds_list__table_head_3">
                            Bet
                          </span>
                        </div>
                        <div className="system-ui-container__modal__rounds_history__body__rounds_table__row__cell">
                          <span id="system_ui__controller_rounds_history__rounds_list__table_head_4">
                            Profit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="system_ui__controller_rounds_history__rounds_list__table_body"
                      className="system-ui-container__modal__rounds_history__body__rounds_table__body"
                    />
                  </div>
                </div>
                <div id="system_ui__controller_rounds_history__controller_rounds_history__round_result">
                  <div
                    id="system_ui__controller_rounds_history__round_result__root"
                    className="system-ui-container__modal__rounds_history__body__result"
                  >
                    <div className="system-ui-container__modal__rounds_history__body__result__head">
                      <button id="system_ui__controller_rounds_history__round_result__back_button">
                        <svg
                          width={56}
                          height={56}
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 51.3333H35C46.6667 51.3333 51.3333 46.6667 51.3333 35V21C51.3333 9.33334 46.6667 4.66667 35 4.66667H21C9.33334 4.66667 4.66667 9.33334 4.66667 21V35C4.66667 46.6667 9.33334 51.3333 21 51.3333Z"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M30.94 36.2367L22.7267 28L30.94 19.7633"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      id="system_ui__controller_rounds_history__round_result__content"
                      className="system-ui-container__modal__rounds_history__body__result__content"
                    />
                  </div>
                  <div className="system-ui-container__modal__rounds_history__body__result_blocker" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="system_ui__controller_notifications"
          style={{
            transform: "scale(0.348584) translateZ(0px)",
            width: "918px",
            height: "1942.14px",
            left: "-299px",
            top: "-632.322px",
          }}
        >
          <div
            id="system_ui__controller_notifications__container_root"
            className="OPWrapper_service__notifications system-ui-container__notifications"
          >
            <div
              id="system_ui__controller_notifications__container_notifications"
              className="OPWrapper_service__notifications__wrapper"
            />
          </div>
        </div>
        <div
          id="system_ui__controller_tournaments_start_screen"
          className="hidden"
        >
          <div
            id="system_ui__tournaments__controller_tournaments_start_screen__scale_root"
            className="system-ui-container__tournaments system-ui-container__tournaments_start_screen"
            data-orientation="portrait"
            style={{
              transform: "scale(0.348584) translateZ(0px)",
              width: "918px",
              height: "1920px",
              left: "-299px",
              top: "-621.25px",
            }}
          >
            <div
              id="system_ui__tournaments__controller_tournaments_start_screen__controller_tournaments_start_screen__modal_bonus_details"
              className="hidden"
            >
              <div className="system-ui-container__modal_wrapper">
                <div
                  id="system_ui__tournaments__controller_tournaments_start_screen__modal_bonus_details__scale_root"
                  className="system-ui-container__modal_container system-ui-container__tournaments__modal__rules"
                  data-orientation="portrait"
                >
                  <div className="system-ui-container__tournaments__modal__rules__header">
                    <svg
                      width={130}
                      height={92}
                      viewBox="0 0 130 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M130 92L64.375 26.125L51.875 60.625L13.375 75.125L30.25 92H81.5H130Z"
                        fill="#ED1132"
                      />
                      <path
                        d="M65.8758 31.625C65.8758 30.1093 65.8003 28.6116 65.6571 27.1335L39.1417 0.657657C38.7491 0.252641 38.2003 0 37.5951 0H2.15643C0.970493 0 0.00018096 0.970313 0.00018096 2.15625V6.36184C0.00018096 6.94295 0.233235 7.47213 0.610399 7.86097L4.2913 11.5156C4.2913 13.0255 4.2913 14.6488 4.2913 16.1893C4.2913 19.7592 5.3457 21.7774 7.46638 23.8546L15.005 31.3937C15.0814 32.46 14.6302 33.5514 13.6492 34.3205L10.525 36.7702C6.35824 40.1057 4.29112 42.0623 4.29112 47.0607C4.29112 49.7048 4.29112 52.5951 4.29112 54.7317H2.15625C0.970313 54.7317 0 55.702 0 56.888V61.0938C0 61.7561 0.302775 62.351 0.77661 62.7474L15.5194 77.4184C16.9539 77.5531 18.4063 77.625 19.8758 77.625C45.2809 77.625 65.8758 57.0301 65.8758 31.625Z"
                        fill="#ED1132"
                      />
                      <path
                        d="M26.1012 28.9294L29.2255 26.4797C33.3922 23.1442 35.4594 21.1876 35.4594 16.1892C35.4594 11.191 35.4594 5.31055 35.4594 5.31055H4.29004C4.29004 5.31055 4.29004 11.1908 4.29004 16.1892C4.29004 21.1874 6.35716 23.144 10.5239 26.4797L13.6482 28.9294C15.468 30.3565 15.4682 32.8935 13.6482 34.3206L10.5239 36.7702C6.35716 40.1058 4.29004 42.0624 4.29004 47.0608C4.29004 52.0589 4.29004 57.9394 4.29004 57.9394H35.4592C35.4592 57.9394 35.4592 52.0591 35.4592 47.0608C35.4592 42.0626 33.392 40.106 29.2253 36.7702L26.101 34.3206C24.2812 32.8935 24.2814 30.3563 26.1012 28.9294Z"
                        fill="white"
                      />
                      <path
                        d="M37.5949 8.51809H2.15625C0.970313 8.51809 0 7.54777 0 6.36184V2.15625C0 0.970313 0.970313 0 2.15625 0H37.5949C38.7809 0 39.7512 0.970313 39.7512 2.15625V6.36184C39.7512 7.54777 38.7809 8.51809 37.5949 8.51809Z"
                        fill="#56CCF2"
                      />
                      <path
                        d="M37.5949 63.2495H2.15625C0.970313 63.2495 0 62.2792 0 61.0933V56.8877C0 55.7018 0.970313 54.7314 2.15625 54.7314H37.5949C38.7809 54.7314 39.7512 55.7018 39.7512 56.8877V61.0933C39.7512 62.2792 38.7809 63.2495 37.5949 63.2495Z"
                        fill="#56CCF2"
                      />
                      <path
                        d="M7.20752 19.6758C7.20752 19.6758 7.95628 22.1614 12.4783 25.5156C15.1093 27.467 17.753 29.4006 19.8748 31.6245C19.8748 31.6245 24.641 27.467 27.272 25.5156C31.7942 22.1614 32.5427 19.6758 32.5427 19.6758H7.20752Z"
                        fill="#F5C827"
                      />
                      <path
                        d="M29.5337 43.125C28.5242 43.125 11.2273 43.125 10.2178 43.125C7.83693 43.125 6.92358 45.4609 6.92358 47.198C6.92358 48.935 6.92358 52.2891 6.92358 52.2891H32.8281C32.8281 52.2891 32.8281 48.9348 32.8281 47.198C32.8279 45.4609 31.9145 43.125 29.5337 43.125Z"
                        fill="#F5C827"
                      />
                    </svg>
                    <div>
                      <span id="system_ui__tournaments__controller_tournaments_start_screen__modal_bonus_details__header_title" />
                    </div>
                    <button
                      id="system_ui__tournaments__controller_tournaments_start_screen__modal_bonus_details__close_button"
                      className="system-ui-container__close_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                          fill="#17142A"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.3965 34.6032L34.6032 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.6032 34.6032L21.3965 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="system-ui-container__tournaments__modal__rules__body">
                    <div className="system-ui-container__tournaments__modal__rules__body_content">
                      <h1 id="system_ui__tournaments__controller_tournaments_start_screen__modal_bonus_details__title" />
                      <p id="system_ui__tournaments__controller_tournaments_start_screen__modal_bonus_details__description" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="system-ui-container__tournaments_main">
              <div id="system_ui__tournaments__controller_tournaments_start_screen__controller_tournaments_start_screen__header">
                <div className="system-ui-container__tournaments_main__header">
                  <div>
                    <tournaments-logo className="tournament_logo"></tournaments-logo>
                  </div>
                  <div>
                    <button
                      id="system_ui__tournaments__controller_tournaments_start_screen__header__close_button"
                      className="system-ui-container__close_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                          fill="#17142A"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.3965 34.6032L34.6032 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.6032 34.6032L21.3965 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="system-ui-container__tournaments_main__title">
                <span id="system_ui__tournaments__controller_tournaments_start_screen__title"></span>
              </div>
              <div className="system-ui-container__tournaments_main__body">
                <div className="system-ui-container__tournaments_main__body_description">
                  <div className="system-ui-container__tournaments_main__body_description_promo_block">
                    <div id="system_ui__tournaments__controller_tournaments_start_screen__controller_tournaments_start_screen__banner">
                      <div className="system-ui-container__tournaments_main__body_description_promo_block__banner_box">
                        <img
                          id="system_ui__tournaments__controller_tournaments_start_screen__banner__banner"
                          alt=""
                        />
                        <div
                          id="system_ui__tournaments__controller_tournaments_start_screen__banner__ended_label"
                          className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__end_label"
                        >
                          Ended
                        </div>
                        <div
                          id="system_ui__tournaments__controller_tournaments_start_screen__banner__banner_panel"
                          className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay"
                        >
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__starts_block"
                            id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_label">
                              Tournament starts:
                            </span>
                            <div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_days_value">
                                  1
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_days_label">
                                  d
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_hours_value">
                                  23
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_hours_label">
                                  h
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_minutes_value">
                                  15
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__starts_minutes_label">
                                  min
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__ends_block"
                            id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_label">
                              Tournament ends:
                            </span>
                            <div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_days_value">
                                  1
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_days_label">
                                  d
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_hours_value">
                                  23
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_hours_label">
                                  h
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_minutes_value">
                                  15
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__ends_minutes_label">
                                  min
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__ended_block"
                            id="system_ui__tournaments__controller_tournaments_start_screen__banner__ended_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__title" />
                            <span id="system_ui__tournaments__controller_tournaments_start_screen__banner__dates" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="system_ui__tournaments__controller_tournaments_start_screen__controller_tournaments_start_screen__bonus_details">
                      <div
                        id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__container_root"
                        className="system-ui-container__tournaments_main__body_description_promo_block__details"
                      >
                        <div>
                          <div className="system-ui-container__tournaments_main__body_description_promo_block__details_title">
                            <svg
                              width={130}
                              height={92}
                              viewBox="0 0 130 92"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="clock_shadow">
                                <path
                                  d="M130 92L64.375 26.125L51.875 60.625L13.375 75.125L30.25 92H81.5H130Z"
                                  fill="#ED1132"
                                />
                                <path
                                  d="M65.8758 31.625C65.8758 30.1093 65.8003 28.6116 65.6571 27.1335L39.1417 0.657657C38.7491 0.252641 38.2003 0 37.5951 0H2.15643C0.970493 0 0.00018096 0.970313 0.00018096 2.15625V6.36184C0.00018096 6.94295 0.233235 7.47213 0.610399 7.86097L4.2913 11.5156C4.2913 13.0255 4.2913 14.6488 4.2913 16.1893C4.2913 19.7592 5.3457 21.7774 7.46638 23.8546L15.005 31.3937C15.0814 32.46 14.6302 33.5514 13.6492 34.3205L10.525 36.7702C6.35824 40.1057 4.29112 42.0623 4.29112 47.0607C4.29112 49.7048 4.29112 52.5951 4.29112 54.7317H2.15625C0.970313 54.7317 0 55.702 0 56.888V61.0938C0 61.7561 0.302775 62.351 0.77661 62.7474L15.5194 77.4184C16.9539 77.5531 18.4063 77.625 19.8758 77.625C45.2809 77.625 65.8758 57.0301 65.8758 31.625Z"
                                  fill="#ED1132"
                                />
                              </g>
                              <path
                                d="M26.1012 28.9294L29.2255 26.4797C33.3922 23.1442 35.4594 21.1876 35.4594 16.1892C35.4594 11.191 35.4594 5.31055 35.4594 5.31055H4.29004C4.29004 5.31055 4.29004 11.1908 4.29004 16.1892C4.29004 21.1874 6.35716 23.144 10.5239 26.4797L13.6482 28.9294C15.468 30.3565 15.4682 32.8935 13.6482 34.3206L10.5239 36.7702C6.35716 40.1058 4.29004 42.0624 4.29004 47.0608C4.29004 52.0589 4.29004 57.9394 4.29004 57.9394H35.4592C35.4592 57.9394 35.4592 52.0591 35.4592 47.0608C35.4592 42.0626 33.392 40.106 29.2253 36.7702L26.101 34.3206C24.2812 32.8935 24.2814 30.3563 26.1012 28.9294Z"
                                fill="white"
                              />
                              <path
                                d="M37.5949 8.51809H2.15625C0.970313 8.51809 0 7.54777 0 6.36184V2.15625C0 0.970313 0.970313 0 2.15625 0H37.5949C38.7809 0 39.7512 0.970313 39.7512 2.15625V6.36184C39.7512 7.54777 38.7809 8.51809 37.5949 8.51809Z"
                                fill="#56CCF2"
                              />
                              <path
                                d="M37.5949 63.2495H2.15625C0.970313 63.2495 0 62.2792 0 61.0933V56.8877C0 55.7018 0.970313 54.7314 2.15625 54.7314H37.5949C38.7809 54.7314 39.7512 55.7018 39.7512 56.8877V61.0933C39.7512 62.2792 38.7809 63.2495 37.5949 63.2495Z"
                                fill="#56CCF2"
                              />
                              <path
                                d="M7.20752 19.6758C7.20752 19.6758 7.95628 22.1614 12.4783 25.5156C15.1093 27.467 17.753 29.4006 19.8748 31.6245C19.8748 31.6245 24.641 27.467 27.272 25.5156C31.7942 22.1614 32.5427 19.6758 32.5427 19.6758H7.20752Z"
                                fill="#F5C827"
                              />
                              <path
                                d="M29.5337 43.125C28.5242 43.125 11.2273 43.125 10.2178 43.125C7.83693 43.125 6.92358 45.4609 6.92358 47.198C6.92358 48.935 6.92358 52.2891 6.92358 52.2891H32.8281C32.8281 52.2891 32.8281 48.9348 32.8281 47.198C32.8279 45.4609 31.9145 43.125 29.5337 43.125Z"
                                fill="#F5C827"
                              />
                            </svg>
                            <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__title_label_1">
                              You can win
                            </span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__title_label_2">
                                BONUS
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__title_label_3">
                                points!
                              </span>
                            </div>
                          </div>
                          <button
                            id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__details_button"
                            className="secondary"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__details_button_label">
                              Details
                            </span>
                          </button>
                        </div>
                        <div>
                          <div className="system-ui-container__tournaments_main__body_description_promo_block__details_timer">
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__timer_hours">
                                24
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__timer_hours_label">
                                hours
                              </span>
                            </div>
                            <span>:</span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__timer_minutes">
                                12
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__timer_minutes_label">
                                mins
                              </span>
                            </div>
                            <span>:</span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__timer_seconds">
                                24
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_start_screen__bonus_details__timer_seconds_label">
                                sec
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="system-ui-container__tournaments_main__body_content">
                  <div
                    id="system_ui__tournaments__controller_tournaments_start_screen__container_info"
                    className="system-ui-container__tournaments_start_screen__info"
                  />
                  <div className="system-ui-container__tournaments_start_screen__submit_container">
                    <div className="system-ui-container__tournaments_start_screen__submit_container__warning">
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="019-information" clipPath="url(#clip0_492_1001)">
                          <g id="ESSENTIAL UI">
                            <path
                              id="Vector"
                              d="M46.9734 9.66845C46.0706 5.5922 42.1191 1.85814 38.0316 1.06501C35.5416 0.567198 28.5938 -0.0478016 24 1.08499e-05C19.4062 -0.0506142 12.4584 0.562511 9.96844 1.0622C5.88094 1.85814 1.92937 5.5922 1.03125 9.66845C0.511875 12.1434 0.0075 15.5109 0 20.1075C0.0075 24.7013 0.511875 28.0697 1.03125 30.5456C1.93406 34.6219 5.88562 38.3559 9.97312 39.1491C11.3175 39.4172 13.9613 39.7209 16.8328 39.9347C17.1578 40.4453 17.5106 40.9891 17.8913 41.5659C19.4156 43.8741 20.5809 45.4819 21.4641 46.6022C22.9341 48.466 25.0744 48.466 26.5444 46.6022C27.4275 45.4819 28.5928 43.8741 30.1172 41.5659C30.4978 40.9884 30.8506 40.4447 31.1756 39.9347C34.0472 39.7209 36.6919 39.4172 38.0363 39.1491C42.1237 38.3559 46.0753 34.6219 46.9781 30.5456C47.4919 28.0697 47.9972 24.7031 48.0047 20.1075C47.9925 15.51 47.4872 12.1444 46.9734 9.66845Z"
                              fill="#F68407"
                            />
                            <path
                              id="Vector_2"
                              d="M24 1.08499e-05C19.4063 -0.0506142 12.4584 0.562511 9.96844 1.0622C5.88094 1.85814 1.92938 5.5922 1.03125 9.66845C0.511875 12.1434 0.0075 15.5109 0 20.1066C0.0075 24.7003 0.511875 28.0697 1.03125 30.5456C1.56281 32.9484 3.15563 35.2331 5.21063 36.8653C7.2002 37.3393 9.23851 37.5781 11.2838 37.5769C25.6866 37.5769 37.3622 25.9013 37.3622 11.4994C37.3654 7.74783 36.5563 4.04005 34.9903 0.630948C31.7878 0.271886 27.2906 -0.0337392 24 1.08499e-05Z"
                              fill="#FE9D11"
                            />
                            <g id="Group">
                              <path
                                id="Vector_3"
                                d="M26.6512 33.734C26.5888 34.0259 26.4432 34.2935 26.2322 34.5046C26.0211 34.7157 25.7535 34.8612 25.4616 34.9237C24.493 35.0737 23.507 35.0737 22.5384 34.9237C22.2464 34.8615 21.9787 34.716 21.7676 34.5049C21.5565 34.2938 21.411 34.026 21.3487 33.734C21.2 32.7656 21.2 31.7802 21.3487 30.8118C21.4114 30.5203 21.557 30.2531 21.7681 30.0425C21.9792 29.8319 22.2467 29.6869 22.5384 29.625C23.507 29.475 24.493 29.475 25.4616 29.625C25.7536 29.6871 26.0214 29.8325 26.2325 30.0437C26.4437 30.2548 26.5891 30.5226 26.6512 30.8146C26.8 31.783 26.8 32.7684 26.6512 33.7368V33.734Z"
                                fill="white"
                              />
                              <path
                                id="Vector_4"
                                d="M21.3412 8.91937C21.3412 8.21423 21.6213 7.53796 22.1199 7.03935C22.6185 6.54074 23.2948 6.26062 23.9999 6.26062C24.7051 6.26062 25.3813 6.54074 25.88 7.03935C26.3786 7.53796 26.6587 8.21423 26.6587 8.91937V23.8322C26.6587 24.5373 26.3786 25.2136 25.88 25.7122C25.3813 26.2108 24.7051 26.4909 23.9999 26.4909C23.2948 26.4909 22.6185 26.2108 22.1199 25.7122C21.6213 25.2136 21.3412 24.5373 21.3412 23.8322V8.91937Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_492_1001">
                            <rect width={48} height={48} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span id="system_ui__tournaments__controller_tournaments_start_screen__warning">
                        Happy Hours Tournament does not affect game RTP
                      </span>
                    </div>
                    <button
                      id="system_ui__tournaments__controller_tournaments_start_screen__button_ok"
                      className="secondary"
                    >
                      <span id="system_ui__tournaments__controller_tournaments_start_screen__button_ok_label">
                        Ok
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="system_ui__controller_modal_tournament_end" className="hidden">
          <div className="system-ui-container__modal_wrapper">
            <div
              id="system_ui__tournaments__controller_modal_tournament_end__scale_root"
              className="system-ui-container__modal_container system-ui-container__tournaments__modal__tournament_end"
              data-orientation="portrait"
              style={{ transform: "scale(0.348584) translateZ(0px)" }}
            >
              <div className="system-ui-container__tournaments__modal__tournament_end__header">
                <div>
                  <span id="system_ui__tournaments__controller_modal_tournament_end__tournament_title">
                    Golden Gates
                  </span>
                  <span id="system_ui__tournaments__controller_modal_tournament_end__title">
                    Tournament Ended!
                  </span>
                </div>
                <button
                  id="system_ui__tournaments__controller_modal_tournament_end__close_button"
                  className="system-ui-container__close_button"
                >
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                      fill="#17142A"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3965 34.6032L34.6032 21.3965"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M34.6032 34.6032L21.3965 21.3965"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="system-ui-container__tournaments__modal__tournament_end__body">
                <div className="system-ui-container__tournaments__modal__tournament_end__body_content">
                  <p id="system_ui__tournaments__controller_modal_tournament_end__description">
                    Thank you for participating in $tournamentTitle Tournament!
                    We hope you had a fantastic time competing and enjoying our
                    Tournament. To review the tournament results and see where
                    you stand among the participants, simply click on the Review
                    Results button below. Brace yourself for the anticipation
                    and excitement of discovering your final rank and the
                    rewards you have earned.
                  </p>
                </div>
                <button
                  id="system_ui__tournaments__controller_modal_tournament_end__review_result_button"
                  className="secondary"
                >
                  <span id="system_ui__tournaments__controller_modal_tournament_end__review_result_button_label">
                    Review Your Results
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="system_ui__controller_tournaments_upcoming_screen"
          className="hidden"
        >
          <div
            id="system_ui__tournaments__controller_tournaments_upcoming_screen__scale_root"
            className="system-ui-container__tournaments system-ui-container__tournaments_start_screen"
            data-orientation="portrait"
            style={{
              transform: "scale(0.348584) translateZ(0px)",
              width: "918px",
              height: "1920px",
              left: "-299px",
              top: "-621.25px",
            }}
          >
            <div
              id="system_ui__tournaments__controller_tournaments_upcoming_screen__controller_tournaments_upcoming_screen__modal_bonus_details"
              className="hidden"
            >
              <div className="system-ui-container__modal_wrapper">
                <div
                  id="system_ui__tournaments__controller_tournaments_upcoming_screen__modal_bonus_details__scale_root"
                  className="system-ui-container__modal_container system-ui-container__tournaments__modal__rules"
                  data-orientation="portrait"
                >
                  <div className="system-ui-container__tournaments__modal__rules__header">
                    <svg
                      width={130}
                      height={92}
                      viewBox="0 0 130 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M130 92L64.375 26.125L51.875 60.625L13.375 75.125L30.25 92H81.5H130Z"
                        fill="#ED1132"
                      />
                      <path
                        d="M65.8758 31.625C65.8758 30.1093 65.8003 28.6116 65.6571 27.1335L39.1417 0.657657C38.7491 0.252641 38.2003 0 37.5951 0H2.15643C0.970493 0 0.00018096 0.970313 0.00018096 2.15625V6.36184C0.00018096 6.94295 0.233235 7.47213 0.610399 7.86097L4.2913 11.5156C4.2913 13.0255 4.2913 14.6488 4.2913 16.1893C4.2913 19.7592 5.3457 21.7774 7.46638 23.8546L15.005 31.3937C15.0814 32.46 14.6302 33.5514 13.6492 34.3205L10.525 36.7702C6.35824 40.1057 4.29112 42.0623 4.29112 47.0607C4.29112 49.7048 4.29112 52.5951 4.29112 54.7317H2.15625C0.970313 54.7317 0 55.702 0 56.888V61.0938C0 61.7561 0.302775 62.351 0.77661 62.7474L15.5194 77.4184C16.9539 77.5531 18.4063 77.625 19.8758 77.625C45.2809 77.625 65.8758 57.0301 65.8758 31.625Z"
                        fill="#ED1132"
                      />
                      <path
                        d="M26.1012 28.9294L29.2255 26.4797C33.3922 23.1442 35.4594 21.1876 35.4594 16.1892C35.4594 11.191 35.4594 5.31055 35.4594 5.31055H4.29004C4.29004 5.31055 4.29004 11.1908 4.29004 16.1892C4.29004 21.1874 6.35716 23.144 10.5239 26.4797L13.6482 28.9294C15.468 30.3565 15.4682 32.8935 13.6482 34.3206L10.5239 36.7702C6.35716 40.1058 4.29004 42.0624 4.29004 47.0608C4.29004 52.0589 4.29004 57.9394 4.29004 57.9394H35.4592C35.4592 57.9394 35.4592 52.0591 35.4592 47.0608C35.4592 42.0626 33.392 40.106 29.2253 36.7702L26.101 34.3206C24.2812 32.8935 24.2814 30.3563 26.1012 28.9294Z"
                        fill="white"
                      />
                      <path
                        d="M37.5949 8.51809H2.15625C0.970313 8.51809 0 7.54777 0 6.36184V2.15625C0 0.970313 0.970313 0 2.15625 0H37.5949C38.7809 0 39.7512 0.970313 39.7512 2.15625V6.36184C39.7512 7.54777 38.7809 8.51809 37.5949 8.51809Z"
                        fill="#56CCF2"
                      />
                      <path
                        d="M37.5949 63.2495H2.15625C0.970313 63.2495 0 62.2792 0 61.0933V56.8877C0 55.7018 0.970313 54.7314 2.15625 54.7314H37.5949C38.7809 54.7314 39.7512 55.7018 39.7512 56.8877V61.0933C39.7512 62.2792 38.7809 63.2495 37.5949 63.2495Z"
                        fill="#56CCF2"
                      />
                      <path
                        d="M7.20752 19.6758C7.20752 19.6758 7.95628 22.1614 12.4783 25.5156C15.1093 27.467 17.753 29.4006 19.8748 31.6245C19.8748 31.6245 24.641 27.467 27.272 25.5156C31.7942 22.1614 32.5427 19.6758 32.5427 19.6758H7.20752Z"
                        fill="#F5C827"
                      />
                      <path
                        d="M29.5337 43.125C28.5242 43.125 11.2273 43.125 10.2178 43.125C7.83693 43.125 6.92358 45.4609 6.92358 47.198C6.92358 48.935 6.92358 52.2891 6.92358 52.2891H32.8281C32.8281 52.2891 32.8281 48.9348 32.8281 47.198C32.8279 45.4609 31.9145 43.125 29.5337 43.125Z"
                        fill="#F5C827"
                      />
                    </svg>
                    <div>
                      <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__modal_bonus_details__header_title" />
                    </div>
                    <button
                      id="system_ui__tournaments__controller_tournaments_upcoming_screen__modal_bonus_details__close_button"
                      className="system-ui-container__close_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                          fill="#17142A"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.3965 34.6032L34.6032 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.6032 34.6032L21.3965 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="system-ui-container__tournaments__modal__rules__body">
                    <div className="system-ui-container__tournaments__modal__rules__body_content">
                      <h1 id="system_ui__tournaments__controller_tournaments_upcoming_screen__modal_bonus_details__title" />
                      <p id="system_ui__tournaments__controller_tournaments_upcoming_screen__modal_bonus_details__description" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="system-ui-container__tournaments_main">
              <div id="system_ui__tournaments__controller_tournaments_upcoming_screen__controller_tournaments_upcoming_screen__header">
                <div className="system-ui-container__tournaments_main__header">
                  <div>
                    <tournaments-logo className="tournament_logo"></tournaments-logo>
                  </div>
                  <div>
                    <button
                      id="system_ui__tournaments__controller_tournaments_upcoming_screen__header__close_button"
                      className="system-ui-container__close_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                          fill="#17142A"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.3965 34.6032L34.6032 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.6032 34.6032L21.3965 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="system-ui-container__tournaments_main__title">
                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__title"></span>
              </div>
              <div className="system-ui-container__tournaments_main__body">
                <div className="system-ui-container__tournaments_main__body_description">
                  <div className="system-ui-container__tournaments_main__body_description_promo_block">
                    <div id="system_ui__tournaments__controller_tournaments_upcoming_screen__controller_tournaments_upcoming_screen__banner">
                      <div className="system-ui-container__tournaments_main__body_description_promo_block__banner_box">
                        <img
                          id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__banner"
                          alt=""
                        />
                        <div
                          id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ended_label"
                          className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__end_label"
                        >
                          Ended
                        </div>
                        <div
                          id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__banner_panel"
                          className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay"
                        >
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__starts_block"
                            id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_label">
                              Tournament starts:
                            </span>
                            <div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_days_value">
                                  1
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_days_label">
                                  d
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_hours_value">
                                  23
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_hours_label">
                                  h
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_minutes_value">
                                  15
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__starts_minutes_label">
                                  min
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__ends_block"
                            id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_label">
                              Tournament ends:
                            </span>
                            <div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_days_value">
                                  1
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_days_label">
                                  d
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_hours_value">
                                  23
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_hours_label">
                                  h
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_minutes_value">
                                  15
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ends_minutes_label">
                                  min
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__ended_block"
                            id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__ended_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__title" />
                            <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__banner__dates" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="system_ui__tournaments__controller_tournaments_upcoming_screen__controller_tournaments_upcoming_screen__bonus_details">
                      <div
                        id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__container_root"
                        className="system-ui-container__tournaments_main__body_description_promo_block__details"
                      >
                        <div>
                          <div className="system-ui-container__tournaments_main__body_description_promo_block__details_title">
                            <svg
                              width={130}
                              height={92}
                              viewBox="0 0 130 92"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="clock_shadow">
                                <path
                                  d="M130 92L64.375 26.125L51.875 60.625L13.375 75.125L30.25 92H81.5H130Z"
                                  fill="#ED1132"
                                />
                                <path
                                  d="M65.8758 31.625C65.8758 30.1093 65.8003 28.6116 65.6571 27.1335L39.1417 0.657657C38.7491 0.252641 38.2003 0 37.5951 0H2.15643C0.970493 0 0.00018096 0.970313 0.00018096 2.15625V6.36184C0.00018096 6.94295 0.233235 7.47213 0.610399 7.86097L4.2913 11.5156C4.2913 13.0255 4.2913 14.6488 4.2913 16.1893C4.2913 19.7592 5.3457 21.7774 7.46638 23.8546L15.005 31.3937C15.0814 32.46 14.6302 33.5514 13.6492 34.3205L10.525 36.7702C6.35824 40.1057 4.29112 42.0623 4.29112 47.0607C4.29112 49.7048 4.29112 52.5951 4.29112 54.7317H2.15625C0.970313 54.7317 0 55.702 0 56.888V61.0938C0 61.7561 0.302775 62.351 0.77661 62.7474L15.5194 77.4184C16.9539 77.5531 18.4063 77.625 19.8758 77.625C45.2809 77.625 65.8758 57.0301 65.8758 31.625Z"
                                  fill="#ED1132"
                                />
                              </g>
                              <path
                                d="M26.1012 28.9294L29.2255 26.4797C33.3922 23.1442 35.4594 21.1876 35.4594 16.1892C35.4594 11.191 35.4594 5.31055 35.4594 5.31055H4.29004C4.29004 5.31055 4.29004 11.1908 4.29004 16.1892C4.29004 21.1874 6.35716 23.144 10.5239 26.4797L13.6482 28.9294C15.468 30.3565 15.4682 32.8935 13.6482 34.3206L10.5239 36.7702C6.35716 40.1058 4.29004 42.0624 4.29004 47.0608C4.29004 52.0589 4.29004 57.9394 4.29004 57.9394H35.4592C35.4592 57.9394 35.4592 52.0591 35.4592 47.0608C35.4592 42.0626 33.392 40.106 29.2253 36.7702L26.101 34.3206C24.2812 32.8935 24.2814 30.3563 26.1012 28.9294Z"
                                fill="white"
                              />
                              <path
                                d="M37.5949 8.51809H2.15625C0.970313 8.51809 0 7.54777 0 6.36184V2.15625C0 0.970313 0.970313 0 2.15625 0H37.5949C38.7809 0 39.7512 0.970313 39.7512 2.15625V6.36184C39.7512 7.54777 38.7809 8.51809 37.5949 8.51809Z"
                                fill="#56CCF2"
                              />
                              <path
                                d="M37.5949 63.2495H2.15625C0.970313 63.2495 0 62.2792 0 61.0933V56.8877C0 55.7018 0.970313 54.7314 2.15625 54.7314H37.5949C38.7809 54.7314 39.7512 55.7018 39.7512 56.8877V61.0933C39.7512 62.2792 38.7809 63.2495 37.5949 63.2495Z"
                                fill="#56CCF2"
                              />
                              <path
                                d="M7.20752 19.6758C7.20752 19.6758 7.95628 22.1614 12.4783 25.5156C15.1093 27.467 17.753 29.4006 19.8748 31.6245C19.8748 31.6245 24.641 27.467 27.272 25.5156C31.7942 22.1614 32.5427 19.6758 32.5427 19.6758H7.20752Z"
                                fill="#F5C827"
                              />
                              <path
                                d="M29.5337 43.125C28.5242 43.125 11.2273 43.125 10.2178 43.125C7.83693 43.125 6.92358 45.4609 6.92358 47.198C6.92358 48.935 6.92358 52.2891 6.92358 52.2891H32.8281C32.8281 52.2891 32.8281 48.9348 32.8281 47.198C32.8279 45.4609 31.9145 43.125 29.5337 43.125Z"
                                fill="#F5C827"
                              />
                            </svg>
                            <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__title_label_1">
                              You can win
                            </span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__title_label_2">
                                BONUS
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__title_label_3">
                                points!
                              </span>
                            </div>
                          </div>
                          <button
                            id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__details_button"
                            className="secondary"
                          >
                            <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__details_button_label">
                              Details
                            </span>
                          </button>
                        </div>
                        <div>
                          <div className="system-ui-container__tournaments_main__body_description_promo_block__details_timer">
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__timer_hours">
                                24
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__timer_hours_label">
                                hours
                              </span>
                            </div>
                            <span>:</span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__timer_minutes">
                                12
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__timer_minutes_label">
                                mins
                              </span>
                            </div>
                            <span>:</span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__timer_seconds">
                                24
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__bonus_details__timer_seconds_label">
                                sec
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="system-ui-container__tournaments_main__body_content">
                  <div
                    id="system_ui__tournaments__controller_tournaments_upcoming_screen__container_info"
                    className="system-ui-container__tournaments_start_screen__info"
                  />
                  <div className="system-ui-container__tournaments_start_screen__submit_container">
                    <div className="system-ui-container__tournaments_start_screen__submit_container__warning">
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="019-information" clipPath="url(#clip0_492_1001)">
                          <g id="ESSENTIAL UI">
                            <path
                              id="Vector"
                              d="M46.9734 9.66845C46.0706 5.5922 42.1191 1.85814 38.0316 1.06501C35.5416 0.567198 28.5938 -0.0478016 24 1.08499e-05C19.4062 -0.0506142 12.4584 0.562511 9.96844 1.0622C5.88094 1.85814 1.92937 5.5922 1.03125 9.66845C0.511875 12.1434 0.0075 15.5109 0 20.1075C0.0075 24.7013 0.511875 28.0697 1.03125 30.5456C1.93406 34.6219 5.88562 38.3559 9.97312 39.1491C11.3175 39.4172 13.9613 39.7209 16.8328 39.9347C17.1578 40.4453 17.5106 40.9891 17.8913 41.5659C19.4156 43.8741 20.5809 45.4819 21.4641 46.6022C22.9341 48.466 25.0744 48.466 26.5444 46.6022C27.4275 45.4819 28.5928 43.8741 30.1172 41.5659C30.4978 40.9884 30.8506 40.4447 31.1756 39.9347C34.0472 39.7209 36.6919 39.4172 38.0363 39.1491C42.1237 38.3559 46.0753 34.6219 46.9781 30.5456C47.4919 28.0697 47.9972 24.7031 48.0047 20.1075C47.9925 15.51 47.4872 12.1444 46.9734 9.66845Z"
                              fill="#F68407"
                            />
                            <path
                              id="Vector_2"
                              d="M24 1.08499e-05C19.4063 -0.0506142 12.4584 0.562511 9.96844 1.0622C5.88094 1.85814 1.92938 5.5922 1.03125 9.66845C0.511875 12.1434 0.0075 15.5109 0 20.1066C0.0075 24.7003 0.511875 28.0697 1.03125 30.5456C1.56281 32.9484 3.15563 35.2331 5.21063 36.8653C7.2002 37.3393 9.23851 37.5781 11.2838 37.5769C25.6866 37.5769 37.3622 25.9013 37.3622 11.4994C37.3654 7.74783 36.5563 4.04005 34.9903 0.630948C31.7878 0.271886 27.2906 -0.0337392 24 1.08499e-05Z"
                              fill="#FE9D11"
                            />
                            <g id="Group">
                              <path
                                id="Vector_3"
                                d="M26.6512 33.734C26.5888 34.0259 26.4432 34.2935 26.2322 34.5046C26.0211 34.7157 25.7535 34.8612 25.4616 34.9237C24.493 35.0737 23.507 35.0737 22.5384 34.9237C22.2464 34.8615 21.9787 34.716 21.7676 34.5049C21.5565 34.2938 21.411 34.026 21.3487 33.734C21.2 32.7656 21.2 31.7802 21.3487 30.8118C21.4114 30.5203 21.557 30.2531 21.7681 30.0425C21.9792 29.8319 22.2467 29.6869 22.5384 29.625C23.507 29.475 24.493 29.475 25.4616 29.625C25.7536 29.6871 26.0214 29.8325 26.2325 30.0437C26.4437 30.2548 26.5891 30.5226 26.6512 30.8146C26.8 31.783 26.8 32.7684 26.6512 33.7368V33.734Z"
                                fill="white"
                              />
                              <path
                                id="Vector_4"
                                d="M21.3412 8.91937C21.3412 8.21423 21.6213 7.53796 22.1199 7.03935C22.6185 6.54074 23.2948 6.26062 23.9999 6.26062C24.7051 6.26062 25.3813 6.54074 25.88 7.03935C26.3786 7.53796 26.6587 8.21423 26.6587 8.91937V23.8322C26.6587 24.5373 26.3786 25.2136 25.88 25.7122C25.3813 26.2108 24.7051 26.4909 23.9999 26.4909C23.2948 26.4909 22.6185 26.2108 22.1199 25.7122C21.6213 25.2136 21.3412 24.5373 21.3412 23.8322V8.91937Z"
                                fill="white"
                              />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_492_1001">
                            <rect width={48} height={48} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__warning">
                        Happy Hours Tournament does not affect game RTP
                      </span>
                    </div>
                    <button
                      id="system_ui__tournaments__controller_tournaments_upcoming_screen__button_ok"
                      className="secondary"
                    >
                      <span id="system_ui__tournaments__controller_tournaments_upcoming_screen__button_ok_label">
                        Ok
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="system_ui__controller_honesty"
          className="hidden"
          style={{ transform: "scale(1) translateZ(0px)" }}
        >
          <div className="ui-container__honesty_container__content">
            <div className="ui-container__honesty_container__title">
              <span id="system_ui__controller_honesty__label">
                Honesty Control
              </span>
              <button
                id="system_ui__controller_honesty__close_button"
                data-color="transparent"
              >
                <svg
                  fill="none"
                  height={40}
                  viewBox="0 0 40 40"
                  width={40}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  >
                    <path d="m15.2812 24.7165 9.4334-9.4333" />
                    <path d="m24.7146 24.7165-9.4334-9.4333" />
                    <path d="m14.9987 36.6665h10c8.3333 0 11.6667-3.3334 11.6667-11.6667v-10c0-8.33334-3.3334-11.66667-11.6667-11.66667h-10c-8.33334 0-11.66667 3.33333-11.66667 11.66667v10c0 8.3333 3.33333 11.6667 11.66667 11.6667z" />
                  </g>
                </svg>
              </button>
            </div>
            <div className="ui-container__honesty_container__body">
              <div
                className="ui-container__honesty_container__desc"
                id="system_ui__controller_honesty__description"
              >
                Our honesty control system ensures that we cannot cannot
                manipulate the result because the field is generated prior the
                start of the game and right after clicking on the Play! button.
                It gives you an opportunity to control the outcome of your own
                bets and make sure that these results are truly honest. For
                example, you need to connect the string from the Result field to
                the secret salt from the Secret Salt field that you can find
                below. If you applied the Sha256 function to the received line
                you see the hash code that was issued to you before the start of
                the game. It indicates the game is completely honest. Please
                note: at each start of the game the field is changed and a new
                salt is issued.
              </div>
              <div className="ui-container__honesty_container__info">
                <div className="ui-container__honesty_container__info__item">
                  <div
                    id="system_ui__controller_honesty__result"
                    className="ui-container__honesty_container__info__title"
                  >
                    Result
                  </div>
                  <input
                    id="system_ui__controller_honesty__result_input"
                    readOnly
                  />
                </div>
                <div className="ui-container__honesty_container__info__item">
                  <dev
                    id="system_ui__controller_honesty__salt"
                    className="ui-container__honesty_container__info__title"
                  >
                    Secret Salt
                  </dev>
                  <input
                    id="system_ui__controller_honesty__salt_input"
                    readOnly
                  />
                </div>
                <div className="ui-container__honesty_container__info__item">
                  <dev
                    id="system_ui__controller_honesty__prev_hash"
                    className="ui-container__honesty_container__info__title"
                  >
                    Result Hash For Previous Round
                  </dev>
                  <input
                    id="system_ui__controller_honesty__prev_hash_input"
                    readOnly
                  />
                </div>
                <div className="ui-container__honesty_container__info__item">
                  <dev
                    id="system_ui__controller_honesty__current_hash"
                    className="ui-container__honesty_container__info__title"
                  >
                    Result Hash For Current Round
                  </dev>
                  <input
                    id="system_ui__controller_honesty__current_hash_input"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="system_ui__controller_tournaments" className="hidden">
          <div
            id="system_ui__tournaments__controller_tournaments__root"
            className="system-ui-container__tournaments"
            data-orientation="portrait"
            style={{
              transform: "scale(0.348584) translateZ(0px)",
              width: "918px",
              height: "1920px",
              left: "-299px",
              top: "-621.25px",
            }}
          >
            <div
              id="system_ui__tournaments__controller_tournaments__controller_tournaments__modal_bonus_details"
              className="hidden"
            >
              <div className="system-ui-container__modal_wrapper">
                <div
                  id="system_ui__tournaments__controller_tournaments__modal_bonus_details__scale_root"
                  className="system-ui-container__modal_container system-ui-container__tournaments__modal__rules"
                  data-orientation="portrait"
                >
                  <div className="system-ui-container__tournaments__modal__rules__header">
                    <svg
                      width={130}
                      height={92}
                      viewBox="0 0 130 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M130 92L64.375 26.125L51.875 60.625L13.375 75.125L30.25 92H81.5H130Z"
                        fill="#ED1132"
                      />
                      <path
                        d="M65.8758 31.625C65.8758 30.1093 65.8003 28.6116 65.6571 27.1335L39.1417 0.657657C38.7491 0.252641 38.2003 0 37.5951 0H2.15643C0.970493 0 0.00018096 0.970313 0.00018096 2.15625V6.36184C0.00018096 6.94295 0.233235 7.47213 0.610399 7.86097L4.2913 11.5156C4.2913 13.0255 4.2913 14.6488 4.2913 16.1893C4.2913 19.7592 5.3457 21.7774 7.46638 23.8546L15.005 31.3937C15.0814 32.46 14.6302 33.5514 13.6492 34.3205L10.525 36.7702C6.35824 40.1057 4.29112 42.0623 4.29112 47.0607C4.29112 49.7048 4.29112 52.5951 4.29112 54.7317H2.15625C0.970313 54.7317 0 55.702 0 56.888V61.0938C0 61.7561 0.302775 62.351 0.77661 62.7474L15.5194 77.4184C16.9539 77.5531 18.4063 77.625 19.8758 77.625C45.2809 77.625 65.8758 57.0301 65.8758 31.625Z"
                        fill="#ED1132"
                      />
                      <path
                        d="M26.1012 28.9294L29.2255 26.4797C33.3922 23.1442 35.4594 21.1876 35.4594 16.1892C35.4594 11.191 35.4594 5.31055 35.4594 5.31055H4.29004C4.29004 5.31055 4.29004 11.1908 4.29004 16.1892C4.29004 21.1874 6.35716 23.144 10.5239 26.4797L13.6482 28.9294C15.468 30.3565 15.4682 32.8935 13.6482 34.3206L10.5239 36.7702C6.35716 40.1058 4.29004 42.0624 4.29004 47.0608C4.29004 52.0589 4.29004 57.9394 4.29004 57.9394H35.4592C35.4592 57.9394 35.4592 52.0591 35.4592 47.0608C35.4592 42.0626 33.392 40.106 29.2253 36.7702L26.101 34.3206C24.2812 32.8935 24.2814 30.3563 26.1012 28.9294Z"
                        fill="white"
                      />
                      <path
                        d="M37.5949 8.51809H2.15625C0.970313 8.51809 0 7.54777 0 6.36184V2.15625C0 0.970313 0.970313 0 2.15625 0H37.5949C38.7809 0 39.7512 0.970313 39.7512 2.15625V6.36184C39.7512 7.54777 38.7809 8.51809 37.5949 8.51809Z"
                        fill="#56CCF2"
                      />
                      <path
                        d="M37.5949 63.2495H2.15625C0.970313 63.2495 0 62.2792 0 61.0933V56.8877C0 55.7018 0.970313 54.7314 2.15625 54.7314H37.5949C38.7809 54.7314 39.7512 55.7018 39.7512 56.8877V61.0933C39.7512 62.2792 38.7809 63.2495 37.5949 63.2495Z"
                        fill="#56CCF2"
                      />
                      <path
                        d="M7.20752 19.6758C7.20752 19.6758 7.95628 22.1614 12.4783 25.5156C15.1093 27.467 17.753 29.4006 19.8748 31.6245C19.8748 31.6245 24.641 27.467 27.272 25.5156C31.7942 22.1614 32.5427 19.6758 32.5427 19.6758H7.20752Z"
                        fill="#F5C827"
                      />
                      <path
                        d="M29.5337 43.125C28.5242 43.125 11.2273 43.125 10.2178 43.125C7.83693 43.125 6.92358 45.4609 6.92358 47.198C6.92358 48.935 6.92358 52.2891 6.92358 52.2891H32.8281C32.8281 52.2891 32.8281 48.9348 32.8281 47.198C32.8279 45.4609 31.9145 43.125 29.5337 43.125Z"
                        fill="#F5C827"
                      />
                    </svg>
                    <div>
                      <span id="system_ui__tournaments__controller_tournaments__modal_bonus_details__header_title" />
                    </div>
                    <button
                      id="system_ui__tournaments__controller_tournaments__modal_bonus_details__close_button"
                      className="system-ui-container__close_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                          fill="#17142A"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.3965 34.6032L34.6032 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.6032 34.6032L21.3965 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="system-ui-container__tournaments__modal__rules__body">
                    <div className="system-ui-container__tournaments__modal__rules__body_content">
                      <h1 id="system_ui__tournaments__controller_tournaments__modal_bonus_details__title" />
                      <p id="system_ui__tournaments__controller_tournaments__modal_bonus_details__description" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="system-ui-container__tournaments_main">
              <div id="system_ui__tournaments__controller_tournaments__controller_tournaments__header">
                <div className="system-ui-container__tournaments_main__header">
                  <div>
                    <tournaments-logo className="tournament_logo"></tournaments-logo>
                  </div>
                  <div>
                    <button
                      id="system_ui__tournaments__controller_tournaments__header__button_archive"
                      className="system-ui-container__stroke_button"
                    >
                      <span id="system_ui__tournaments__controller_tournaments__header__button_archive_label">
                        Archive
                      </span>
                    </button>
                    <button
                      id="system_ui__tournaments__controller_tournaments__header__close_button"
                      className="system-ui-container__close_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.9989 51.3331H34.9989C46.6655 51.3331 51.3322 46.6664 51.3322 34.9997V20.9997C51.3322 9.33305 46.6655 4.66638 34.9989 4.66638H20.9989C9.33219 4.66638 4.66553 9.33305 4.66553 20.9997V34.9997C4.66553 46.6664 9.33219 51.3331 20.9989 51.3331Z"
                          fill="#17142A"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.3965 34.6032L34.6032 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34.6032 34.6032L21.3965 21.3965"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="system_ui__tournaments__controller_tournaments__controller_tournaments__spinner"
                className="system-ui-container__tournaments_main__preloader hidden"
              >
                <div
                  id="common_ui__controller_tournaments__spinner__root"
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
                <span id="system_ui__tournaments__controller_tournaments__loading_label">
                  Loading...
                </span>
              </div>
              <div className="system-ui-container__tournaments_main__title">
                <span id="system_ui__tournaments__controller_tournaments__title_1">
                  Golden Gates
                </span>
              </div>
              <div className="system-ui-container__tournaments_main__body">
                <div className="system-ui-container__tournaments_main__body_description">
                  <div className="system-ui-container__tournaments_main__body_description_title">
                    <span id="system_ui__tournaments__controller_tournaments__title_2">
                      Golden Gates
                    </span>
                  </div>
                  <div className="system-ui-container__tournaments_main__body_description_promo_block">
                    <div id="system_ui__tournaments__controller_tournaments__controller_tournaments__banner">
                      <div className="system-ui-container__tournaments_main__body_description_promo_block__banner_box">
                        <img
                          id="system_ui__tournaments__controller_tournaments__banner__banner"
                          alt=""
                        />
                        <div
                          id="system_ui__tournaments__controller_tournaments__banner__ended_label"
                          className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__end_label"
                        >
                          Ended
                        </div>
                        <div
                          id="system_ui__tournaments__controller_tournaments__banner__banner_panel"
                          className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay"
                        >
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__starts_block"
                            id="system_ui__tournaments__controller_tournaments__banner__starts_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments__banner__starts_label">
                              Tournament starts:
                            </span>
                            <div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments__banner__starts_days_value">
                                  1
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments__banner__starts_days_label">
                                  d
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments__banner__starts_hours_value">
                                  23
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments__banner__starts_hours_label">
                                  h
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments__banner__starts_minutes_value">
                                  15
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments__banner__starts_minutes_label">
                                  min
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__ends_block"
                            id="system_ui__tournaments__controller_tournaments__banner__ends_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments__banner__ends_label">
                              Tournament ends:
                            </span>
                            <div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments__banner__ends_days_value">
                                  1
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments__banner__ends_days_label">
                                  d
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments__banner__ends_hours_value">
                                  23
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments__banner__ends_hours_label">
                                  h
                                </span>
                              </div>
                              <div>
                                <span id="system_ui__tournaments__controller_tournaments__banner__ends_minutes_value">
                                  15
                                </span>
                                <span id="system_ui__tournaments__controller_tournaments__banner__ends_minutes_label">
                                  min
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            className="system-ui-container__tournaments_main__body_description_promo_block__banner_box__timer_overlay__ended_block"
                            id="system_ui__tournaments__controller_tournaments__banner__ended_block"
                          >
                            <span id="system_ui__tournaments__controller_tournaments__banner__title" />
                            <span id="system_ui__tournaments__controller_tournaments__banner__dates" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="system_ui__tournaments__controller_tournaments__controller_tournaments__bonus_details">
                      <div
                        id="system_ui__tournaments__controller_tournaments__bonus_details__container_root"
                        className="system-ui-container__tournaments_main__body_description_promo_block__details"
                      >
                        <div>
                          <div className="system-ui-container__tournaments_main__body_description_promo_block__details_title">
                            <svg
                              width={130}
                              height={92}
                              viewBox="0 0 130 92"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="clock_shadow">
                                <path
                                  d="M130 92L64.375 26.125L51.875 60.625L13.375 75.125L30.25 92H81.5H130Z"
                                  fill="#ED1132"
                                />
                                <path
                                  d="M65.8758 31.625C65.8758 30.1093 65.8003 28.6116 65.6571 27.1335L39.1417 0.657657C38.7491 0.252641 38.2003 0 37.5951 0H2.15643C0.970493 0 0.00018096 0.970313 0.00018096 2.15625V6.36184C0.00018096 6.94295 0.233235 7.47213 0.610399 7.86097L4.2913 11.5156C4.2913 13.0255 4.2913 14.6488 4.2913 16.1893C4.2913 19.7592 5.3457 21.7774 7.46638 23.8546L15.005 31.3937C15.0814 32.46 14.6302 33.5514 13.6492 34.3205L10.525 36.7702C6.35824 40.1057 4.29112 42.0623 4.29112 47.0607C4.29112 49.7048 4.29112 52.5951 4.29112 54.7317H2.15625C0.970313 54.7317 0 55.702 0 56.888V61.0938C0 61.7561 0.302775 62.351 0.77661 62.7474L15.5194 77.4184C16.9539 77.5531 18.4063 77.625 19.8758 77.625C45.2809 77.625 65.8758 57.0301 65.8758 31.625Z"
                                  fill="#ED1132"
                                />
                              </g>
                              <path
                                d="M26.1012 28.9294L29.2255 26.4797C33.3922 23.1442 35.4594 21.1876 35.4594 16.1892C35.4594 11.191 35.4594 5.31055 35.4594 5.31055H4.29004C4.29004 5.31055 4.29004 11.1908 4.29004 16.1892C4.29004 21.1874 6.35716 23.144 10.5239 26.4797L13.6482 28.9294C15.468 30.3565 15.4682 32.8935 13.6482 34.3206L10.5239 36.7702C6.35716 40.1058 4.29004 42.0624 4.29004 47.0608C4.29004 52.0589 4.29004 57.9394 4.29004 57.9394H35.4592C35.4592 57.9394 35.4592 52.0591 35.4592 47.0608C35.4592 42.0626 33.392 40.106 29.2253 36.7702L26.101 34.3206C24.2812 32.8935 24.2814 30.3563 26.1012 28.9294Z"
                                fill="white"
                              />
                              <path
                                d="M37.5949 8.51809H2.15625C0.970313 8.51809 0 7.54777 0 6.36184V2.15625C0 0.970313 0.970313 0 2.15625 0H37.5949C38.7809 0 39.7512 0.970313 39.7512 2.15625V6.36184C39.7512 7.54777 38.7809 8.51809 37.5949 8.51809Z"
                                fill="#56CCF2"
                              />
                              <path
                                d="M37.5949 63.2495H2.15625C0.970313 63.2495 0 62.2792 0 61.0933V56.8877C0 55.7018 0.970313 54.7314 2.15625 54.7314H37.5949C38.7809 54.7314 39.7512 55.7018 39.7512 56.8877V61.0933C39.7512 62.2792 38.7809 63.2495 37.5949 63.2495Z"
                                fill="#56CCF2"
                              />
                              <path
                                d="M7.20752 19.6758C7.20752 19.6758 7.95628 22.1614 12.4783 25.5156C15.1093 27.467 17.753 29.4006 19.8748 31.6245C19.8748 31.6245 24.641 27.467 27.272 25.5156C31.7942 22.1614 32.5427 19.6758 32.5427 19.6758H7.20752Z"
                                fill="#F5C827"
                              />
                              <path
                                d="M29.5337 43.125C28.5242 43.125 11.2273 43.125 10.2178 43.125C7.83693 43.125 6.92358 45.4609 6.92358 47.198C6.92358 48.935 6.92358 52.2891 6.92358 52.2891H32.8281C32.8281 52.2891 32.8281 48.9348 32.8281 47.198C32.8279 45.4609 31.9145 43.125 29.5337 43.125Z"
                                fill="#F5C827"
                              />
                            </svg>
                            <span id="system_ui__tournaments__controller_tournaments__bonus_details__title_label_1">
                              You can win
                            </span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__title_label_2">
                                BONUS
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__title_label_3">
                                points!
                              </span>
                            </div>
                          </div>
                          <button
                            id="system_ui__tournaments__controller_tournaments__bonus_details__details_button"
                            className="secondary"
                          >
                            <span id="system_ui__tournaments__controller_tournaments__bonus_details__details_button_label">
                              Details
                            </span>
                          </button>
                        </div>
                        <div>
                          <div className="system-ui-container__tournaments_main__body_description_promo_block__details_timer">
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__timer_hours">
                                24
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__timer_hours_label">
                                hours
                              </span>
                            </div>
                            <span>:</span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__timer_minutes">
                                12
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__timer_minutes_label">
                                mins
                              </span>
                            </div>
                            <span>:</span>
                            <div>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__timer_seconds">
                                24
                              </span>
                              <span id="system_ui__tournaments__controller_tournaments__bonus_details__timer_seconds_label">
                                sec
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="system_ui__tournaments__controller_tournaments__controller_tournaments__company_logo">
                      <div className="system-ui-container__tournaments_main__body_description_promo_block__company">
                        <svg
                          width={161}
                          height={32}
                          viewBox="0 0 161 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_213_285)">
                            <mask id="path-1-inside-1_213_285" fill="white">
                              <path d="M46.6376 24.9386C44.8556 24.9386 43.2176 24.5246 41.7236 23.6966C40.2476 22.8686 39.0686 21.7166 38.1866 20.2405C37.3226 18.7465 36.8906 17.0725 36.8906 15.2185C36.8906 13.3645 37.3226 11.6995 38.1866 10.2235C39.0686 8.74754 40.2476 7.59554 41.7236 6.76753C43.2176 5.93953 44.8556 5.52553 46.6376 5.52553C48.4196 5.52553 50.0486 5.93953 51.5246 6.76753C53.0186 7.59554 54.1886 8.74754 55.0346 10.2235C55.8986 11.6995 56.3306 13.3645 56.3306 15.2185C56.3306 17.0725 55.8986 18.7465 55.0346 20.2405C54.1706 21.7166 53.0006 22.8686 51.5246 23.6966C50.0486 24.5246 48.4196 24.9386 46.6376 24.9386ZM46.6376 20.7266C48.1496 20.7266 49.3556 20.2225 50.2556 19.2145C51.1736 18.2065 51.6326 16.8745 51.6326 15.2185C51.6326 13.5445 51.1736 12.2125 50.2556 11.2225C49.3556 10.2145 48.1496 9.71054 46.6376 9.71054C45.1076 9.71054 43.8836 10.2055 42.9656 11.1955C42.0656 12.1855 41.6156 13.5265 41.6156 15.2185C41.6156 16.8925 42.0656 18.2335 42.9656 19.2415C43.8836 20.2315 45.1076 20.7266 46.6376 20.7266Z" />
                              <path d="M67.8092 9.52154C69.5732 9.52154 70.9772 10.0975 72.0212 11.2495C73.0832 12.3835 73.6142 13.9495 73.6142 15.9475V24.7496H69.0242V16.5685C69.0242 15.5605 68.7632 14.7775 68.2412 14.2195C67.7192 13.6615 67.0172 13.3825 66.1352 13.3825C65.2532 13.3825 64.5512 13.6615 64.0292 14.2195C63.5072 14.7775 63.2462 15.5605 63.2462 16.5685V24.7496H58.6292V9.68354H63.2462V11.6815C63.7142 11.0155 64.3442 10.4935 65.1362 10.1155C65.9282 9.71954 66.8192 9.52154 67.8092 9.52154Z" />
                              <path d="M81.1696 4.76953V24.7496H76.5526V4.76953H81.1696Z" />
                              <path d="M99.6354 9.68354L90.1854 31.9046H85.2174L88.6734 24.2366L82.5444 9.68354H87.7014L91.1844 19.1065L94.6404 9.68354H99.6354Z" />
                              <path d="M105.652 11.8165C106.102 11.1145 106.723 10.5475 107.515 10.1155C108.307 9.68354 109.234 9.46754 110.296 9.46754C111.538 9.46754 112.663 9.78254 113.671 10.4125C114.679 11.0425 115.471 11.9425 116.047 13.1125C116.641 14.2825 116.938 15.6415 116.938 17.1895C116.938 18.7375 116.641 20.1055 116.047 21.2935C115.471 22.4636 114.679 23.3726 113.671 24.0206C112.663 24.6506 111.538 24.9656 110.296 24.9656C109.252 24.9656 108.325 24.7496 107.515 24.3176C106.723 23.8856 106.102 23.3276 105.652 22.6436V31.9316H101.035V9.68354H105.652V11.8165ZM112.24 17.1895C112.24 16.0375 111.916 15.1375 111.268 14.4895C110.638 13.8235 109.855 13.4905 108.919 13.4905C108.001 13.4905 107.218 13.8235 106.57 14.4895C105.94 15.1555 105.625 16.0645 105.625 17.2165C105.625 18.3685 105.94 19.2775 106.57 19.9435C107.218 20.6095 108.001 20.9426 108.919 20.9426C109.837 20.9426 110.62 20.6095 111.268 19.9435C111.916 19.2595 112.24 18.3415 112.24 17.1895Z" />
                              <path d="M123.707 4.76953V24.7496H119.09V4.76953H123.707Z" />
                              <path d="M125.865 17.1895C125.865 15.6415 126.153 14.2825 126.729 13.1125C127.323 11.9425 128.124 11.0425 129.132 10.4125C130.14 9.78254 131.265 9.46754 132.507 9.46754C133.569 9.46754 134.496 9.68354 135.288 10.1155C136.098 10.5475 136.719 11.1145 137.151 11.8165V9.68354H141.768V24.7496H137.151V22.6166C136.701 23.3186 136.071 23.8856 135.261 24.3176C134.469 24.7496 133.542 24.9656 132.48 24.9656C131.256 24.9656 130.14 24.6506 129.132 24.0206C128.124 23.3726 127.323 22.4636 126.729 21.2935C126.153 20.1055 125.865 18.7375 125.865 17.1895ZM137.151 17.2165C137.151 16.0645 136.827 15.1555 136.179 14.4895C135.549 13.8235 134.775 13.4905 133.857 13.4905C132.939 13.4905 132.156 13.8235 131.508 14.4895C130.878 15.1375 130.563 16.0375 130.563 17.1895C130.563 18.3415 130.878 19.2595 131.508 19.9435C132.156 20.6095 132.939 20.9426 133.857 20.9426C134.775 20.9426 135.549 20.6095 136.179 19.9435C136.827 19.2775 137.151 18.3685 137.151 17.2165Z" />
                              <path d="M160.228 9.68354L150.778 31.9046H145.81L149.266 24.2366L143.137 9.68354H148.294L151.777 19.1065L155.233 9.68354H160.228Z" />
                            </mask>
                            <path
                              d="M46.6376 24.9386C44.8556 24.9386 43.2176 24.5246 41.7236 23.6966C40.2476 22.8686 39.0686 21.7166 38.1866 20.2405C37.3226 18.7465 36.8906 17.0725 36.8906 15.2185C36.8906 13.3645 37.3226 11.6995 38.1866 10.2235C39.0686 8.74754 40.2476 7.59554 41.7236 6.76753C43.2176 5.93953 44.8556 5.52553 46.6376 5.52553C48.4196 5.52553 50.0486 5.93953 51.5246 6.76753C53.0186 7.59554 54.1886 8.74754 55.0346 10.2235C55.8986 11.6995 56.3306 13.3645 56.3306 15.2185C56.3306 17.0725 55.8986 18.7465 55.0346 20.2405C54.1706 21.7166 53.0006 22.8686 51.5246 23.6966C50.0486 24.5246 48.4196 24.9386 46.6376 24.9386ZM46.6376 20.7266C48.1496 20.7266 49.3556 20.2225 50.2556 19.2145C51.1736 18.2065 51.6326 16.8745 51.6326 15.2185C51.6326 13.5445 51.1736 12.2125 50.2556 11.2225C49.3556 10.2145 48.1496 9.71054 46.6376 9.71054C45.1076 9.71054 43.8836 10.2055 42.9656 11.1955C42.0656 12.1855 41.6156 13.5265 41.6156 15.2185C41.6156 16.8925 42.0656 18.2335 42.9656 19.2415C43.8836 20.2315 45.1076 20.7266 46.6376 20.7266Z"
                              stroke="url(#paint0_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M67.8092 9.52154C69.5732 9.52154 70.9772 10.0975 72.0212 11.2495C73.0832 12.3835 73.6142 13.9495 73.6142 15.9475V24.7496H69.0242V16.5685C69.0242 15.5605 68.7632 14.7775 68.2412 14.2195C67.7192 13.6615 67.0172 13.3825 66.1352 13.3825C65.2532 13.3825 64.5512 13.6615 64.0292 14.2195C63.5072 14.7775 63.2462 15.5605 63.2462 16.5685V24.7496H58.6292V9.68354H63.2462V11.6815C63.7142 11.0155 64.3442 10.4935 65.1362 10.1155C65.9282 9.71954 66.8192 9.52154 67.8092 9.52154Z"
                              stroke="url(#paint1_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M81.1696 4.76953V24.7496H76.5526V4.76953H81.1696Z"
                              stroke="url(#paint2_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M99.6354 9.68354L90.1854 31.9046H85.2174L88.6734 24.2366L82.5444 9.68354H87.7014L91.1844 19.1065L94.6404 9.68354H99.6354Z"
                              stroke="url(#paint3_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M105.652 11.8165C106.102 11.1145 106.723 10.5475 107.515 10.1155C108.307 9.68354 109.234 9.46754 110.296 9.46754C111.538 9.46754 112.663 9.78254 113.671 10.4125C114.679 11.0425 115.471 11.9425 116.047 13.1125C116.641 14.2825 116.938 15.6415 116.938 17.1895C116.938 18.7375 116.641 20.1055 116.047 21.2935C115.471 22.4636 114.679 23.3726 113.671 24.0206C112.663 24.6506 111.538 24.9656 110.296 24.9656C109.252 24.9656 108.325 24.7496 107.515 24.3176C106.723 23.8856 106.102 23.3276 105.652 22.6436V31.9316H101.035V9.68354H105.652V11.8165ZM112.24 17.1895C112.24 16.0375 111.916 15.1375 111.268 14.4895C110.638 13.8235 109.855 13.4905 108.919 13.4905C108.001 13.4905 107.218 13.8235 106.57 14.4895C105.94 15.1555 105.625 16.0645 105.625 17.2165C105.625 18.3685 105.94 19.2775 106.57 19.9435C107.218 20.6095 108.001 20.9426 108.919 20.9426C109.837 20.9426 110.62 20.6095 111.268 19.9435C111.916 19.2595 112.24 18.3415 112.24 17.1895Z"
                              stroke="url(#paint4_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M123.707 4.76953V24.7496H119.09V4.76953H123.707Z"
                              stroke="url(#paint5_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M125.865 17.1895C125.865 15.6415 126.153 14.2825 126.729 13.1125C127.323 11.9425 128.124 11.0425 129.132 10.4125C130.14 9.78254 131.265 9.46754 132.507 9.46754C133.569 9.46754 134.496 9.68354 135.288 10.1155C136.098 10.5475 136.719 11.1145 137.151 11.8165V9.68354H141.768V24.7496H137.151V22.6166C136.701 23.3186 136.071 23.8856 135.261 24.3176C134.469 24.7496 133.542 24.9656 132.48 24.9656C131.256 24.9656 130.14 24.6506 129.132 24.0206C128.124 23.3726 127.323 22.4636 126.729 21.2935C126.153 20.1055 125.865 18.7375 125.865 17.1895ZM137.151 17.2165C137.151 16.0645 136.827 15.1555 136.179 14.4895C135.549 13.8235 134.775 13.4905 133.857 13.4905C132.939 13.4905 132.156 13.8235 131.508 14.4895C130.878 15.1375 130.563 16.0375 130.563 17.1895C130.563 18.3415 130.878 19.2595 131.508 19.9435C132.156 20.6095 132.939 20.9426 133.857 20.9426C134.775 20.9426 135.549 20.6095 136.179 19.9435C136.827 19.2775 137.151 18.3685 137.151 17.2165Z"
                              stroke="url(#paint6_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <path
                              d="M160.228 9.68354L150.778 31.9046H145.81L149.266 24.2366L143.137 9.68354H148.294L151.777 19.1065L155.233 9.68354H160.228Z"
                              stroke="url(#paint7_linear_213_285)"
                              strokeWidth="22.5"
                              mask="url(#path-1-inside-1_213_285)"
                            />
                            <g clipPath="url(#clip1_213_285)">
                              <path
                                d="M27.1875 15C27.1875 21.731 21.731 27.1875 15 27.1875C8.26903 27.1875 2.8125 21.731 2.8125 15C2.8125 8.26903 8.26903 2.8125 15 2.8125C21.731 2.8125 27.1875 8.26903 27.1875 15Z"
                                stroke="url(#paint8_linear_213_285)"
                                strokeWidth="3.75"
                              />
                              <ellipse
                                cx={15}
                                cy={15}
                                rx="4.6875"
                                ry="4.68751"
                                fill="url(#paint9_linear_213_285)"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint5_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint6_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint7_linear_213_285"
                              x1="98.5594"
                              y1="4.76953"
                              x2="98.5594"
                              y2="31.9316"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint8_linear_213_285"
                              x1={15}
                              y1="0.9375"
                              x2={15}
                              y2="29.0625"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <linearGradient
                              id="paint9_linear_213_285"
                              x1={15}
                              y1="10.3125"
                              x2={15}
                              y2="19.6875"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F79F2D" />
                              <stop offset={1} stopColor="#FF4D4D" />
                            </linearGradient>
                            <clipPath id="clip0_213_285">
                              <rect width={161} height={32} fill="white" />
                            </clipPath>
                            <clipPath id="clip1_213_285">
                              <rect width={30} height={30} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span id="system_ui__tournaments__controller_tournaments__company_logo__company_label">
                          Games Provider
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="system-ui-container__tournaments_main__body_content">
                  <div id="system_ui__tournaments__controller_tournaments__controller_tournaments__tabs">
                    <div className="system-ui-container__tournaments_main__body_content__stat">
                      <div className="system-ui-container__tournaments_main__body_content__stat_tabs">
                        <button
                          id="system_ui__tournaments__controller_tournaments__tabs__prizes_tab"
                          className="primary"
                          data-view-key="controller_tournaments__tabs__prizes_view"
                        >
                          <span id="system_ui__tournaments__controller_tournaments__tabs__prizes_tab_label">
                            Prizes
                          </span>
                        </button>
                        <button
                          id="system_ui__tournaments__controller_tournaments__tabs__nominations_tab"
                          className="primary"
                          data-view-key="controller_tournaments__tabs__nominations_view"
                        >
                          <span id="system_ui__tournaments__controller_tournaments__tabs__nominations_tab_label">
                            Nominations
                          </span>
                        </button>
                        <button
                          id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_tab"
                          className="primary active"
                          data-view-key="controller_tournaments__tabs__leaderboard_view"
                        >
                          <span id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_tab_label">
                            Leaderboard
                          </span>
                        </button>
                        <button
                          id="system_ui__tournaments__controller_tournaments__tabs__rules_tab"
                          className="primary"
                          data-view-key="controller_tournaments__tabs__rules_view"
                        >
                          <span id="system_ui__tournaments__controller_tournaments__tabs__rules_tab_label">
                            Rules
                          </span>
                        </button>
                      </div>
                      <div
                        id="system_ui__tournaments__controller_tournaments__tabs__player_stats_container"
                        className="system-ui-container__tournaments_main__body_content__stat_player"
                      >
                        <div>
                          <span id="system_ui__tournaments__controller_tournaments__tabs__player_score_label">
                            My Score:
                          </span>
                          <span id="system_ui__tournaments__controller_tournaments__tabs__player_score">
                            456
                          </span>
                        </div>
                        <div>
                          <span id="system_ui__tournaments__controller_tournaments__tabs__player_rank_label">
                            My Rank:
                          </span>
                          <span id="system_ui__tournaments__controller_tournaments__tabs__player_rank">
                            12472
                          </span>
                        </div>
                      </div>
                      <div
                        id="system_ui__tournaments__controller_tournaments__tabs__view_container"
                        className="system-ui-container__tournaments_main__body_content__stat_view"
                      >
                        <table className="tournament_leaderboard">
                          <thead>
                            <tr>
                              <th>
                                <span id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__table_head_1">
                                  Rank
                                </span>
                              </th>
                              <th>
                                <span id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__table_head_2">
                                  UserID
                                </span>
                              </th>
                              <th>
                                <span id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__table_head_3">
                                  Score
                                </span>
                              </th>
                              <th>
                                <span id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__table_head_4">
                                  Prize
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody
                            id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__main_table_body"
                            className="system-ui-container__tournaments__stat_list"
                            data-has-more-items
                          >
                            <tr className="placeholder">
                              <td>
                                <span>•••</span>
                              </td>
                              <td>
                                <button
                                  id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__load_more"
                                  className="secondary"
                                >
                                  <span id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__load_more_label">
                                    Load more
                                  </span>
                                  <div className="system-ui-container__tournaments__spinner small">
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
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          <tbody
                            id="system_ui__tournaments__controller_tournaments__tabs__leaderboard_view__sub_table_body"
                            className="system-ui-container__tournaments__stat_list"
                          />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="system_ui__tournaments__controller_tournaments__controller_tournaments__archive_list"
              className="hidden"
            >
              <div
                id="system_ui__tournaments__controller_tournaments__archive_list__root"
                className="system-ui-container__tournaments system-ui-container__tournaments_archive"
                data-orientation="portrait"
              >
                <div className="system-ui-container__tournaments_main">
                  <div className="system-ui-container__tournaments_main__header">
                    <button
                      id="system_ui__tournaments__controller_tournaments__archive_list__button_back"
                      className="system-ui-container__back_button"
                    >
                      <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 51.3333H35C46.6667 51.3333 51.3333 46.6667 51.3333 35V21C51.3333 9.33334 46.6667 4.66667 35 4.66667H21C9.33334 4.66667 4.66667 9.33334 4.66667 21V35C4.66667 46.6667 9.33334 51.3333 21 51.3333Z"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30.94 36.2367L22.7267 28L30.94 19.7633"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div>
                      <tournaments-logo className="tournament_logo"></tournaments-logo>
                    </div>
                  </div>
                  <div className="system-ui-container__tournaments_main__title system-ui-container__tournaments_archive_title">
                    <span id="system_ui__tournaments__controller_tournaments__archive_list__title">
                      Archive
                    </span>
                  </div>
                  <div
                    id="system_ui__tournaments__controller_tournaments__archive_list__container_list"
                    className="system-ui-container__tournaments_main__body system-ui-container__tournaments_archive_list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootSystemUI;
