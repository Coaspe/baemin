const Fourth = () => {
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <div className="col-span-2 z-20 mt-40 relative">
          <div className="w-full flex justify-between">
            <div>
              <img src="/images/ctn03_text_03@2x.png" alt="fourth text" />
              <div className="mt-8 text-white text-sm">
                <p>배민페이, 네이버페이 등은 물론</p>
                <p>각종 신용카드까지 결제 가능</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/img-flag@2x.png"
              alt="second people"
              className="absolute w-5/12"
              style={{ bottom: 0, right: 0 }}
            />
          </div>
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

export default Fourth;
