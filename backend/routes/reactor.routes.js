import { Router } from "express";
import { evaluarAjuste, reiniciarReactor, RANGO } from "../services/reactor.service.js";

const router = Router();
const MENSAJES = {
  mas_alta: "La temperatura ideal es más alta. Sube el ajuste.",
  mas_baja: "La temperatura ideal es más baja. Baja el ajuste.",
  estabilizado: "¡Reactor estabilizado! Temperatura correcta.",
};

// POST /adjust  { temperatura }
router.post("/adjust", (req, res) => {
  const { temperatura } = req.body;

  const esValida =
    Number.isInteger(temperatura) && temperatura >= RANGO.MIN && temperatura <= RANGO.MAX;
  if (!esValida) {
    return res
      .status(400)
      .json({ mensaje: `Ingresa un número entero entre ${RANGO.MIN} y ${RANGO.MAX}` });
  }

  const resultado = evaluarAjuste(temperatura);
  res.json({ resultado, mensaje: MENSAJES[resultado] });
});

// POST /reboot
router.post("/reboot", (req, res) => {
  reiniciarReactor();
  res.json({ mensaje: "Sistema reiniciado. Se generó una nueva temperatura de estabilización." });
});

export default router;
