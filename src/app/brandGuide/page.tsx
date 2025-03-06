import type {Metadata} from "next";
import {Guidelines} from "./Guidelines/Guidelines";
import {TwoBlocks} from "./TwoBlocks/TwoBlocks";
import style from "./BrandGuidePage.module.scss"
import {LogoConstruction} from "./LogoConstruction/LogoConstruction";
import {Version} from "./Version/Version";
import {ProtectiveField} from "./ProtectiveField/ProtectiveField";
import {Typography} from "./Typography/Typography";
import {Colors} from "./Colors/Colors";
import {AppIcon} from "./AppIcon/AppIcon";
import {Visualization} from "./Visualization/Visualization";

export const metadata: Metadata = {
    title: "HyperFlash - Brand Guide",
};

const BrandGuidePage = () => {
    return (
      <div className={style.brandGuidePage}>
          <Guidelines/>
          <TwoBlocks/>
          <LogoConstruction/>
          <Version/>
          <Version light={true}/>
          <ProtectiveField/>
          <Typography/>
          <Colors/>
          <AppIcon/>
          <Visualization/>
      </div>
    )
}

export default BrandGuidePage