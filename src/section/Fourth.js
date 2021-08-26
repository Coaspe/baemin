import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Fourth = ({ page }) => {
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
    if (page === "fourthPage") {
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
              <img src="/images/ctn06_text_01@2x.png" alt="fourth text" />
              <div className="mt-8 text-white text-sm">
                <p>궁금한 맛은 직접 물어보고, 구경하는 재미</p>
                <p>이제 배민에서 생생하게 경험하세요!</p>
              </div>
            </div>
          </div>
          <motion.img
            src="/images/img_shoppinglive.png"
            alt="fourth person"
            className="absolute w-5/12"
            style={{ bottom: -500, right: 0 }}
            variants={variants}
            initial="initial"
            animate="animate"
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

export default Fourth;
