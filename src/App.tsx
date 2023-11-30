import Container from "./Elements/Container";
import MobileLS from "./Elements/MobileLS";

function App() {
  return (
    <>
      <MobileLS />
      <div className="mx-auto mw-940px d-flex h-lg-fullscreen justify-content-center align-items-center z-1 position-relative px-3  mt-100px mt-lg-0px mb-120px mb-lg-0px">
        <Container />
      </div>
    </>
  );
}

export default App;
