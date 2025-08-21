import { useSelector } from "react-redux";
import BallContainer from "./BallContainer";
import BetSlip from "./BetSlip";
import History from "./History";
import InfoPanel from "./InfoPanel";
import Navbar from "./Navbar";
import NotUsing from "./NotUsing";
import NotUsing2 from "./NotUsing2";
import RootSystemUI from "./RootSystemUI";
import Statistic from "./Statistic";

const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const errorMessage = sessionStorage.getItem("errorMessage");
  return token ? (
    <>
      {/* Not using this component */}
      <RootSystemUI />

      <div className="wrapper" style={{ display: "flex" }}>
        {/* Not using this component */}
        <NotUsing2 />

        <Navbar />
        <main>
          {/* Not using this component */}
          <InfoPanel />

          <Statistic />
          <History />
          <BallContainer />
          <BetSlip />
        </main>
      </div>
      {/* Not using this component */}
      <NotUsing />
    </>
  ) : (
    <div className="error-container">
      <div className="alert alert-danger text-center m-0 " role="alert">
        {errorMessage ||
          "URL parameters are missing or invalid. Key: token | Value"}
      </div>
    </div>
  );
};

export default Home;
