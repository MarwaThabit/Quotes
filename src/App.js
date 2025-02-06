import Header from "./Header";
import Quote from "./Quote";
import Tags from "./Tags";

function App() {
  return (
    <section>
      <Header />
      <main className="w-75 mx-auto row  justify-content-between" style={{ marginBlock: "100px" }}>
        {/*==========================Quotes Section============== */}
        <section className={"col-xxl-7 col-lg-6"}>
          <section className={"row"}>
            <Quote
              theQuote="“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”"
              name="― Albert Einstein ―"
            />
            <Quote
              theQuote="“ A room without books is like a body without a soul. ”"
              name="― Marcus Tullius Cicero ―"
            />
          </section>{" "}
          {/* first row,row holds 2 quotes */}
          <section className={"row"}>
            <Quote
              theQuote="“ Be yourself; everyone else is already taken. ”"
              name=" ― Oscar Wilde ―"
            />
            <Quote
              theQuote="“ So many books, so little time. ”"
              name="― Frank Zappa ―"
            />
          </section>
          {/* second row */}
          <section className={"row"}>
            <Quote
              theQuote="“ I am so clever that sometimes I don't understand a single word of what I am saying. ”"
              name="― Oscar Wilde ―"
            />
            <Quote
              theQuote="“ You only live once, but if you do it right, once is enough. ”"
              name="― Mae West ―"
            />
          </section>
          {/* third row */}
          <section className={"row"}>
            <Quote
              theQuote="“ Be the change that you wish to see in the world. ”"
              name="― Mahatma Gandhi ―"
            />
            <Quote
              theQuote="“ Live as if you were to die tomorrow. Learn as if you were to live forever. ”"
              name="― Mahatma Gandhi ―"
            />
          </section>
          {/* Fourth row */}
        </section>
        {/* Quotes section */}
        {/*==========================QuotesClasses Section============== */}
        <nav style={{ border: "1px solid #0056b3" }} className={"px-xxl-4 px-4 px-lg-3 pb-4 col-xxl-4 col-lg-5 align-self-start rounded mx-lg-0 shadow-sm col-md-9 mx-auto my-0" }>
          <section
            className={
              "d-flex justify-content-between  flex-md-row flex-column gap-lg-2 gap-0 gap-xxl-0"
            }
          >
            <section className={"d-flex flex-column align-items-center"}>
              <Tags tagName="Dream Quotes" />
              <Tags tagName="Focus Quotes" />
              <Tags tagName="Trust Quotes" />
              <Tags tagName="Charm Quotes" />
              <Tags tagName="Power Quotes" />
              <Tags tagName="Honor Quotes" />
            </section>
            {/* First column section */}
            <section className={"d-flex flex-column align-items-center"}>
              <Tags tagName="Humor Quotes" />
              <Tags tagName="Think Quotes" />
              <Tags tagName="Heart Quotes" />
              <Tags tagName="Grace Quotes" />
              <Tags tagName="Truth Quotes" />
              <Tags tagName="Faith Quotes" />
            </section>
            {/* Second column section */}
          </section>
          {/*columns */}
          <section className={"d-flex justify-content-center"}>
            <Tags tagName="Glory Quotes" />
          </section>
          {/* Centered Section */}
        </nav>
        {/*QuotesClasses Section */}
      </main>
    </section>
  );
}

export default App;
