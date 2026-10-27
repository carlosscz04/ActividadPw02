async function post(ruta, cuerpo = {}) {
  const res = await fetch(ruta, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuerpo),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.mensaje || "Error inesperado en el servidor");
  }
  return data;
}

export const ajustarTemperatura = (temperatura) => post("/adjust", { temperatura });

export const reiniciarSistema = () => post("/reboot");