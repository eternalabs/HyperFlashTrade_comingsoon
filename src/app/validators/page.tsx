import type {Metadata} from "next";
import {ValidatorComponent} from "./ValidatorComponent";

export const metadata: Metadata = {
    title: "HyperFlash - Validators",
    description: "Mev Powered Staking Rewards",
};

const ValidatorsPage = () => {
  return (
      <ValidatorComponent/>
  );
}

export default ValidatorsPage
