"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SMClickAnimation, SMContainer, SMTable, SMModal } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";
import { SecondaryCloseIcon } from "@/public/icons";
import Add from "./add";
import { tableData } from "./dummy";

const LiquidityView = ({ lang }: LangParamProp) => {
  const [showInfo, setShowInfo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [addId, setAddId] = useState<string>();

  const toggleShowInfo = () => setShowInfo((prev) => !prev);

  const handleShowModal = (id?: string) => {
    setAddId(id);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <SMContainer>
        <div className="flex flex-col py-5 md:py-12 gap-8 md:px-8">
          <div className="flex flex-col gap-5 pb-5 border-b border-b-primary-1350">
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  exit={{ opacity: 0 }}
                  className="relative pl-6 pr-10 py-3 bg-primary-650 text-primary-700 rounded-xl text-[14px] leading-[24px]"
                >
                  We’ll be adding support for LP management soon, in the mean
                  time you can manage Liquidity positons on Uniswap.
                  <SMClickAnimation
                    onClick={toggleShowInfo}
                    className="absolute right-3 top-3 hidden md:block"
                  >
                    <SecondaryCloseIcon />
                  </SMClickAnimation>
                  <SMClickAnimation
                    onClick={toggleShowInfo}
                    className="absolute right-[12.5px] top-[11.987px] md:hidden"
                  >
                    <SecondaryCloseIcon width={20} height={20} />
                  </SMClickAnimation>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="min-w-80 flex flex-col items-start flex-1 gap-1">
              <h1 className="text-primary-300 text-[30px] leading-[38px] font-medium">
                Liquidity
              </h1>
              <p className="text-primary-1500 text-base">
                Add liquidity to newly deployed tokens and earn rewards
              </p>
            </div>
          </div>

          <SMTable
            isConnected
            data={tableData}
            network="base"
            variant="secondary"
            ctaAction={handleShowModal}
          />
        </div>
      </SMContainer>

      <SMModal
        show={showModal}
        close={() => setShowModal(false)}
        variant="liquidity"
      >
        <Add id={addId} />
      </SMModal>
    </>
  );
};

export default LiquidityView;
