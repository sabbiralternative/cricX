import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

const BallContainer = () => {
  const [gameStatus, setGameStatus] = useState("pending");
  const [multiply, setMultiply] = useState(1.0);

  useEffect(() => {
    if (gameStatus === "pending") {
      setMultiply(1.0);
      setTimeout(() => {
        setGameStatus("started");
      }, 4.433 * 1000);
    }
    if (gameStatus === "started") {
      const randomBetweenTwenty = Math.random() * (20 - 5) + 5;
      setTimeout(() => {
        setGameStatus("ended");
      }, randomBetweenTwenty * 1000);
    }
    if (gameStatus === "ended") {
      setTimeout(() => {
        setGameStatus("pending");
      }, 3000);
    }
  }, [gameStatus]);

  useEffect(() => {
    let interval;

    if (gameStatus === "started") {
      let currentMultiplier = 1.0;

      interval = setInterval(() => {
        setMultiply((prev) => prev - currentMultiplier);

        currentMultiplier = Number((currentMultiplier + 0.01).toFixed(2));
        setMultiply(currentMultiplier.toFixed(2));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);
  return (
    <div id="container" className="sub rounded">
      <div id="miniPreloader" style={{ display: "none" }}>
        <img src="assets/images/spinner_b085e9e37721931f0094.svg" alt="" />
        <span>Synchronize</span>
      </div>
      <div
        className={cn(
          `game_stage`,
          gameStatus === "started" && "game_started",
          gameStatus === "ended" && "game_ended"
        )}
      >
        <div className="stage_overlay" style={{ transition: "1s" }} />
        <div className="top_container">
          <div id="tooltip" className="hide">
            <span>Didnt pick it up</span>
          </div>
          <div className="score_container">
            <span>BYE BYE</span>{" "}
            {gameStatus !== "pending" && <span>{multiply}×</span>}
          </div>
          <div
            className={cn(
              "game_state_container",
              gameStatus !== "pending" && "hidden"
            )}
          >
            <span>MAKE YOUR BETS</span>
            <div className="progressbar_container">
              <div className="progressbar_background">
                <div
                  className={cn(
                    "progressbar_line",
                    gameStatus === "pending" && "animated"
                  )}
                />
              </div>
            </div>
          </div>
          <div id="smilesPanel" className="smile_picker">
            <div id="smilesSlider" className="smile_picker__collection">
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/tongue_a2a4e51edf08f7c05cc8.webp"
                  alt="tongue smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/swearing_4c2a4f1006de49df6602.webp"
                  alt="swearing smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/sunglasses_fbd7bf90fb4154f976e8.webp"
                  alt="sunglasses smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/slot_machine_47fb2326908688563d04.webp"
                  alt="slot_machine smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/screaming_in_fear_0554ba771ca11bacc9ed.webp"
                  alt="screaming_in_fear smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/pile_of_poo_acac822df02675866302.webp"
                  alt="pile_of_poo smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/money_mouth_c6bcc1fff0e1e987e656.webp"
                  alt="money_mouth smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/four_leaf_clover_cb56eb2d926749459c11.webp"
                  alt="four_leaf_clover smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/folded_hands_d42f9da330398f3509f2.webp"
                  alt="folded_hands smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/flushed_08e1fb887a7222907ca3.webp"
                  alt="flushed smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/fire_568e35fa96cc840c065f.webp"
                  alt="fire smile"
                />
              </button>
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/beer_9e8e485e0d0384737a8c.webp"
                  alt="beer smile"
                />
              </button>
            </div>
            <div className="smile_picker__trigger">
              <button>
                <img
                  src="https://cricx.onlyplaygames.net/assets/images/smile_icon_aa9f40abb2b9eaa513ab.webp"
                  alt="open_smiles smile"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="smiles_container" />
        <div className="static_background" />
        <div className="background_wrapper background_wrapper_wind">
          <div className="background_wind" />
          <div className="background_wind" />
        </div>
        <div className="background_wrapper background_wrapper_stars_1">
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
        </div>
        <div className="background_wrapper background_wrapper_stars_2">
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
          <div className="background_stars">
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_yellow_e31630c0c2aea0a95863.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
            <img src="/star_blue_22a4ecfd6f2978cc752a.svg" alt="" />
          </div>
        </div>
        <div className="graph_box">
          <div className="left_graph_wrapper">
            <div className="left_graph">
              <div>
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
              </div>
              <div>
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="bottom_graph_wrapper">
            <div className="bottom_graph">
              <div>
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
              </div>
              <div>
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
                <img src="/dot_66e139f06d8378b3869d.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="space_ship_wrapper">
          <div className="space_ship">
            <div className="ship" />
          </div>
          <div className="space_ship_background" />
        </div>
      </div>
    </div>
  );
};

export default BallContainer;
