const App = () => {
  return (
    <main className="wrapper">
      <section className="advice">
        <h1 className="advice__heading">Advice #117</h1>
        <p className="advice__content">
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action."
        </p>
        <picture className="advice__divider-picture">
          <source
            srcSet="images/pattern-divider-mobile.svg"
            media="(max-width: 450px)"
          />
          <img
            className="advice__divider"
            src="images/pattern-divider-desktop.svg"
            alt="Pattern Divider"
          />
        </picture>
        <button className="advice__dice-button">
          <img
            className="advice__dice"
            src="images/icon-dice.svg"
            alt="Dice Icon"
          />
        </button>
      </section>
    </main>
  )
}
export default App
