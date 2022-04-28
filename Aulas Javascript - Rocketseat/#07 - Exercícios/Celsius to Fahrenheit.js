function convertTemperature(temperature, scale) {
  temperatureValue = Number(temperature);
  const scaleF = scale == "F" || scale == "f";
  const scaleC = scale == "C" || scale == "c";

  if (scaleF) {
    let toCelcius = ((temperatureValue - 32) * 5) / 9;
    console.log(
      `Você escolheu Fahrenheit, o valor em Celcius é ${toCelcius.toFixed(2)}`
    );
  } else if (scaleC) {
    let toFahrenheit = (temperatureValue * 9) / 5 + 32;
    console.log(
      `Você escolheu Celcius, o valor em Fahrenheit é ${toFahrenheit.toFixed(
        2
      )}`
    );
  } else {
    console.log("[ERRO], Por favor insira uma escala válida (C ou F)");
  }
}

convertTemperature("20", "F");
