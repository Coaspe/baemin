import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Thrid = ({ page }) => {
  const upVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -500,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };
  const [variants, setVariants] = useState(null);
  useEffect(() => {
    if (page === "thirdPage") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <motion.div className="col-span-2 z-20 mt-40 relative">
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
          <motion.img
            src="/images/img-present@2x.png"
            alt="second people"
            className="absolute w-5/12"
            style={{ bottom: -500, right: 0 }}
            variants={variants}
            initial="initial"
            animate="animate"
          />
        </motion.div>
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
