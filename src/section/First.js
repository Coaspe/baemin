import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const First = ({ page }) => {
  const upVariants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: 150,
      y: 150,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };
  const [variants, setVariants] = useState(null);
  useEffect(() => {
    if (page === "firstPage") {
      setVariants(upVariants);
    }
  }, [page]);
  return (
    <div className="section overflow-hidden">
      <div className="w-full h-full grid grid-cols-4">
        <div></div>
        <div className="col-span-2 z-20 mt-40">
          <div className="w-full flex justify-between">
            <div>
              <img
                src="/images/ctn01_text_01@2x.png"
                alt="first text"
                className=""
              />
              <div className="mt-8 text-white text-sm">
                <p>3천만 이상이 선택한 배달의민족,</p>
                <p>업계 최다 배달가능 업소 보유 중!</p>
                <p className="mt-3">(2017년 11월 기준)</p>
              </div>
            </div>
            <div className="z-20 relative h-full">
              <div className="w-2/3 relative">
                <img src="/images/img-road@2x.png" alt="load" />
                <AnimatePresence>
                  <motion.img
                    src="/images/img-bike@2x.png"
                    alt="bike"
                    className="absolute w-52"
                    style={{ bottom: 0, left: 90 }}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  />
                </AnimatePresence>
              </div>
            </div>
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

export default First;
