module.exports = app => {
  const ptBR = app.data.pt_BR;
  const controller = {};

  controller.ptBR = (req, res) => res.status(200).json(ptBR);

  return controller;
}