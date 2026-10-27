import { ListGroup, ListGroupItem, Badge } from "reactstrap";

const ETIQUETAS = {
  mas_alta: { texto: "Ideal más alta ↑", color: "warning" },
  mas_baja: { texto: "Ideal más baja ↓", color: "info" },
  estabilizado: { texto: "Estabilizado ✓", color: "success" },
};

export default function HistorialTemperaturas({ historial }) {
  return (
    <>
      <h5 className="mt-4">Registro de intentos ({historial.length})</h5>
      <ListGroup>
        {historial.length === 0 && <ListGroupItem>Aún no hay intentos</ListGroupItem>}
        {historial.map((intento, indice) => {
          const etiqueta = ETIQUETAS[intento.resultado];
          return (
            <ListGroupItem
              key={indice}
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                #{indice + 1} · <strong>{intento.valor} °C</strong>
              </span>
              <Badge color={etiqueta.color}>{etiqueta.texto}</Badge>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
}
