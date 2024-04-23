import classNames from "classnames";
import { useSwitchChain, useChainId, useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import { SMClickAnimation } from "@/components";
import {
  BaseSecondaryDesktopIcon,
  BaseSecondaryMobileIcon,
  OptimismDesktopIcon,
  OptimismMobileIcon,
  ModeDesktopIcon,
  ModeMobileIcon,
  ScrollDesktopIcon,
  ScrollMobileIcon,
} from "@/public/icons";
import useSystemFunctions from "@/hooks/useSystemFunctions";
import { NetworkProps } from "@/config/rainbow/rainbowkit";

const Card = ({ title, variant = "base", chainId: id }: NetworkProps) => {
  const { navigate } = useSystemFunctions();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { isConnected, isDisconnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const handleOnClick = async () => {
    if (isDisconnected || !isConnected) {
      return openConnectModal && openConnectModal();
    }

    if (chainId === id) return navigate.push(`migrate/${variant}`);

    await switchChain({ chainId: id });

    return navigate.push(`migrate/${variant}`);
  };

  return (
    <SMClickAnimation onClick={handleOnClick} className="w-full">
      <div
        className={classNames(
          "flex flex-col items-center justify-center rounded-xl border-[0.701px] border-primary-250 px-12 py-[54px]",
          {
            "bg-primary-400": variant === "base",
            "bg-primary-450": variant === "optimism",
            "bg-primary-500": variant === "mode",
            "bg-primary-550": variant === "scroll",
          }
        )}
      >
        <>
          <div className="hidden md:flex">
            {variant === "base" && <BaseSecondaryDesktopIcon />}
            {variant === "optimism" && <OptimismDesktopIcon />}
            {variant === "mode" && <ModeDesktopIcon />}
            {variant === "scroll" && <ScrollDesktopIcon />}
          </div>

          <div className="flex md:hidden">
            {variant === "base" && <BaseSecondaryMobileIcon />}
            {variant === "optimism" && <OptimismMobileIcon />}
            {variant === "mode" && <ModeMobileIcon />}
            {variant === "scroll" && <ScrollMobileIcon />}
          </div>
        </>

        <span
          className={classNames(
            "font-bold text-[14px] leading-[21.7px] text-center",
            {
              "text-white": variant === "base" || variant === "optimism",
              "text-black": variant === "mode",
              "text-primary-600": variant === "scroll",
            }
          )}
        >
          {title}
        </span>
      </div>
    </SMClickAnimation>
  );
};

export default Card;
