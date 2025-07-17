import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

import Settings from "./Settings";
const Navbar = () => {
  const [showSettings, setShowSettings] = useState(false);

  const { token, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();
  /* auth */
  useEffect(() => {
    if (token) {
      handleAuth();
    }
  }, [token, handleAuth]);

  return (
    <header className="header">
      <div className="header__flex_container">
        <div className="header__flex_container__logo">
          <img src="/logo_f778ad2b2fb8393abe51.svg" alt="Cosmo-X logo" />
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
                  {balance}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Settings setShowSettings={setShowSettings} showSettings={showSettings} />
    </header>
  );
};

export default Navbar;
