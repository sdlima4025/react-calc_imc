export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};
export const levels: Level[] = [
  { title: "Baixo-peso G³", color: "#C34230", icon: "down", imc: [0.00, 15.99] },
  { title: "Baixo-peso G²", color: "#0EAD60", icon: "down", imc: [16.00, 16.99] },
  { title: "Baixo-peso G¹", color: "#E2B030", icon: "down", imc: [17.00, 18.49] },
  { title: "Peso deal", color: "#227c9d", icon: "up", imc: [18.50, 24.99] },
  { title: "Sobrepeso", color: "#96A3AC", icon: "down", imc: [25.00, 29.99] },
  { title: "Obesidade G¹", color: "#0EAD60", icon: "down", imc: [30.00, 34.99] },
  { title: "Obesidade G²", color: "#E2B030", icon: "down", imc: [35.00, 39.99] },
  { title: "Obesidade G³", color: "#C34230", icon: "down", imc: [40.00, 99.50] },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy: Level = {...levels[i]};

      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
};
