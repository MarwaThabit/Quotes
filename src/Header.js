export default function Header() {
  return (
    <header style={{
      height: "15vh",
      backgroundColor: "rgb(7 52 102)",
      boxShadow: "0px 2px 11px 6px rgba(0, 0, 0, 0.4)"
    }} className={'d-flex justify-content-center align-items-center'}>
      <h2 className={"text-white fs-1"}>Popular Quotes</h2>
    </header>
  );
}
