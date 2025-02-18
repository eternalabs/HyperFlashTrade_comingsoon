import type {Metadata} from "next";
import {Home} from "./Home";

export const metadata: Metadata = {
    title: "HyperFlash - Home",
    description: "Mev Powered Staking Rewards",
};

const HomePage = () => {
    return (
        <Home/>
    );
}

export default HomePage
