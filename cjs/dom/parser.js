'use strict';
const {DOM_PARSER} = require('../shared/symbols.js');
const {parseFromString} = require('../shared/parse-from-string.js');

const {HTMLDocument} = require('../html/document.js');
const {SVGDocument} = require('../svg/document.js');
const {XMLDocument} = require('../xml/document.js');

/**
 * @implements globalThis.DOMParser
 */
class DOMParser {

  /**
   * @param {string} markupLanguage 
   * @param {"text/html"|"image/svg+xml"|"text/xml"} mimeType
   * @returns {HTMLDocument|SVGDocument|XMLDocument}
   */
  parseFromString(markupLanguage, mimeType) {
    let isHTML = false, document;
    if (mimeType === 'text/html') {
      isHTML = true;
      document = new HTMLDocument;
    }
    else if (mimeType === 'image/svg+xml')
      document = new SVGDocument;
    else
      document = new XMLDocument;
    document[DOM_PARSER] = DOMParser;
    return markupLanguage ?
            parseFromString(document, isHTML, markupLanguage) :
            document;
  }
}
exports.DOMParser = DOMParser
