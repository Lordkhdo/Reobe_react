import React, { useState, useEffect } from "react";
import "../App.css";

const Dsadsa = () => {
  const [num, setNum] = useState(0);
  const [Mun, setMun] = useState(0);
  useEffect(() => {}, [Mun]);
  const mop = () => {
    setNum((prevState) => prevState + 1);
    console.log(num);
  };
  const Secondmop = () => {
    setMun((prevState) => prevState + 1);
    setNum((prevState) => prevState - 1);
    console.log(Mun);
  };
  const thirdmop = () =>{
        setMun((prevState) => prevState + 100);
        setNum((prevState) => prevState + 100);
  }

  return (
    <>
      {num >= 1 && num < 100 ? ( //   (se)
        <p className="App">minha pomba</p>
      ) : (
        //   (seNao)
        <>
          {num < 0 ? ( //   (se)
            <div className="App">dsadasdasdasdsadas</div>
          ) : (
            //   (seNao)
            <>
              {Mun >= 99 ? (
                <div className="App">MINHHA VIDA E UM CU</div>
              ) : (
                <div>
                  <button onClick={mop} className="App">
                    here click
                  </button>
                  <br />
                  <button className="App" onClick={Secondmop}>
                    nao click aqui
                  </button>
                  <br></br>
                  <button className="App" onClick={thirdmop}>
                    nao click aqui tambem
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Dsadsa;
