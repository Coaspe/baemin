const Thrid = () => {
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <div className="col-span-2 z-20 mt-40 relative">
          <div className="w-full flex justify-between">
            <div>
              <img src="/images/ctn05_text_01@2x.png" alt="third text" />
              <div className="mt-8 text-white text-sm">
                <p>지금 밥 한끼 보내주고 싶은 사람에게 선물해보세요.</p>
                <p>
                  선물 받은 상품권으로 배민에서 자유롭게 주문할 수 있습니다.
                </p>
                <p className="mt-3">* 단, 전국별미, 사전예약 제외</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/img-present@2x.png"
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

export default Thrid;
