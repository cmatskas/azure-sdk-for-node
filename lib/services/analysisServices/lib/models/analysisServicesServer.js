/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AnalysisServicesServer class.
 * @constructor
 * Represents an instance of Analysis Services resource
 *
 * @member {object} [asAdministrators]
 * 
 * @member {array} [asAdministrators.members] Collection of administrator user
 * identities
 * 
 * @member {string} [provisioningState] The current deployment state of
 * Analysis Services resource
 * 
 * @member {string} [serverFullName] Full name of the Analysis Services
 * resource
 * 
 */
function AnalysisServicesServer() {
  AnalysisServicesServer['super_'].call(this);
}

util.inherits(AnalysisServicesServer, models['Resource']);

/**
 * Defines the metadata of AnalysisServicesServer
 *
 * @returns {object} metadata of AnalysisServicesServer
 *
 */
AnalysisServicesServer.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AnalysisServicesServer',
    type: {
      name: 'Composite',
      className: 'AnalysisServicesServer',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        sku: {
          required: true,
          serializedName: 'sku',
          type: {
            name: 'Composite',
            className: 'ResourceSku'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        asAdministrators: {
          required: false,
          serializedName: 'properties.asAdministrators',
          type: {
            name: 'Composite',
            className: 'ServerAdministrators'
          }
        },
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        serverFullName: {
          required: false,
          readOnly: true,
          serializedName: 'properties.serverFullName',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AnalysisServicesServer;
