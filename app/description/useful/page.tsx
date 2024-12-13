import "../description.scss";

export default function UsefulLinks() {
  return (
    <>
      <header>
        <h1>Můj Projekt užitečné odkazy a články</h1>
      </header>

      <main className="text-white">
        <section id="features" className="text-white">
          <h2 className="title">Možnosti</h2>
          <ul>
            <li>Popis možností.</li>
            <li>
              V tomto projektu má uživatel možnost vytvořit seznam svých odkazů,
              článků, textů a poznámek.
            </li>
            <li>
              Všechna data budou strukturována ve formě menu s hlubokou
              vnořeností.
            </li>
            <li>Můžete přidat položku do menu nebo podmenu.</li>
            <li>Škálovatelnost menu.</li>
            <li>
              Položka menu může odkazovat na jiné podmenu nebo na seznam odkazů
              na webové stránky nebo seznam článků.
            </li>
            <li>
              Je zde administrační panel s možnostmi pro správce, který může
              vidět seznam uživatelů, zablokovat někoho, udělit nebo odebrat
              nějaká práva, změnit jméno nebo e-mail.
            </li>
            <li>
              Uživatel ve svém panelu vidí pouze sebe a může změnit své jméno a
              e-mail.
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
              <strong>JWT</strong>: Registrace a autorizace pomocí technologie
              JWT token
            </li>
            <li>
              <strong>GraphQL MongoDB</strong>: Data jsou uložena na GraphQL
              MongoDB serveru
            </li>
            <li>
              <strong>React</strong>: tvorba uživatelského rozhraní
            </li>
            <li>
              <strong>MobX</strong>: správa stavu
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
