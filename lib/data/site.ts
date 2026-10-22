/*
 * Site-wide content: header menu, footer, contact details, popups and the
 * third-party widgets the old site used. Copied from chi.kingspa.com as it is
 * (including the footer phone link, which dials 703-957-3010 on the old site).
 * Edited in /cms > Site settings.
 */
import { images } from "./images.ts";

export const siteSettings = {
  name: "King Spa Chicago",
  legalName: "King Spa & Sauna",
  logo: images.logo,
  phoneDisplay: "(847) 972-2540",
  phoneHref: "tel:+18479722540",
  email: "service@kingspa.com",
  street: "809 Civic Center Dr.",
  city: "Niles",
  region: "IL",
  postalCode: "60714",
  latitude: 42.022397404923915,
  longitude: -87.79994815312438,
  /** Opening hours for schema: open around the clock (entry is closed 2am-6am). */
  hoursSchema: "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
  header: {
    menu: [
      { label: "About", href: "/about/", children: [
        { label: "First-Time Guide", href: "/first-time-guide/" },
        { label: "Contact", href: "/contact/" },
      ] },
      { label: "sauna rooms", href: "/sauna-healing-rooms/", children: [] },
      { label: "Services", href: "#", children: [
        { label: "Body Scrub", href: "/body-scrub/" },
        { label: "Massage Therapy", href: "/massagetherapy/" },
        { label: "Facials", href: "/facials/" },
        { label: "V-Steam", href: "/v-steam/" },
      ] },
      { label: "Pricing", href: "/pricing/", children: [] },
      { label: "Blog", href: "/blog/", children: [] },
      { label: "rewards", href: "/reward/", children: [] },
      { label: "Gift Card", href: "https://store.kingspa.com/chicago/chicago-gift-card.html", children: [] },
    ],
    /** Shown as the last item of the phone menu (the desktop shows the button instead). */
    button: { label: "E-Coupon", href: "/e-coupon/" },
  },
  footer: {
    social: [
      { label: "Facebook-square", href: "https://www.facebook.com/KingSpaSaunaNiles" },
      { label: "Instagram", href: "https://www.instagram.com/kingspachicago/?hl=en" },
      { label: "Youtube", href: "https://www.youtube.com/@kingspa3317" },
    ],
    columns: [
      { heading: "ABOUT", headingHref: "/about-us/", links: [
        { label: "(847) 972-2540", href: "tel:7039573010" },
        { label: "Contact Us", href: "/contact/" },
      ] },
      { heading: "EXPLORE", headingHref: "/explore/", links: [
        { label: "First time guide", href: "/first-time-guide/" },
        { label: "Sauna Healing", href: "/sauna-healing-rooms/" },
        { label: "Blogs", href: "/blog/" },
      ] },
      { heading: "TREATMENTS", headingHref: "/treatments/", links: [
        { label: "Facial", href: "/facials/" },
        { label: "Massage Therapy", href: "/massagetherapy/" },
        { label: "Body Scrubs", href: "/body-scrub/" },
        { label: "V-Steam Treatment", href: "/v-steam/" },
      ] },
    ],
    openingHoursToggle: "OPENING HOURS",
    hoursHeading: "HOURS",
    hoursHeadingHref: "/treatments/",
    hours: "Everyday 24/7",
    addressHeading: "ADDRESS",
    addressHeadingHref: "/treatments/",
    address: "809 Civic Center Dr. Niles, IL 60714",
    copyright: "Copyright © King Spa & Sauna. All Rights Reserved\nBlog | Sitemap | Policies | Terms & Conditions",
    creditLabel: "WEBSITE BY",
    credit: { label: "TTR Digital Marketing", href: "https://ttrdigitalmarketing.com/" },
  },
  /** The Fall Sale popup: opens 2 seconds after each page loads, until "showUntil" (inclusive). */
  promoPopup: {
    enabled: true,
    showUntil: "2026-10-29",
    image: images.fallSaleBanner,
    href: "/fall-sale/",
  },
  /** Elfsight Google Reviews widgets, embedded as on the old site. */
  reviews: {
    homeWidgetId: "3e17ac02-8cbb-44f4-81ec-6735942ced98",
    pagesWidgetId: "447724ab-4d06-4268-907b-3e451b81fd76",
  },
  /** Google Maps embeds used on the old site. */
  maps: {
    place: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5927.939997188629!2d-87.79993979999999!3d42.022376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc8e6b32de229%3A0x69547df726d8380a!2sCivic%20Center%20Plaza%2C%20809%20Civic%20Center%20Dr%2C%20Niles%2C%20IL%2060714!5e0!3m2!1sen!2sus!4v1767065891274!5m2!1sen!2sus",
    pin: "https://maps.google.com/maps?q=42.022397404923915%2C%20-87.79994815312438&t=m&z=19&output=embed&iwloc=near",
  },
};

export type SiteSettings = typeof siteSettings;
