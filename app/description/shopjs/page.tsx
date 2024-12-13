import "../description.scss";

export default function ShopJs() {
  return (
    <>
      <header>
        <h1>Мій проект інтернет магазин на JavaScript</h1>
      </header>

      <main className="text-white">
        <section id="features" className="text-white">
          <h2 className="title">Možnosti</h2>
          <ul>
            <li>Popis možností.</li>
            <li>
              В розділах NewArrivals, Our Products, Best Deals товари
              завантажуються випадкого
            </li>
            <li></li>
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
              <strong>JavaScript</strong>:
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
