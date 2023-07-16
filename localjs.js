var localjs = (function() {
  var translations = {};
  var elements = [];
  var language;
  function init(language, newTranslations) {
    translations = newTranslations;
    elements = document.getElementsByClassName("translate");
    language = language;
    storeOriginalText();
    attachEventListener();
    lexicalAnalyzer();
  }

  function storeOriginalText() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.dataset.originalHtml = element.innerHTML;
    }
  }

  function lexicalAnalyzer() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var originalHtml = element.dataset.originalHtml;

      for (var word in translations) {
        if (originalHtml.includes(word)) {
          var regex = new RegExp("\\b" + word + "\\b", "g");
          var translation = translations[word][language];

          if (translation) {
            element.innerHTML = originalHtml.replace(regex, translation);
          }
        }
      }
    }
  }

  return {
    init: init
  };
})();