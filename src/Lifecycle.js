import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  //   const toggle = () => setIsVisible(!isVisible);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Mount
  useEffect(() => {
    console.log("Mount!");
  }, []);

  // Update
  useEffect(() => {
    console.log("Update!");
  });

  // useEffect라는 React Hook을 활용하면 React에서의 Lifecycle을 제어할 수 있다.
  // React에서의 Lifecycle이란 Mount, update, unMount
  // useEffect의 파라미터에서 배열이 들어갈 자리에 감지하고 싶은 값만 포함시키면
  // 해당 값에 대해서만 Update 문구를 띄워줌

  // count
  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);

  // text
  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      {/* <button>ON/OFF</button> */}
    </div>
  );
};

export default Lifecycle;
