import "./Tags.css";
export default function Tags(props) {
  return (
    <button className={"btn rounded-2 text-white mt-4 shadow-sm btnTag"}>
      {props.tagName}
    </button>
  );
}
