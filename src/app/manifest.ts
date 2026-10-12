import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fayis Kanthapuram — Full Stack Developer",
    short_name: "Fayis",
    description: "Practical applications. Thoughtful engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ec",
    theme_color: "#f5f3ec",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
