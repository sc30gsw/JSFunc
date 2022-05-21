import "./styles.css";

export default function Spread() {
  let arr1 = [0, 1, 2];
  let arr2 = [3, 4, 5];
  // arr1:0,1,2
  arr1 = [...arr1, ...arr2];
  // arr1:0,1,2,3,4,5
  return (
    <div className="Spread">
      <h1>スプレッド構文</h1>
      <p>{arr1}</p>
    </div>
  );
}
