import "./styles.css";

export default function Splice() {
  const items = ["item1", "item2", "item3"];
  const remove = items.splice(0, 1);
  console.log(remove);

  items.splice(1, 0, remove[0]);
  console.log(items);
  /* splice(start, deleteCount, item1) */
  return (
    <div className="Splice">
      <h1>Splice</h1>
    </div>
  );
}
