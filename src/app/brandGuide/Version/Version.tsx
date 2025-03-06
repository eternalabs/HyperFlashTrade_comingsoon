import style from "./Version.module.scss"
import {clsx} from "clsx";
import {playfair_Display} from "../../../assets/fonts/fonts";
import {svgIcons} from "../../../assets/svgIcons";

type VersionType = {
    light?: boolean
}

const texts_dark = [
    `Our logo embodies a sleek and dynamic fusion of modern minimalism and bold expression. The design consists of a distinctive symbol alongside a text-based logotype, where the emphasis on "Flash" conveys energy and speed. The symbol, resembling a stylized lightning bolt, reinforces the brand’s identity, symbolizing innovation and rapid performance.`,
    `A dark variation offers a bold and authoritative presence. It ensures maximum legibility on light backgrounds while maintaining a professional and timeless aesthetic. The HyperFlash logo is designed to be versatile and recognizable across various platforms, reinforcing the brand’s innovative and high-performance nature.`,
]

const texts_light = [
    `The deep green hue on a light mint background enhances the logo’s modern and sophisticated look. This combination provides a fresh, tech-forward appeal while maintaining clarity and elegance.`,
    `
When used in light, the logo gains a sense of lightness and adaptability. It is ideal for dark or vibrant backgrounds, ensuring strong contrast and visibility. This version highlights the minimalistic and contemporary essence of the brand.`,
]

export const Version = ({light}: VersionType) => {
    return (
        <div className={clsx({
            [style.version]: true,
            [style.version_light]: light,
        })}>
            <div className={style.inner}>

                <p className={clsx(style.title, playfair_Display.className)}>
                    {light ? "Light Version" : "Dark Version"}
                </p>

                <div className={style.texts}>
                    {
                        (light ? texts_light : texts_dark).map((text, key) => (
                            <p key={key}>
                                {text}
                            </p>
                        ))
                    }
                </div>

                <div className={style.logos}>
                    {
                        [
                            {
                                icon: svgIcons.logo_mark,
                                label: "Logo Mark",
                            },
                            {
                                icon: svgIcons.vertical_logo,
                                label: "Vertical Logo",
                            },
                            {
                                icon: svgIcons.horizontal_logo,
                                label: "Horizontal Logo",
                            },
                        ].map(({icon, label}, key) => (
                            <div key={key}
                                 className={style.logoWrapper}
                            >
                                {icon}
                                <p>{label}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}