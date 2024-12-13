import "../description.scss";

export default function Chat() {
  return (
    <>
      <header>
        <h1>Můj Projekt Chat pro komunikaci</h1>
      </header>

      <main className="text-white">
        <section id="features">
          <h2 className="title">Možnosti</h2>
          <ul>
            <li>Popis možností.</li>
            <li>V tomto projektu můžete s přáteli chatovat v chatu.</li>
            <li>Pro to je třeba se zaregistrovat a vytvořit místnost.</li>
            <li>Můžete přidat nové zprávy do místnosti.</li>
            <li>Také můžete své zprávy smazat nebo upravit.</li>
            <li>V samostatném menu bude seznam přátel chatu.</li>
            <li>Podle aktivity účastníků jsou označeni různými barvami.</li>
            <li>
              Když někdo píše text, u ostatních u jména uživatele běží tečky.
            </li>
            <li>To znamená, že píše text.</li>
            <li>
              Tečky přestanou běžet po 6 sekundách od přestávky v psaní textu
              nebo po odeslání zprávy.
            </li>
            <li>Aktivní uživatelé se posouvají v seznamu nahoru.</li>
            <li>Při prvním připojení se načte prvních 50 zpráv.</li>
            <li>
              Všechny ostatní nové zprávy se považují za nepřečtené a budou se
              načítat při scrollování po 50 ks.
            </li>
            <li>
              Pokud má uživatel přečtené všechny zprávy, načte se posledních 50
              zpráv.
            </li>
            <li>Při scrollování nahoru se budou načítat starší zprávy.</li>
            <li>Pokud počet zpráv při scrollování přesáhne 300,</li>
            <li>
              tak se postupně budou mazat staré zprávy, ať už scrollujeme nahoru
              nebo dolů.
            </li>
          </ul>
        </section>

        <section id="features">
          <h2 className="title">Další plány týkající se projektu</h2>
          <ul>
            <li>Přidat administrátorský panel</li>
            <li>Možnost přidat vlastní fotografii</li>
            <li>Přidat audio a video</li>
            <li>Možnost komunikovat s jednotlivými přáteli v chatu výběrově</li>
          </ul>
        </section>

        <section id="technologies">
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
              <strong>SQL</strong>: Uživatelské zprávy jsou uloženy na SQL
              serveru
            </li>
            <li>
              <strong>React</strong>: tvorba uživatelského rozhraní
            </li>
            <li>
              <strong>MobX</strong>: správa stavu
            </li>
          </ul>
        </section>

        <section id="technologies">
          <h2 className="title">Для перевірки необхідно зарегіструватися</h2>
          <ul>
            <li>Přidat administrátorský panel</li>
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
              <strong>SQL</strong>: Uživatelské zprávy jsou uloženy na SQL
              serveru
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
