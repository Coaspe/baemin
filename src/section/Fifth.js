import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Fifth = ({ page, direction }) => {
  const upVariants = {
    initial: {
      opacity: 0,
      x: 0,
    },
    animate: {
      opacity: 1,
      x: "-160%",
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };
  const [variants, setVariants] = useState(null);
  useEffect(() => {
    if (page === "fifthPage") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <div className="col-span-2 z-20 mt-40 relative">
          <div className="w-full flex justify-between">
            <div>
              <img
                src="/images/ctn04_text_01@2x.png"
                alt="fifth text"
                className="w-2/3"
              />
              <div className="mt-8 text-white text-sm">
                <p>마트까지 가지 않아도, 기다리지 않아도</p>
                <p>주문하신 상품을 바로 배달해드립니다.</p>
                <p className="mt-3 opacity-50">
                  서울, 인천 및 경기 일부 지역에서 서비스 이용 가능!
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/scroll@2x.png"
          alt="main scroll text"
          className="z-20 absolute"
          style={{ bottom: "4%", left: "50%" }}
        />

        <motion.img
          src="/images/bmart_rider@2x.png"
          alt="second people"
          className="absolute w-1/5"
          style={{ bottom: "15%", left: "80%", opacity: 0 }}
          variants={variants}
          initial="initial"
          animate="animate"
        />
      </div>
    </div>
  );
};

export default Fifth;
