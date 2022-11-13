import type { LinksFunction } from "@remix-run/node";
import styles from "~/styles/index.css";

export default function Index() {
  return (
    <div className="container" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Milanga Táctica Capitalista</h1>
      <h2>Estamos (estoy) trabajando para que puedas disfrutar al máximo la Nueva Milangaexperiencia Táctica</h2>

        <div className="cat-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7cQs9qiK2Os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

      <footer>
        Contacto: Allá
      </footer>
    </div>
  );
}

export const links: LinksFunction = () => {

    return [
        {
            rel: "stylesheet",
            href: styles,
        }
    ];

};
