import { useSound } from "../../context/ApiProvider";
import { cn } from "../../utils/cn";

const Settings = ({ setShowSettings, showSettings }) => {
  const { sound, setSound } = useSound();

  const handleSoundToggle = () => {
    if (!sound) {
      // sessionStorage.setItem("sound", true);
      setSound(true);
    } else {
      // sessionStorage.removeItem("sound");
      setSound(false);
    }
  };

  return (
    <div
      id="settings-wrapper"
      className={cn(
        "settings_wrapper //drop_down_active",
        showSettings && "drop_down_active"
      )}
    >
      <div
        id="settings-block"
        className={cn(
          "header__flex_container settings_block ",
          !showSettings && "hidden_in_portrait"
        )}
      >
        <div className="switch_settings_item settings_item">
          <label
            htmlFor="toggle_animation"
            data-localization-key="ui_animation"
          >
            Animation
          </label>
          <div className="button r">
            <input id="toggle_animation" type="checkbox" className="checkbox" />
            <div className="knobs" />
            <div className="layer" />
          </div>
        </div>
        <button
          id="volume-button"
          className="flex items-center justify-center square-56 rounded back_panel settings_item"
        >
          <span onClick={handleSoundToggle} className="icon landscape">
            <img
              src={
                sound
                  ? "/sound_unmuted_edf1bf81f94e8f5ebd6b.svg"
                  : "/sound_muted_422c266a72da7f6c3e02.svg"
              }
              alt="sound unmuted icon"
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
            <div onClick={handleSoundToggle} className="button r">
              <input
                checked={sound ? true : false}
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
          <span className="settings-title" data-localization-key="ui_freebets">
            Free Bets
          </span>
        </button>
      </div>
      <button
        onClick={() => setShowSettings((prev) => !prev)}
        className="flex items-center justify-center square-56 rounded back_panel burger settings_menu_button mobile"
      >
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
  );
};

export default Settings;
