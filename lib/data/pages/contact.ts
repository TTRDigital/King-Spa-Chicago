/* Contact (/contact/): built-in content, copied from chi.kingspa.com/contact/. Edited in /cms > Pages > Contact. */
import { images } from "../images.ts";

export const contactPage = {
  seo: { title: "Contact – King Spa Chicago", description: "" },
  banner: { korean: "연락처", title: "Contact Us" },
  name: "King Spa & Sauna",
  label: "CONTACT US",
  /** The old page links the number as "http://+18479722540"; kept as it was. */
  phone: { label: "(847) 972-2540", href: "http://+18479722540" },
  email: { label: "service@kingspa.com", href: "mailto:service@kingspa.com" },
  address: "809 Civic Center Dr. Niles, IL 60714",
  hoursLabel: "OPENING HOURS",
  hours: "Everyday 24/7",
  image: images.galleryExteriorDusk,
  mapTitle: "Map: King Spa & Sauna, 809 Civic Center Dr, Niles, IL 60714",
};
