import "./styles.css";

export default function Ternary() {
  return (
    <div className="Ternary">
      <h1>三項演算子</h1>
      {true ? <h1>true</h1> : <h1>false</h1>}
    </div>
  );
}
