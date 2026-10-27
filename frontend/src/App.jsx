import { useState, useEffect } from "react";
import { Container, Alert, Button } from "reactstrap";
import FormularioAjuste from "./components/FormularioAjuste";
import HistorialTemperaturas from "./components/HistorialTemperaturas";
import { ajustarTemperatura, reiniciarSistema } from "./services/api";

function App() {
  const [temperatura, setTemperatura] = useState("");
  const [historial, setHistorial] = useState([]);
  const [mensaje, setMensaje] = useState({ texto: "", tipo: "info" });
  const [estabilizado, setEstabilizado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    document.title = estabilizado
      ? "✅ Reactor estabilizado"
      : `☢️ Reactor (${historial.length} intentos)`;
  }, [estabilizado, historial.length]);

  const handleEnviar = async () => {
    const valor = Number(temperatura);
    setEnviando(true);
    try {
      const data = await ajustarTemperatura(valor);
      const logrado = data.resultado === "estabilizado";
      setHistorial((previo) => [...previo, { valor, resultado: data.resultado }]);
      setEstabilizado(logrado);
      setMensaje({ texto: data.mensaje, tipo: logrado ? "success" : "warning" });
      setTemperatura("");
    } catch (e) {
      setMensaje({ texto: e.message, tipo: "danger" });
    } finally {
      setEnviando(false);
    }
  };

  const handleReiniciar = async () => {
    setEnviando(true);
    try {
      const data = await reiniciarSistema();
      setHistorial([]);
      setEstabilizado(false);
      setTemperatura("");
      setMensaje({ texto: data.mensaje, tipo: "info" });
    } catch (e) {
      setMensaje({ texto: e.message, tipo: "danger" });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">☢️ Estabiliza el Reactor</h2>
      {mensaje.texto && <Alert color={mensaje.tipo}>{mensaje.texto}</Alert>}
      <FormularioAjuste
        valor={temperatura}
        onCambio={setTemperatura}
        onEnviar={handleEnviar}
        deshabilitado={enviando || estabilizado}
      />
      <Button
        color="danger"
        outline
        className="mt-3"
        disabled={enviando}
        onClick={handleReiniciar}
      >
        Reiniciar sistema
      </Button>
      <HistorialTemperaturas historial={historial} />
    </Container>
  );
}

export default App;
