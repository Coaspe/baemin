const Second = () => {
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <div className="col-span-2 z-20 mt-40 relative">
          <div className="w-full flex justify-between">
            <div>
              <img src="/images/ctn02_text_03@2x.png" alt="second text" />
              <div className="mt-8 text-white text-sm">
                <p>배달이 안되던 동네 맛집까지 ~</p>
                <p>배민라이더스가 직접 배달해드립니다.</p>
                <p className="mt-3">
                  서울 전지역, 경기 및 광역시 일부 지역에서 서비스 이용 가능!
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/img-people@2x.png"
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

export default Second;
