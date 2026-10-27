import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function FormularioAjuste({ valor, onCambio, onEnviar, deshabilitado }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onEnviar();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="temperatura">Temperatura de ajuste (1 - 100)</Label>
        <Input
          id="temperatura"
          type="number"
          min="1"
          max="100"
          placeholder="Ej: 50"
          value={valor}
          onChange={(e) => onCambio(e.target.value)}
          disabled={deshabilitado}
        />
      </FormGroup>
      <Button color="primary" type="submit" disabled={deshabilitado || valor === ""}>
        Ajustar reactor
      </Button>
    </Form>
  );
}