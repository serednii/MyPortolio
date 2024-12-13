import "../description.scss";

export default function Tv() {
  return (
    <>
      <header>
        <h1>Vzdělávací projekt e-shop</h1>
      </header>

      <main className="text-white">
        <section id="features" className="text-white">
          <h2 className="title">Možnosti</h2>
          <ul>
            <li>Popis možností.</li>
            <li>
              Tento projekt byl vytvořen jako vzdělávací příručka převzatá z
              YouTube.
            </li>
            <li>Přidal jsem do něj možnost.</li>
            <li>Přidat nový produkt.</li>
            <li>Odstranit produkt.</li>
            <li>Upravit produkt.</li>
            <li>Přidat do oblíbených.</li>
            <li>
              Také nad ikonami oblíbených, košíku a objednávek byl přidán
              počítadlo množství produktů.
            </li>
          </ul>
        </section>

        <section id="technologies" className="text-white">
          <h2 className="title">Použité Technologie</h2>
          <ul>
            <li>
              <strong>HTML5</strong>: tvorba struktury stránky
            </li>
            <li>
              <strong>CSS3</strong>: styl a adaptivita
            </li>
            <li>
              <strong>React</strong>: tvorba uživatelského rozhraní
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
