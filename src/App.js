import Header from "./Header";
import Quote from "./Quote";
import Tags from "./Tags";

function App() {
  const quotesArray = [
    {id: 1,quote:"“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ”",name: "― Albert Einstein ―"},
    {id: 2,quote:"“ A room without books is like a body without a soul. ”",name: "― Marcus Tullius Cicero ―"},
    {id: 3,quote:"“ Be yourself; everyone else is already taken. ”",name: " ― Oscar Wilde ―"},
    {id: 4,quote:"“ So many books, so little time. ”",name: "― Frank Zappa ―"},
    {id: 5,quote:"“ I am so clever that sometimes I don't understand a single word of what I am saying. ”",name: "― Oscar Wilde ―"},
    {id: 6,quote:"“ You only live once, but if you do it right, once is enough. ”",name: "― Mae West ―"},
    {id: 7,quote:"“ Be the change that you wish to see in the world. ”",name: "― Mahatma Gandhi ―"},
    {id: 8,quote:"“ Live as if you were to die tomorrow. Learn as if you were to live forever. ”",name: "― Mahatma Gandhi ―"},
  ];
  const myQuotes = quotesArray.map((qouteobj) => (
    <Quote theQuote={qouteobj.quote} name={qouteobj.name} key={qouteobj.id} />
  ));

  const tags = [
    { id: 1, name: "Dream Quotes" },
    { id: 2, name: "Focus Quotes" },
    { id: 3, name: "Trust Quotes" },
    { id: 4, name: "Charm Quotes" },
    { id: 5, name: "Power Quotes" },
    { id: 6, name: "Honor Quotes" },
    { id: 7, name: "Humor Quotes" },
    { id: 8, name: "Think Quotes" },
    { id: 9, name: "Heart Quotes" },
    { id: 10, name: "Grace Quotes" },
    { id: 11, name: "Truth Quotes" },
    { id: 12, name: "Faith Quotes" },
  ];
  const myTags = tags.map((tagobj) => (
    <Tags tagName={tagobj.name} key={tagobj.id} />
  ));
  return (
    <section>
      <Header />
      <main className="w-75 mx-auto row  justify-content-between" style={{ marginBlock: "100px" }}>
        {/*==========================Quotes Section============== */}
        <section className={"col-xxl-7 col-lg-6"}>
          <section className={"row"}>{myQuotes}</section>
        </section>{/* Quotes section */}
        {/*==========================QuotesClasses Section============== */}
        <nav style={{ border: "1px solid #0056b3" }} className={"px-xxl-4 px-4 px-lg-3 pb-4 col-xxl-4 col-lg-5 align-self-start rounded mx-lg-0 shadow-sm col-md-9 mx-auto my-0"}>
          <section className={"d-flex justify-content-between  flex-md-row flex-column gap-lg-2 gap-0 gap-xxl-0"}>
            <section className={"d-flex flex-column align-items-center flex-md-row flex-md-wrap justify-content-md-between"}>
              {myTags}
            </section>
          </section>
          <section className={"d-flex justify-content-center"}>
            <Tags tagName="Glory Quotes" />
          </section>
        </nav>
      </main>
    </section>
  );
}

export default App;
