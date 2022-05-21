import "./styles.css";

export default function Map() {
  const list = [1, 2, 3, 4];
  const dataList = [
    {
      name: "taro",
      age: 21
    },
    {
      name: "jiro",
      age: 32
    }
  ];
  return (
    <div className="App">
      <h1>map</h1>
      {list.map((num) => (
        <div>{num * 2}</div>
      ))}
      {dataList.map((data) => (
        <div>
          {data.name}
          <span>{data.age}</span>
        </div>
      ))}
    </div>
  );
}
