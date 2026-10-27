const MIN = 1;
const MAX = 100;
export const RANGO = { MIN, MAX };

const generarTemperatura = () => Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

// Temperatura de estabilización generada al iniciar el servidor
let temperaturaEstabilizacion = generarTemperatura();

if (process.env.DEBUG_REACTOR) {
  console.log(`[DEBUG] Temperatura objetivo: ${temperaturaEstabilizacion}`);
}

export const reiniciarReactor = () => {
  temperaturaEstabilizacion = generarTemperatura();
  if (process.env.DEBUG_REACTOR) {
    console.log(`[DEBUG] Nueva temperatura objetivo: ${temperaturaEstabilizacion}`);
  }
};

// Devuelve cómo es la temperatura ideal respecto a la ingresada
export const evaluarAjuste = (temperatura) => {
  if (temperatura < temperaturaEstabilizacion) return "mas_alta";
  if (temperatura > temperaturaEstabilizacion) return "mas_baja";
  return "estabilizado";
};