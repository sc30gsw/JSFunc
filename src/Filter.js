import "./styles.css";

export default function Filter() {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
  ];

  const result = words.filter((word) => word.length < 6);

  return (
    <div className="Filter">
      <h1>Filter</h1>
      {/* 条件を満たした要素だけを残す関数 */}
      {/* 条件を満たさない要素は削除される */}
      <div>{result}</div>
    </div>
  );
}
