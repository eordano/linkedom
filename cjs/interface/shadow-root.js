'use strict';
const {DOCUMENT_FRAGMENT_NODE} = require('../shared/constants.js');
const {NonElementParentNode} = require('../mixin/non-element-parent-node.js');

/**
 * @implements globalThis.ShadowRoot
 */
class ShadowRoot extends NonElementParentNode {
  constructor(ownerDocument) {
    super(ownerDocument, '#shadow-root', DOCUMENT_FRAGMENT_NODE);
  }
}
exports.ShadowRoot = ShadowRoot
