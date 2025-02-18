import {Stakers} from "./Stakers";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "HyperFlash - Stakers",
    description: "Mev Powered Staking Rewards",
};

const StakersPage = () => {
    return (
        <Stakers/>
    );
}

export default StakersPage
