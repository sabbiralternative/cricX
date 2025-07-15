import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth";
import { useEffect } from "react";
// import { useSound } from "../../context/ApiProvider";
const Navbar = () => {
  // const { sound, setSound } = useSound();
  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();
  /* auth */
  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);

  // const handleSoundToggle = () => {
  //   if (sound) {
  //     sessionStorage.setItem("sound", false);
  //     setSound(false);
  //   } else {
  //     sessionStorage.removeItem("sound");
  //     setSound(true);
  //   }
  // };
  return (
    <header className="header">
      <div className="header__flex_container">
        <div className="header__flex_container__logo">
          <img src="/logo_9e20568b3918c1cb0ae1.svg" alt="Cosmo-X logo" />
        </div>
        <div>
          <div className="card_grid">
            <div className="back_panel rounded flex items-center justify-center">
              <img
                className="user_avatar"
                src="/avatar_9d8932e6f9c4d3ca7914.svg"
                alt="User avatar"
              />
            </div>
            <div>
              <div className="flex items-center">
                <span id="balanceLabel">Balance</span>
              </div>
              <div className="back_panel back_panel_text rounded flex items-center">
                <span id="balanceValue" style={{ fontSize: "12.2004px" }}>
                  {balance} inr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="settings-wrapper"
        className="settings_wrapper //drop_down_active"
      >
        <div
          id="settings-block"
          className="header__flex_container settings_block hidden_in_portrait"
        >
          <div className="switch_settings_item settings_item">
            <label
              htmlFor="toggle_animation"
              data-localization-key="ui_animation"
            >
              Animation
            </label>
            <div className="button r">
              <input
                id="toggle_animation"
                type="checkbox"
                className="checkbox"
              />
              <div className="knobs" />
              <div className="layer" />
            </div>
          </div>
          <button
            id="volume-button"
            className="flex items-center justify-center square-56 rounded back_panel settings_item"
          >
            <span className="icon landscape">
              <img
                src="https://cricx.onlyplaygames.net/assets/images/sound_muted_422c266a72da7f6c3e02.svg"
                alt="sound muted icon"
              />
            </span>
            <div className="switch_settings_item portrait">
              <label
                htmlFor="toggle_volume"
                className="settings-title"
                data-localization-key="ui_sound"
              >
                Sound
              </label>
              <div className="button r">
                <input
                  id="toggle_volume"
                  type="checkbox"
                  className="checkbox"
                />
                <div className="knobs" />
                <div className="layer" />
              </div>
            </div>
          </button>
          <button
            id="provably_fair_settings_button"
            className="flex items-center justify-center square-56 rounded back_panel settings_item"
          >
            <img src="/desktop_lock_76571a36ef84c560d37c.svg" />
            <span className="icon" />
            <span
              className="settings-title"
              data-localization-key="ui_provably_fair_settings"
            >
              Provably Fair Settings
            </span>
          </button>
          <button
            id="provably_fair_info_settings_button"
            className="flex items-center justify-center square-56 rounded back_panel settings_item info_button"
          >
            <img src="assets/images/how_to_play_67fb1be84e4be39c22dc.svg" />
            <span className="icon" />
            <span
              className="settings-title"
              data-localization-key="ui_provably_fair_rules"
            >
              What is Provably Fair?
            </span>
          </button>
          <button
            id="freebets_settings_button"
            className="flex items-center justify-center square-56 rounded back_panel settings_item"
          >
            <div className="settings_text_icon hidden_in_portrait">Free</div>
            <span
              className="settings-title"
              data-localization-key="ui_freebets"
            >
              Free Bets
            </span>
          </button>
        </div>
        <button className="flex items-center justify-center square-56 rounded back_panel burger settings_menu_button mobile">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5698 18.5V14.6"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5698 7.45V5.5"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5702 12.65C17.0062 12.65 18.1702 11.486 18.1702 10.05C18.1702 8.61407 17.0062 7.45001 15.5702 7.45001C14.1343 7.45001 12.9702 8.61407 12.9702 10.05C12.9702 11.486 14.1343 12.65 15.5702 12.65Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.43018 18.5V16.55"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.43018 9.4V5.5"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.43008 16.55C9.86602 16.55 11.0301 15.3859 11.0301 13.95C11.0301 12.5141 9.86602 11.35 8.43008 11.35C6.99414 11.35 5.83008 12.5141 5.83008 13.95C5.83008 15.3859 6.99414 16.55 8.43008 16.55Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center square-56 rounded back_panel burger wrapper_menu_button">
          <svg
            fill="none"
            height={49}
            viewBox="0 0 49 49"
            width={49}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#fff" strokeLinecap="round" strokeWidth="2.5">
              <path d="m6.5 14.5h36" />
              <path d="m6.5 24.5h36" />
              <path d="m6.5 34.5h36" />
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
