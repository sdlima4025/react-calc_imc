import { useState } from "react";
import styles from "./App.module.css";
import powerredImage from "./assets/powered.png";
import { levels, calculateImc, Level } from "./helpers/imc";
import { title } from "process";
import { GridItem } from "./components/GridItem";
import leftArrowImage from "./assets/leftarrow.png";
const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toshow, setToShow] = useState<Level | null>(null);

  const handleCalculeteButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("Preencha todos os campos!");
    }
  }
// RESET DOS CAMPOS COM AÇÃO DO CLICK
  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setHeightField(0);
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerredImage} alt="Logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            O IMC, é índice de massa corpórea, que mede se você está, abaixo,
            dentro ou acima do peso, de acordo com a relação entre seu peso e
            altura. Descubra como calcular esse índice, quais os valores ideais,
            as exceções da tabela padrão, a especificidade do IMC para crianças
            e jovens.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 80.3 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculeteButton}>Calcular</button>
        </div>

        <div className={styles.rightSide}>

          {!toshow &&
            <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {
            toshow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toshow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
