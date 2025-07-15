const NotUsing2 = () => {
  return (
    <>
      <div id="synchronization_modal" className="modal_overlay hidden">
        <div className="modal_container">
          <div className="change_client_seed_modal__body">
            <img src="assets/images/spinner_b085e9e37721931f0094.svg" alt="" />
          </div>
          <h2 className="synchronization_modal__label">Synchronization...</h2>
        </div>
      </div>
      <div id="provably_fair_modal" className="modal_overlay hidden">
        <div className="modal_container provably_fair_modal">
          <div className="provably_fair_modal__head">
            <h3 data-localization-key="provably_fair_modal_title">
              What is Provably Fair?
            </h3>
            <button className="close">
              <img
                src="assets/images/close_icon2_407d488faf9b7dd5df2f.svg"
                alt=""
              />
            </button>
          </div>
          <hr />
          <div className="provably_fair_modal__body">
            <div>
              <svg
                width={64}
                height={65}
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2252 14.0143L26.5582 8.55842C30.0465 7.13027 33.9561 7.13027 37.4444 8.55842L50.778 14.0145C53.5345 15.1435 55.3346 17.824 55.3346 20.8013V30.3133C55.3346 43.4176 45.5259 55.5047 32.4399 58.446C32.1511 58.5109 31.8515 58.5109 31.5627 58.446C18.4767 55.5047 8.66797 43.4176 8.66797 30.3133V20.8013C8.66797 17.8228 10.4695 15.1393 13.2252 14.0143ZM49.2625 17.7163L35.9289 12.2602C33.4118 11.2297 30.5908 11.2297 28.0734 12.2603L14.7386 17.7169C13.4866 18.228 12.668 19.4475 12.668 20.8013V30.3133C12.668 41.5349 21.1684 52.0099 32.4399 54.5433L32.0013 54.4386L32.2635 54.3747C42.9523 51.6327 50.9866 41.7349 51.3236 31.0136L51.3346 30.3133V20.8013C51.3346 19.4482 50.5164 18.2299 49.2625 17.7163Z"
                  fill="#429D06"
                />
                <path
                  d="M39.2538 26.0819C40.0348 25.3008 41.3011 25.3008 42.0822 26.0819C42.7922 26.7919 42.8568 27.903 42.2758 28.686L42.0822 28.9103L32.0822 38.9103C31.3721 39.6204 30.261 39.6849 29.4781 39.104L29.2538 38.9103L23.2538 32.9103C22.4727 32.1293 22.4727 30.8629 23.2538 30.0819C23.9638 29.3718 25.0749 29.3073 25.8579 29.8882L26.0822 30.0819L30.668 34.6668L39.2538 26.0819Z"
                  fill="#429D06"
                />
              </svg>
              <h3 data-localization-key="provably_fair_modal_desc">
                Provably Fair - 100% FAIR GAME
              </h3>
            </div>
            <h3 data-localization-key="provably_fair_modal_block_0_title">
              How it works?
            </h3>
            <div className="provably_fair_modal__body__block">
              <h3 data-localization-key="provably_fair_modal_block_0_subtitle_0">
                Quick explanation:
              </h3>
              <p data-localization-key="provably_fair_modal_block_0_description_0">
                Result of each round (Games Fly away multiplier ) is not
                generated on our servers. Its generated with help of round
                players and is fully transparent. This way, its impossible for
                anyone to manipulate game output. Also, anyone can check and
                confirm game fairness
              </p>
            </div>
            <div className="provably_fair_modal__body__block">
              <h3 data-localization-key="provably_fair_modal_block_0_subtitle_1">
                More information
              </h3>
              <p data-localization-key="provably_fair_modal_block_0_description_1">
                The round result is generated from four independent participants
                in the round: the game operator and three random players from
                the previous round. The operator generates a server seed (a
                random 64-character string). Each player generates a client seed
                on their side. <br />
                When the round finishes, the game merges the server seed with
                the three client seeds. A SHA512 hash is generated from the
                merged characters, and from this hash, the game result is
                derived. <br />A hashed version of the combined seed, excluding
                the 8 result characters, is publicly available before the round
                starts (In the user menu, check Provably Fair Settings and then
                Next Combined SHA512 Hash Without Result).
              </p>
            </div>
            <div className="provably_fair_modal__body__block">
              <div className="provably_fair_modal__scheme">
                <div className="provably_fair_modal__scheme__participants">
                  <div className="provably_fair_modal__scheme__participants__one_participant">
                    <div className="icon">
                      <img
                        src="assets/images/server_a03d5882f5196c38bfd5.svg"
                        alt=""
                      />
                    </div>
                    <div className="seed_preview">S1</div>
                  </div>
                  <div className="provably_fair_modal__scheme__participants__one_participant">
                    <div className="icon">
                      <img
                        src="assets/images/avatar2_56b8df44027dfa1fbf0f.svg"
                        alt=""
                      />
                    </div>
                    <div className="seed_preview">C1</div>
                  </div>
                  <div className="provably_fair_modal__scheme__participants__one_participant">
                    <div className="icon">
                      <img
                        src="assets/images/avatar2_56b8df44027dfa1fbf0f.svg"
                        alt=""
                      />
                    </div>
                    <div className="seed_preview">C2</div>
                  </div>
                  <div className="provably_fair_modal__scheme__participants__one_participant">
                    <div className="icon">
                      <img
                        src="assets/images/avatar2_56b8df44027dfa1fbf0f.svg"
                        alt=""
                      />
                    </div>
                    <div className="seed_preview">C3</div>
                  </div>
                </div>
                <div className="provably_fair_modal__scheme__graphic">
                  <div className="empty" />
                  <div className="left_line line" />
                  <div className="plus">+</div>
                  <div className="line" />
                  <div className="plus">+</div>
                  <div className="line" />
                  <div className="plus">+</div>
                  <div className="right_line line" />
                  <div className="empty" />
                </div>
                <div className="equal_symbol">=</div>
                <div className="seed_preview combined_seed_preview">
                  S1C1C2C3
                </div>
                <div className="arrow">
                  <img
                    src="assets/images/arrow_37b8642db6d584377c32.svg"
                    alt="arrow"
                  />
                </div>
                <div className="seed_preview combined_hash_preview">
                  <div className="combined_hash_preview__title">SHA512</div>
                  <div className="combined_hash_preview__hash">
                    2bb4032ac793cca2a8f4a57c7ba2f991a18eabfb26d7e2d
                    <br />
                    b4e7a3ad869c473220ea7ae0b149e415d5b50
                    <br />
                    47eb3813a74fe7e7f5d36c6c71449b059114<span>0f88faed</span>
                  </div>
                </div>
                <div className="arrow">
                  <img
                    src="assets/images/arrow_37b8642db6d584377c32.svg"
                    alt="arrow"
                  />
                </div>
                <div className="seed_preview combined_seed_preview">
                  <div
                    className="combined_hash_preview__title"
                    data-localization-key="provably_fair_scheme_hex"
                  >
                    HEX
                  </div>
                  <span>0f88faed</span>
                </div>
                <div className="arrow">
                  <img
                    src="assets/images/arrow_37b8642db6d584377c32.svg"
                    alt="arrow"
                  />
                </div>
                <div
                  className="seed_preview combined_seed_preview"
                  data-localization-key="provably_fair_scheme_decimal"
                >
                  Decimal
                </div>
                <div className="arrow">
                  <img
                    src="assets/images/arrow_37b8642db6d584377c32.svg"
                    alt="arrow"
                  />
                </div>
                <div className="formula">
                  <div className="seed_preview combined_seed_preview">
                    <div
                      className="combined_hash_preview__title"
                      data-localization-key="provably_fair_scheme_constant"
                    >
                      Constant
                    </div>
                    4294967295
                  </div>
                  <div>×</div>
                  <div className="seed_preview combined_seed_preview">
                    <div
                      className="combined_hash_preview__title"
                      data-localization-key="provably_fair_scheme_rtp"
                    >
                      RTP
                    </div>
                    <div className="provably_rtp">0.97</div>
                  </div>
                  <div>/</div>
                  <div className="seed_preview combined_seed_preview">
                    <div
                      className="combined_hash_preview__title"
                      data-localization-key="provably_fair_scheme_decimal"
                    >
                      Decimal
                    </div>
                    <span className="green provably_decimal">260635373</span>
                  </div>
                </div>
                <div className="equal_symbol">=</div>
                <div className="seed_preview combined_seed_preview">
                  <div
                    className="combined_hash_preview__title"
                    data-localization-key="provably_fair_scheme_result"
                  >
                    Result
                  </div>
                  <div className="provably_result">15.98</div>
                </div>
              </div>
            </div>
            <h3 data-localization-key="provably_fair_modal_block_1_title">
              HOW TO CHECK
            </h3>
            <div className="provably_fair_modal__body__block">
              <ul>
                <li data-localization-key="provably_fair_modal_block_1_list_item_0">
                  You can check fairness of each round from game history, by
                  clicking on icon with result.
                </li>
                <li data-localization-key="provably_fair_modal_block_1_list_item_1">
                  In opened window, you will see server seed, 3 pair of players
                  seeds, combined hash and round result.
                </li>
                <li data-localization-key="provably_fair_modal_block_1_list_item_2">
                  Combined hash, excluding the 8 result characters, is publicly
                  available before the round starts (In the user menu, check
                  Provably Fair Settings and then Next Combined SHA512 Hash
                  Without Result). You can also change your client seed here.
                </li>
                <li data-localization-key="provably_fair_modal_block_1_list_item_3">
                  If you want to participate in round result generation, make
                  sure you are between first 3 players who make bet in previous
                  round
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="provably_fair_settings_modal"
        className="modal_overlay provably_fair_settings_modal_overlay hidden"
      >
        <div className="modal_container provably_fair_settings_modal">
          <div className="provably_fair_settings_modal__head">
            <h2 data-localization-key="provably_fair_settings_modal_title">
              Provably Fair Settings
            </h2>
            <button className="close">
              <img
                src="assets/images/close_icon2_407d488faf9b7dd5df2f.svg"
                alt=""
              />
            </button>
          </div>
          <div className="provably_fair_settings_modal__body">
            <div className="provably_fair_settings_modal__body__block provably_fair_settings_modal__body__info">
              <p data-localization-key="provably_fair_settings_modal_desc">
                This game uses Provably Fair technology to determine game
                result. This tool gives you ability to ease our seed and cheese
                the game
              </p>
              <div className="rules_link">
                <img
                  src="assets/images/question_checkmark_0096a0ea80306de7f5ec.svg"
                  className="rules_link__icon"
                />
                <h3
                  className="rules_link__label"
                  data-localization-key="provably_fair_settings_modal_rules_button"
                >
                  What is Provably Fair?
                </h3>
              </div>
            </div>
            <hr />
            <div className="provably_fair_settings_modal__body__block provably_fair_settings_modal__body__client_seed_block">
              <div>
                <div className="icon_with_border">
                  <img
                    src="assets/images/laptop_3d07f1fe5e8a9c8c37d8.svg"
                    className="rules_link__icon"
                  />
                </div>
                <div className="texts">
                  <div className="label">
                    <span className="counter">1.</span>
                    <span data-localization-key="provably_fair_settings_modal_client_seed_label">
                      Client (your) seed
                    </span>
                  </div>
                  <div
                    className="desc"
                    data-localization-key="provably_fair_settings_modal_client_seed_desc"
                  >
                    Round result is determined form combination of server seed
                    and first 3 bets of the round.
                  </div>
                </div>
              </div>
              <div className="choice_block">
                <div className="checkbox_and_label">
                  <input
                    className="checkbox"
                    data-mode="random"
                    type="checkbox"
                  />
                  <div
                    className="label"
                    data-localization-key="provably_fair_settings_modal_switch_random"
                  >
                    Random on every new game
                  </div>
                </div>
                <div className="seed_value_block">
                  <div
                    className="time_marker"
                    data-localization-key="provably_fair_settings_modal_client_seed_current"
                  >
                    Current:
                  </div>
                  <div className="value random_seed">9jgpUbOLISjXgqSmmCUd</div>
                  <button className="copy_button">
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.6719 4.58203H30.0052C33.457 4.58203 36.2552 7.38025 36.2552 10.832V24.1654C36.2552 27.6171 33.457 30.4154 30.0052 30.4154H16.6719C13.2201 30.4154 10.4219 27.6171 10.4219 24.1654V10.832C10.4219 7.38025 13.2201 4.58203 16.6719 4.58203ZM30.0052 7.08203H16.6719C14.6008 7.08203 12.9219 8.76096 12.9219 10.832V24.1654C12.9219 26.2364 14.6008 27.9154 16.6719 27.9154H30.0052C32.0763 27.9154 33.7552 26.2364 33.7552 24.1654V10.832C33.7552 8.76096 32.0763 7.08203 30.0052 7.08203Z"
                        fill="white"
                      />
                      <path
                        d="M11.6706 11.25C12.3609 11.25 12.9206 11.8096 12.9206 12.5C12.9206 13.1328 12.4503 13.6558 11.8402 13.7386L11.6706 13.75H10.0039C8.01913 13.75 6.3945 15.2919 6.26256 17.2433L6.25391 17.5V30.8333C6.25391 32.8181 7.79584 34.4427 9.74716 34.5747L10.0039 34.5833H23.3372C25.322 34.5833 26.9466 33.0414 27.0786 31.0901L27.0872 30.8333V29.1667C27.0872 28.4763 27.6469 27.9167 28.3372 27.9167C28.9701 27.9167 29.4931 28.3869 29.5758 28.997L29.5872 29.1667V30.8333C29.5872 34.1738 26.9666 36.9021 23.6692 37.0747L23.3372 37.0833H10.0039C6.66347 37.0833 3.93512 34.4627 3.76257 31.1653L3.75391 30.8333V17.5C3.75391 14.1596 6.37451 11.4312 9.67198 11.2587L10.0039 11.25H11.6706Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="choice_block disabled">
                <div className="checkbox_and_label">
                  <input
                    className="checkbox"
                    data-mode="manual"
                    type="checkbox"
                  />
                  <div
                    className="label"
                    data-localization-key="provably_fair_settings_modal_switch_manual"
                  >
                    Enter manually
                  </div>
                </div>
                <div className="seed_value_block_wrapper">
                  <div className="seed_value_block">
                    <div
                      className="time_marker"
                      data-localization-key="provably_fair_settings_modal_client_seed_current"
                    >
                      Current:
                    </div>
                    <div className="value manual_seed">
                      9jgpUbOLISjXgqSmmCUd
                    </div>
                    <button className="copy_button">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.6719 4.58203H30.0052C33.457 4.58203 36.2552 7.38025 36.2552 10.832V24.1654C36.2552 27.6171 33.457 30.4154 30.0052 30.4154H16.6719C13.2201 30.4154 10.4219 27.6171 10.4219 24.1654V10.832C10.4219 7.38025 13.2201 4.58203 16.6719 4.58203ZM30.0052 7.08203H16.6719C14.6008 7.08203 12.9219 8.76096 12.9219 10.832V24.1654C12.9219 26.2364 14.6008 27.9154 16.6719 27.9154H30.0052C32.0763 27.9154 33.7552 26.2364 33.7552 24.1654V10.832C33.7552 8.76096 32.0763 7.08203 30.0052 7.08203Z"
                          fill="white"
                        />
                        <path
                          d="M11.6706 11.25C12.3609 11.25 12.9206 11.8096 12.9206 12.5C12.9206 13.1328 12.4503 13.6558 11.8402 13.7386L11.6706 13.75H10.0039C8.01913 13.75 6.3945 15.2919 6.26256 17.2433L6.25391 17.5V30.8333C6.25391 32.8181 7.79584 34.4427 9.74716 34.5747L10.0039 34.5833H23.3372C25.322 34.5833 26.9466 33.0414 27.0786 31.0901L27.0872 30.8333V29.1667C27.0872 28.4763 27.6469 27.9167 28.3372 27.9167C28.9701 27.9167 29.4931 28.3869 29.5758 28.997L29.5872 29.1667V30.8333C29.5872 34.1738 26.9666 36.9021 23.6692 37.0747L23.3372 37.0833H10.0039C6.66347 37.0833 3.93512 34.4627 3.76257 31.1653L3.75391 30.8333V17.5C3.75391 14.1596 6.37451 11.4312 9.67198 11.2587L10.0039 11.25H11.6706Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="change">Change</button>
                </div>
              </div>
            </div>
            <div className="provably_fair_settings_modal__body__block provably_fair_settings_modal__body__client_seed_block provably_fair_settings_modal__body__server_seed_block">
              <div>
                <div className="icon_with_border">
                  <img
                    src="assets/images/desktop_lock_76571a36ef84c560d37c.svg"
                    className="rules_link__icon"
                  />
                </div>
                <div className="texts">
                  <div className="label">
                    <span className="counter">3.</span>
                    <span data-localization-key="provably_fair_settings_modal_combined_hash_label">
                      Combined SHA512 Hash Without Result
                    </span>
                  </div>
                </div>
              </div>
              <div className="public_hash">
                308543571df22e9f4945ea26bc53c6f918051290868450c553a210cffc9e9af093977e01a9c940b6132a483f31c25f1409578626ac01444521e01e1e
              </div>
            </div>
          </div>
          <div
            className="footer"
            data-localization-key="provably_fair_settings_modal_footer"
          >
            You can check fairness of each bet from bets history
          </div>
        </div>
      </div>
      <div
        id="provably_fair_round_data_modal"
        className="modal_overlay provably_fair_round_data_modal_overlay hidden"
      >
        <div className="modal_container provably_fair_round_data_modal">
          <div className="provably_fair_round_data_modal__head">
            <div className="title">
              <div data-localization-key="provably_fair_round_data_modal_title">
                ROUND
              </div>
              <div className="roundId">6048566</div>
              <div className="factor">1.68</div>
              <div className="time">18:04:29</div>
            </div>
            <button className="close">
              <img
                src="assets/images/close_icon2_407d488faf9b7dd5df2f.svg"
                alt=""
              />
            </button>
          </div>
          <div className="provably_fair_round_data_modal__description">
            <p data-localization-key="provably_fair_round_data_modal_desc">
              This game uses Provably Fair technology to determine game result.
              This tool gives you ability to ease our seed and cheese the game
            </p>
          </div>
          <hr />
          <div className="provably_fair_round_data_modal__body">
            <div className="provably_fair_round_data_modal__body__block provably_fair_round_data_modal__body__seed_block">
              <div>
                <div className="icon_with_border">
                  <img
                    src="assets/images/server_a03d5882f5196c38bfd5.svg"
                    className="rules_link__icon"
                  />
                </div>
                <div className="texts">
                  <div
                    className="label"
                    data-localization-key="provably_fair_round_data_modal_server_seed_label"
                  >
                    Server Seed
                  </div>
                  <div
                    className="desc"
                    data-localization-key="provably_fair_round_data_modal_server_seed_desc"
                  >
                    Generated on our side
                  </div>
                </div>
              </div>
              <div className="seed_info">
                <div className="value server_seed">
                  xx25baMRAJgaCjdT85KOVAhceRtd3KNyZDogn2ol
                </div>
              </div>
            </div>
            <div className="provably_fair_round_data_modal__body__block provably_fair_round_data_modal__body__seed_block">
              <div>
                <div className="icon_with_border">
                  <img
                    src="assets/images/laptop_3d07f1fe5e8a9c8c37d8.svg"
                    className="rules_link__icon"
                  />
                </div>
                <div className="texts">
                  <div
                    className="label"
                    data-localization-key="provably_fair_round_data_modal_client_seed_label"
                  >
                    Client seed
                  </div>
                  <div
                    className="desc"
                    data-localization-key="provably_fair_round_data_modal_client_seed_desc"
                  >
                    Generated on players side
                  </div>
                </div>
              </div>
              <div className="seed_info player_info">
                <div
                  className="title"
                  data-localization-key="provably_fair_round_data_modal_client_seed_player_0"
                >
                  Player N1:
                </div>
                <img
                  src="assets/images/avatar_9d8932e6f9c4d3ca7914.svg"
                  className="avatar"
                />
                <div className="player_name" />
                <div
                  className="seed_title"
                  data-localization-key="provably_fair_round_data_modal_client_seed_seed"
                >
                  Seed:
                </div>
                <div className="value" />
              </div>
              <div className="seed_info player_info">
                <div
                  className="title"
                  data-localization-key="provably_fair_round_data_modal_client_seed_player_1"
                >
                  Player N2:
                </div>
                <img
                  src="assets/images/avatar_9d8932e6f9c4d3ca7914.svg"
                  className="avatar"
                />
                <div className="player_name" />
                <div
                  className="seed_title"
                  data-localization-key="provably_fair_round_data_modal_client_seed_seed"
                >
                  Seed:
                </div>
                <div className="value" />
              </div>
              <div className="seed_info player_info">
                <div
                  className="title"
                  data-localization-key="provably_fair_round_data_modal_client_seed_player_3"
                >
                  Player N3:
                </div>
                <img
                  src="assets/images/avatar_9d8932e6f9c4d3ca7914.svg"
                  className="avatar"
                />
                <div className="player_name" />
                <div
                  className="seed_title"
                  data-localization-key="provably_fair_round_data_modal_client_seed_seed"
                >
                  Seed:
                </div>
                <div className="value" />
              </div>
            </div>
            <div className="provably_fair_round_data_modal__body__block provably_fair_round_data_modal__body__seed_block">
              <div>
                <div className="icon_with_border">
                  <img
                    src="assets/images/laptop_lock_9cf667650646b174142c.svg"
                    className="rules_link__icon"
                  />
                </div>
                <div className="texts">
                  <div
                    className="label"
                    data-localization-key="provably_fair_round_data_modal_combined_seed_label"
                  >
                    Combined seed
                  </div>
                  <div
                    className="desc"
                    data-localization-key="provably_fair_round_data_modal_combined_seed_desc"
                  >
                    Seed combined to make a hash
                  </div>
                </div>
              </div>
              <div className="seed_info">
                <div className="value combined_seed">
                  xx25baMRAJgaCjdT85KOVAhceRtd3KNyZDogn2ol
                </div>
              </div>
            </div>
            <div className="provably_fair_round_data_modal__body__block provably_fair_round_data_modal__body__seed_block">
              <div>
                <div className="icon_with_border">
                  <img
                    src="assets/images/desktop_lock_76571a36ef84c560d37c.svg"
                    className="rules_link__icon"
                  />
                </div>
                <div className="texts">
                  <div
                    className="label"
                    data-localization-key="provably_fair_round_data_modal_sha512_hash_label"
                  >
                    Combined SHA512 Hash:
                  </div>
                  <div
                    className="desc"
                    data-localization-key="provably_fair_round_data_modal_sha512_hash_desc"
                  >
                    Above seeds combined and converted to SHA512 Hash. This is
                    your game result
                  </div>
                </div>
              </div>
              <div className="seed_info">
                <div className="value combined_hash">
                  xx25baMRAJgaCjdT85KOVAhceRtd3KNyZDogn2ol
                </div>
              </div>
            </div>
            <div className="provably_fair_round_data_modal__body__block provably_fair_round_data_modal__body__result_block">
              <div className="result_item">
                <div data-localization-key="provably_fair_scheme_hex">HEX</div>
                <div className="seed_info result_secret_hex" />
              </div>
              <div className="result_item">
                <div data-localization-key="provably_fair_scheme_decimal">
                  Decimal
                </div>
                <div className="seed_info result_in_decimals" />
              </div>
              <div className="result_item">
                <div data-localization-key="provably_fair_scheme_constant">
                  Constant
                </div>
                <div className="seed_info">4294967295</div>
              </div>
              <div className="result_item">
                <div data-localization-key="provably_fair_scheme_rtp">RTP</div>
                <div className="seed_info result_server_constant">
                  4294967295
                </div>
              </div>
              <div className="result_item">
                <div data-localization-key="provably_fair_scheme_result">
                  Result
                </div>
                <div className="seed_info result_coef" />
              </div>
            </div>
            <div
              className="bottom_description"
              data-localization-key="provably_fair_round_data_modal_scheme_desc"
            >
              HEX → Decimal
              <br />
              Constant × RTP / Decimal = Result
              <br />
              All result values which less than 1.0 are equal to 1.0
              <br />
              <br />
              We take 8 last characters of SHA512 string and make decimal from
              it. After that we divide server constant to decimal. Server
              constant is always 4294967295 ×
              <span className="result_constant">0.95</span> and your number Is a
              Result of the round scaled to down.
            </div>
          </div>
        </div>
      </div>
      <div id="change_client_seed_modal" className="modal_overlay hidden">
        <div className="modal_container change_client_seed_modal">
          <div className="change_client_seed_modal__head">
            <h3 data-localization-key="change_client_seed_modal_title">
              Change Your Seed
            </h3>
            <button>
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2812 24.7165L24.7146 15.2832"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.7146 24.7165L15.2812 15.2832"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9987 36.6663H24.9987C33.332 36.6663 36.6654 33.333 36.6654 24.9997V14.9997C36.6654 6.66634 33.332 3.33301 24.9987 3.33301H14.9987C6.66536 3.33301 3.33203 6.66634 3.33203 14.9997V24.9997C3.33203 33.333 6.66536 36.6663 14.9987 36.6663Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="change_client_seed_modal__body">
            <input />
            <div className="buttons">
              <button
                className="change_button"
                data-localization-key="change_client_seed_modal_change_button"
              >
                Change
              </button>
              <button
                className="random_button"
                data-localization-key="change_client_seed_modal_random_button"
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="freebets_settings_modal" className="modal_overlay hidden">
        <div className="modal_container freebets_settings_modal">
          <div className="freebets_settings_modal__head">
            <h3 data-localization-key="freebets_settings_modal_title">
              Free Bet Management
            </h3>
            <button className="close">
              <img
                src="assets/images/close_icon2_407d488faf9b7dd5df2f.svg"
                alt=""
              />
            </button>
          </div>
          <hr />
          <div className="freebets_settings_modal__body //archive_mode">
            <div className="play_for_real_money_block active_option">
              <input type="checkbox" className="choose_real_money_checkbox" />
              <span
                data-localization-key="freebets_settings_modal_play_real_money_label"
                className="play_for_real_money_label"
              >
                PLAY FOR MONEY
              </span>
            </div>
            <div className="middle_block">
              <div
                className="middle_label activate_free_bets_label"
                data-localization-key="freebets_settings_modal_activate_freebets"
              >
                Activate Free Bets
              </div>
              <button className="middle_button archive_button">
                <img src="assets/images/clock_f591f1bb13c28b67c5da.svg" />
                <span data-localization-key="freebets_settings_modal_archive_button">
                  ARCHIVE
                </span>
              </button>
            </div>
            <div className="middle_block middle_block_archived">
              <button className="middle_button go_back_button">
                <img
                  src="assets/images/arrow_mini_2651b39ce7c0352f3598.svg"
                  alt="v"
                />
                <span>GO BACK</span>
              </button>
              <div
                className="middle_label"
                data-localization-key="freebets_settings_modal_archive_label"
              >
                Archive
              </div>
            </div>
            <div className="actived_freebets_block freebets_block //no_one_bets_mode">
              <div className="freebets_table">
                <div className="freebets_table__header">
                  <div
                    data-localization-key="freebets_settings_modal_quantity_label"
                    className="quantity_label label"
                  >
                    QUANTITY
                  </div>
                  <div className="bet_label label">BET (USD)</div>
                  <div className="wins_label label">WINS (USD)</div>
                </div>
                <div className="freebets_table__body" />
              </div>
              <div className="freebets_no_one_bets">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 29H17"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 17V19"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 17V19"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.1716 38L22.5858 41.4142C23.3669 42.1952 24.6331 42.1952 25.4142 41.4142L28.8284 38H36C39.3137 38 42 35.3137 42 32V12C42 8.68629 39.3137 6 36 6H12C8.68629 6 6 8.68629 6 12V32C6 35.3137 8.68629 38 12 38H19.1716Z"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div data-localization-key="freebets_settings_modal_no_active_bets">
                  No Active Bets
                </div>
              </div>
            </div>
            <div className="archived_freebets_block freebets_block //no_one_bets_mode">
              <div className="freebets_table freebets_table_archived">
                <div className="freebets_table__header">
                  <div
                    data-localization-key="freebets_settings_modal_quantity_label"
                    className="quantity_label label"
                  >
                    QUANTITY
                  </div>
                  <div className="bet_label label">BET (USD)</div>
                  <div className="wins_label label">WINS (USD)</div>
                </div>
                <div className="freebets_table__body">
                  <div className="freebets_item_template freebets_item">
                    <div className="freebets_base_info">
                      <input type="checkbox" className="freebets_checkbox" />
                      <div className="quantity_value">0</div>
                      <div className="bet_value">0.15</div>
                      <div className="wins_value">0.56</div>
                      <div className="freebet_arrow">
                        <img
                          src="assets/images/arrow_mini_2651b39ce7c0352f3598.svg"
                          alt="v"
                        />
                      </div>
                    </div>
                    <div className="freebets_additional_info">
                      <div className="freebets_additional_info__labels">
                        <div
                          data-localization-key="freebets_settings_modal_provided_lable"
                          className="provided_lable"
                        >
                          PROVIDED:
                        </div>
                        <div
                          data-localization-key="freebets_settings_modal_expiration_date_lable"
                          className="expiration_date_lable"
                        >
                          EXPIRATION DATE:
                        </div>
                      </div>
                      <div className="freebets_additional_info__values">
                        <div className="provided_value">29.11.24, 16:11</div>
                        <div className="expiration_date_value">
                          06.12.24, 00:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="freebets_no_one_bets freebets_no_one_bets_archived">
                <svg
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 29H17"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 17V19"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 17V19"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.1716 38L22.5858 41.4142C23.3669 42.1952 24.6331 42.1952 25.4142 41.4142L28.8284 38H36C39.3137 38 42 35.3137 42 32V12C42 8.68629 39.3137 6 36 6H12C8.68629 6 6 8.68629 6 12V32C6 35.3137 8.68629 38 12 38H19.1716Z"
                    stroke="#429D06"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div data-localization-key="freebets_settings_modal_no_archived_bets">
                  No Archived Bets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="freebets_panel" className="freebets_panel hidden">
        <div className="freebets_panel__bets_info_block">
          <div className="bets_label">Available free bets:</div>
          <div className="bets_value">20 (0.15 USD)</div>
          <button className="bets_collect_button hidden">Claim</button>
        </div>
        <div className="freebets_panel__wins_block">
          <div className="wins_label">Win INR</div>
          <div className="wins_value">100.00</div>
        </div>
        <div className="freebets_panel__settins_block">
          <img src="assets/images/settings_gear_9b859c91b94f65306a0a.svg" />
          <div className="freebet_settings_label">Manage</div>
        </div>
      </div>
      <div id="game_notifications" className="game_notifications">
        <div
          id="win_notification_template"
          className="game_notification win_notification"
        >
          <img
            className="check_mark"
            src="assets/images/check_mark_75036362c1f0a8a95656.svg"
            alt="✓"
          />
          <div className="coef_group">
            <div
              data-localization-key="win_notification_label"
              className="coef_label"
            >
              You have cashed out!
            </div>
            <div className="coef_value">1.34×</div>
          </div>
          <div className="win_group">
            <div className="win_label">Win INR</div>
            <div className="win_value">1.34</div>
          </div>
          <img
            className="close_button"
            src="assets/images/close_icon2_407d488faf9b7dd5df2f.svg"
            alt="x"
          />
        </div>
      </div>
    </>
  );
};

export default NotUsing2;
