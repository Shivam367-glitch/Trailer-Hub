import Loading from "../assets/loading.gif";
const MainLoader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 vw-100 position-fixed top-0 start-0 z-3"
    >
      <img src={Loading} alt="Loading..." />
    </div>
  );
};

export default MainLoader;
