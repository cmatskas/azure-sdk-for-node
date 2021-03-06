/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the CertificateListResult class.
 * @constructor
 * The certificate list result
 *
 * @member {string} [nextLink] The URL to get the next set of certificates.
 * 
 */
function CertificateListResult() {
}

util.inherits(CertificateListResult, Array);

/**
 * Defines the metadata of CertificateListResult
 *
 * @returns {object} metadata of CertificateListResult
 *
 */
CertificateListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CertificateListResult',
    type: {
      name: 'Composite',
      className: 'CertificateListResult',
      modelProperties: {
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CertificateItemElementType',
                type: {
                  name: 'Composite',
                  className: 'CertificateItem'
                }
            }
          }
        },
        nextLink: {
          required: false,
          readOnly: true,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = CertificateListResult;
