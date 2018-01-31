// Self invoking function.
// It is wrapped by (). It runs immediately.
(function() {

  // "strict" operating context.
  "use strict";

  const app = {
    isLoading: true,
    visibleCards: {},
    spinner: document.querySelector(".loader"),
    cardTemplate: document.querySelector(".cardTemplate"),
    container: document.querySelector(".main"),
    addDialog: document.querySelector(".dialog-container"),
  };

  let card = app.cardTemplate.cloneNode(true);
  card.attributes.removeNamedItem("hidden");
  app.container.appendChild(card);

  card = app.cardTemplate.cloneNode(true);
  card.attributes.removeNamedItem("hidden");
  app.container.appendChild(card);

})();
