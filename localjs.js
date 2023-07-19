(function(global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    global.localjs = factory();
  }
}(this, function() {
  var originalHtmlMap = new WeakMap(); // Private WeakMap to store original HTML data

  return {
    init: function(language, translations) {
      var elements = document.querySelectorAll('[translate]');

      elements.forEach(function(element) {
        originalHtmlMap.set(element, element.innerHTML); // Store original HTML data in the WeakMap
      });

      // Set lang attribute for selected tags and html tag
      var tagsWithLangAttribute = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'button', 'label', 'input', 'select', 'textarea'];
      tagsWithLangAttribute.forEach(function(tagName) {
        var tagElements = document.querySelectorAll(tagName + '[translate]');
        tagElements.forEach(function(tagElement) {
          tagElement.setAttribute('lang', language);
        });
      });

      document.documentElement.setAttribute('lang', language); // Set lang attribute for html tag

      function lexicalAnalyzer() {
        elements.forEach(function(element) {
          var originalHtml = originalHtmlMap.get(element); // Get original HTML data from the WeakMap

          for (var word in translations) {
            if (originalHtml.includes(word)) {
              var regex = new RegExp("\\b" + word + "\\b", "g");
              var translation = translations[word][language];

              if (translation) {
                element.innerHTML = originalHtml.replace(regex, translation);
              }
            }
          }
        });
      }

      lexicalAnalyzer();
    },
    update: function(language, translations) {
      var elements = document.querySelectorAll('[translate]');

      function lexicalAnalyzer() {
        elements.forEach(function(element) {
          var originalHtml = originalHtmlMap.get(element); // Get original HTML data from the WeakMap

          for (var word in translations) {
            if (originalHtml.includes(word)) {
              var regex = new RegExp("\\b" + word + "\\b", "g");
              var translation = translations[word][language];

              if (translation) {
                element.innerHTML = originalHtml.replace(regex, translation);
              }
            }
          }
        });
      }

      lexicalAnalyzer();
    }
  };
}));
