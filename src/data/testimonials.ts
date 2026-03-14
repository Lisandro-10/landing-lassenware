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
    key: "juan",
    name: "Juan Delgado",
    role: "CEO, Logistics SA",
    initials: "JD",
    quote:
      "Trabajar con Lassenware transformó nuestra logística. La atención de Lisandro y su equipo fue personalizada desde el día uno.",
  },
  {
    key: "maria",
    name: "María Suárez",
    role: "Directora Médica",
    initials: "MS",
    quote:
      "La app que desarrollaron para nuestro portal de salud superó todas las expectativas de nuestros pacientes.",
  },
];