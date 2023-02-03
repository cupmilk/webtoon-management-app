import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/naverwebtoon")
      .then((response) => setWebtoons(response.data.webtoons.mon))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(webtoons);
  }, [webtoons]);
  return (
    <div>
      <h2>Naver Webtoons</h2>
      {webtoons.map((webtoon) => (
        <div key={webtoon.title}>
          <h3>{webtoon.title}</h3>
          <img
            width="200px"
            heigh="200px"
            src={webtoon.src}
            alt={webtoon.title}
          />
          <a href={webtoon.link}>보러가기</a>
        </div>
      ))}
    </div>
  );
}

export default Test;
