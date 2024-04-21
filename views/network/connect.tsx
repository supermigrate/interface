import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../migrate/button";
import { Network } from "../migrate/types";

const Connect = ({
  network,
  action,
  isConnected,
}: {
  network: Network;
  action: () => void;
  isConnected: boolean;
}) => {
  const buttonText = "connect github";
  const buttonVariant = "git";
  return (
    <AnimatePresence>
      {!isConnected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classNames(
            "py-6 px-4 md:px-8 rounded-xl self-stretch flex flex-col md:flex-row md:justify-between items-start md:items-end gap-[18px] md:gap-[10px]",
            {
              "bg-primary-750": network === "base",
              "bg-primary-800": network === "optimism",
              "bg-primary-850": network === "mode",
              "bg-primary-900": network === "scroll",
            }
          )}
        >
          <div className="flex-1 flex flex-col gap-[10px] md:gap-2 items-start">
            <h1
              className={classNames(
                "text-[20px] leading-[30px] md:text-[24px] md:leading-[38px] font-medium",
                {
                  "text-primary-650": network === "base",
                  "text-primary-1050": network === "optimism",
                  "text-primary-1150": network === "mode",
                  "text-primary-550": network === "scroll",
                }
              )}
            >
              Please connect Github to continue
            </h1>
            <p
              className={classNames(
                "text-sm md:text-base max-w-[399px] text-wrap",
                {
                  "text-primary-1000": network === "base",
                  "text-primary-1100": network === "optimism",
                  "text-primary-1200": network === "mode",
                  "text-primary-1250": network === "scroll",
                }
              )}
            >
              The Github account connected will be used to fork and create a PR
              on the Superchain token list repo
            </p>
          </div>

          <Button
            network={network}
            onClick={action}
            text={buttonText}
            variant={buttonVariant}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Connect;