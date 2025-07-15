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
  return (
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
  );
};

export default Home;
