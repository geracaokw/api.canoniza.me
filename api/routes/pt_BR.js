module.exports = app => {
  const controller = app.controllers.pt_BR;

  app.route('/api/v1/ptBR')
    .get(controller.ptBR);
}