import type {Metadata} from "next";
import {Stats} from "./Stats";

export const metadata: Metadata = {
    title: "HyperFlash - Stats",
    description: "Mev Powered Staking Rewards",
};

const StatsPage = () => {
  return (
      <Stats/>
  );
}

export default StatsPage
