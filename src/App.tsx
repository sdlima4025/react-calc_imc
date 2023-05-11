import { useState } from "react";
import styles from "./App.module.css";
import powerredImage from "./assets/powered.png";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const handleCalculeteButton = () => {
    if (heightField && weightField) {
    } else {
      alert("Preencha todos os campos!");
    }
  };
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
            O IMC, é índice de massa corpórea, que mede se você está, 
            abaixo, dentro ou acima do peso, de acordo com a relação
            entre seu peso e altura. Descubra como calcular esse índice, quais
            os valores ideais, as exceções da tabela padrão, a especificidade do
            IMC para crianças e jovens.
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

        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
};

export default App;
