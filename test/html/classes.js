const assert = require('../assert.js').for('HTMLClassElement');

const {parseHTML} = global[Symbol.for('linkedom')];
const {MIME} = require('../../cjs/shared/symbols.js');

const {document} = parseHTML('');

const {voidElements} = document[MIME];

const {
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
} = document.defaultView;

[
  HTMLElement,
  HTMLTemplateElement,
  HTMLHtmlElement,
  HTMLScriptElement,
  HTMLFrameElement,
  HTMLIFrameElement,
  HTMLObjectElement,
  HTMLHeadElement,
  HTMLBodyElement,
  HTMLStyleElement,
  HTMLTimeElement,
  HTMLFieldSetElement,
  HTMLEmbedElement,
  HTMLHRElement,
  HTMLProgressElement,
  HTMLParagraphElement,
  HTMLTableElement,
  HTMLFrameSetElement,
  HTMLLIElement,
  HTMLBaseElement,
  HTMLDataListElement,
  HTMLInputElement,
  HTMLParamElement,
  HTMLMediaElement,
  HTMLAudioElement,
  HTMLHeadingElement,
  HTMLDirectoryElement,
  HTMLQuoteElement,
  HTMLCanvasElement,
  HTMLLegendElement,
  HTMLOptionElement,
  HTMLSpanElement,
  HTMLMeterElement,
  HTMLVideoElement,
  HTMLTableCellElement,
  HTMLTitleElement,
  HTMLOutputElement,
  HTMLTableRowElement,
  HTMLDataElement,
  HTMLMenuElement,
  HTMLSelectElement,
  HTMLBRElement,
  HTMLButtonElement,
  HTMLMapElement,
  HTMLOptGroupElement,
  HTMLDListElement,
  HTMLTextAreaElement,
  HTMLFontElement,
  HTMLDivElement,
  HTMLLinkElement,
  HTMLSlotElement,
  HTMLFormElement,
  HTMLImageElement,
  HTMLPreElement,
  HTMLUListElement,
  HTMLMetaElement,
  HTMLPictureElement,
  HTMLAreaElement,
  HTMLOListElement,
  HTMLTableCaptionElement,
  HTMLAnchorElement,
  HTMLLabelElement,
  HTMLUnknownElement,
  HTMLModElement,
  HTMLDetailsElement,
  HTMLSourceElement,
  HTMLTrackElement,
  HTMLMarqueeElement
].forEach(Class => {
  const element = new Class(document);
  const string = new Class(document).toString();
  const {localName} = element;
  assert(string, voidElements.test(localName) ?
                  `<${localName}>` : `<${localName}></${localName}>`);
});
