import { useState } from "react";
import { Container, Alert } from "reactstrap";
import FormularioAjuste from "./components/FormularioAjuste";
import { ajustarTemperatura } from "./services/api";

function App() {
  const [temperatura, setTemperatura] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleEnviar = async () => {
    setEnviando(true);
    try {
      const data = await ajustarTemperatura(Number(temperatura));
      setMensaje(data.mensaje);
    } catch (e) {
      setMensaje(e.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">☢️ Estabiliza el Reactor</h2>
      {mensaje && <Alert color="info">{mensaje}</Alert>}
      <FormularioAjuste
        valor={temperatura}
        onCambio={setTemperatura}
        onEnviar={handleEnviar}
        deshabilitado={enviando}
      />
    </Container>
  );
}

export default App;