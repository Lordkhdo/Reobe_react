import React, { useState } from "react";

const Dsadsa = () => {
  const [num, setNum] = useState(0);

  const mop = () => {
    setNum((prevState) => prevState + 1);
    console.log(num);
  };
  return (
    <div>
      <div>
        {num >= 1 ? (
          <div>
            <button>munhapomba</button>
            <br />
            <button>minhapomba2</button>
          </div>
        ) : (
          <div>
            <button onClick={mop}>here click</button>
            <br />
            <button> nao click aqui</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dsadsa;
