import "../description.scss";

export default function Converter() {
  return (
    <>
      <header>
        <h1>Můj projekt Zpracování fotografií</h1>
      </header>

      <main className="text-white">
        <section id="features" className="text-white">
          <h2 className="title">Možnosti</h2>
          <ul>
            <li>Popis možností.</li>
            <li>Webová aplikace.</li>
            <li>Tento projekt se skládá ze dvou částí: klienta a serveru.</li>
            <li>
              Pomocí webové aplikace můžete nahrát a vybrat fotografie a zvolit
              typ zpracování.
            </li>
            <li>
              Výsledkem zpracování získáte zpracované fotografie, které můžete
              zobrazit ve webovém prohlížeči, a také odkaz ke stažení ve formě
              archivu.
            </li>
            <li>K dispozici je také administrační panel.</li>
            <li>
              Pokud jste běžným uživatelem, můžete zobrazit statistiky svých
              nahrání.
            </li>
            <li>
              Pokud jste administrátorem, máte možnost vidět všechny uživatele a
              měnit některá nastavení.
            </li>
            <li>
              Během zpracování máte možnost sledovat průběh nahrávání,
              zpracování a stahování fotografií.
            </li>
            <li>Zpracování lze také zastavit.</li>
            <li>Server</li>
            <li>Bez registrace můžete zpracovat pouze jeden soubor.</li>
            <li>Server má svůj vlastní load balancer.</li>
            <li>Který distribuuje soubory mezi pracovní servery.</li>
            <li>
              Každý server má omezené zatížení (počet souborů) podle nastavení.
            </li>
            <li>
              Pracovní servery jsou vytvářeny virtuálně podle počtu souborů.
            </li>
            <li>Po dokončení zpracování jsou servery odstraněny.</li>
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
              <strong>JavaScript</strong>: funkce serveru
            </li>
            <li>
              <strong>NodeJS</strong>: backendové operace
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
