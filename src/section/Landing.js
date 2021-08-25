const Landing = () => {
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div className="absolute z-20 w-44" style={{ right: 0 }}>
          <img src="/images/rider-button-pc@2x.png" alt="rider button" />
        </div>
        <div className="absolute z-10" style={{ bottom: -140 }}>
          <img
            src="/images/main_05@2x.jpg"
            alt="main background"
            className="w-full h-full"
          />
        </div>
        <div></div>
        <div className="col-span-2 z-20 mt-40 relative">
          <div className="z-20 absolute w-64" style={{ right: 0, bottom: 0 }}>
            <img src="/images/btn_down@2x.png" alt="button download" />
          </div>
          <img
            src="/images/main_text_05@2x.png"
            alt="main text"
            className="w-1/2"
          />
        </div>
        <img
          src="/images/scroll@2x.png"
          alt="main scroll text"
          className="z-20 absolute"
          style={{ bottom: 20, left: "50%" }}
        />
      </div>
    </div>
  );
};

export default Landing;
