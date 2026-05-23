export interface Testimonial {
  key: string;
  name: string;
  role: string;
  /** Initials shown in the avatar when no photo is available */
  initials: string;
  /** Optional: path to a photo in /public/testimonials/ */
  photo?: string;
  /** The quote text — sourced from the messages JSON */
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    key: "german",
    name: "German Maravilla",
    role: "Co-Founder, Nofumomas",
    initials: "GM",
    quote:
      "Desde el primer momento, Lisandro entendió el proyecto y lo llevó adelante con profesionalismo y dedicación. La plataforma quedó excelente.",
  },
  {
    key: "masterevent",
    name: "Juan Ignacion Lemmo",
    role: "Fundador, Master Event",
    initials: "JL",
    quote:
      "Lo que más valoro es la claridad y la velocidad. En pocas semanas teníamos la primera versión funcionando y pudimos empezar a probarla.",
  },
];