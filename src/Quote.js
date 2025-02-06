export default function Quote(props) {
    return (
        <section style={{border: "1px solid #0056b3",marginBottom:'60px'}} className={"p-4 rounded shadow"}>
            <p className={"text-center text-black my-2 fw-bold fs-5"}>{props.theQuote}</p>
            <hr className={"my-0"} />
            <p className={"text-center text-black my-2 fw-semibold fs-6"}>{props.name}</p>
        </section>
    );
}
