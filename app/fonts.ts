import localFont from "next/font/local";
import { Cormorant_Garamond, DM_Serif_Display, Montserrat, Mulish, Poppins, Questrial, Roboto, Tienne, Urbanist } from "next/font/google";

/*
 * The old site's fonts, self-hosted (no request to Google at runtime).
 * Recoleta and Tang Garland are the same files the old site served
 * (wp-content/uploads/2025/12). Only Recoleta and Mulish, used above the fold
 * on every page, are preloaded; the others download only on pages that use them.
 */
export const recoleta = localFont({ src: "../public/fonts/Recoleta-Regular-Demo.woff2", weight: "400", display: "swap", variable: "--ff-recoleta", fallback: ["Georgia", "serif"] });
export const tangGarland = localFont({ src: "../public/fonts/TAN-Garland-Regular.woff2", weight: "400", display: "swap", variable: "--ff-tang", preload: false, fallback: ["Georgia", "serif"] });
export const mulish = Mulish({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800"], style: ["normal", "italic"], display: "swap", variable: "--ff-mulish" });
export const tienne = Tienne({ subsets: ["latin"], weight: "400", display: "swap", variable: "--ff-tienne", preload: false });
export const questrial = Questrial({ subsets: ["latin"], weight: "400", display: "swap", variable: "--ff-questrial", preload: false });
export const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap", variable: "--ff-cormorant", preload: false });
export const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", display: "swap", variable: "--ff-dmserif", preload: false });
export const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"], display: "swap", variable: "--ff-poppins", preload: false });
export const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"], display: "swap", variable: "--ff-montserrat", preload: false });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap", variable: "--ff-roboto", preload: false });
export const urbanist = Urbanist({ subsets: ["latin"], weight: "400", display: "swap", variable: "--ff-urbanist", preload: false });

export const fontVariables = [recoleta, tangGarland, mulish, tienne, questrial, cormorant, dmSerif, poppins, montserrat, roboto, urbanist].map((f) => f.variable).join(" ");
