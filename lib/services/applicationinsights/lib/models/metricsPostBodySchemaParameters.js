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

/**
 * The parameters for a single metrics query
 *
 */
class MetricsPostBodySchemaParameters {
  /**
   * Create a MetricsPostBodySchemaParameters.
   * @member {string} metricId Possible values include: 'requests/count',
   * 'requests/duration', 'requests/failed', 'users/count',
   * 'users/authenticated', 'pageViews/count', 'pageViews/duration',
   * 'client/processingDuration', 'client/receiveDuration',
   * 'client/networkDuration', 'client/sendDuration', 'client/totalDuration',
   * 'dependencies/count', 'dependencies/failed', 'dependencies/duration',
   * 'exceptions/count', 'exceptions/browser', 'exceptions/server',
   * 'sessions/count', 'performanceCounters/requestExecutionTime',
   * 'performanceCounters/requestsPerSecond',
   * 'performanceCounters/requestsInQueue',
   * 'performanceCounters/memoryAvailableBytes',
   * 'performanceCounters/exceptionsPerSecond',
   * 'performanceCounters/processCpuPercentage',
   * 'performanceCounters/processIOBytesPerSecond',
   * 'performanceCounters/processPrivateBytes',
   * 'performanceCounters/processorCpuPercentage',
   * 'availabilityResults/availabilityPercentage',
   * 'availabilityResults/duration', 'billing/telemetryCount',
   * 'customEvents/count'
   * @member {moment.duration} [timespan]
   * @member {array} [aggregation]
   * @member {moment.duration} [interval]
   * @member {array} [segment]
   * @member {number} [top]
   * @member {string} [orderby]
   * @member {string} [filter]
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricsPostBodySchemaParameters
   *
   * @returns {object} metadata of MetricsPostBodySchemaParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'metricsPostBodySchema_parameters',
      type: {
        name: 'Composite',
        className: 'MetricsPostBodySchemaParameters',
        modelProperties: {
          metricId: {
            required: true,
            serializedName: 'metricId',
            type: {
              name: 'String'
            }
          },
          timespan: {
            required: false,
            serializedName: 'timespan',
            type: {
              name: 'TimeSpan'
            }
          },
          aggregation: {
            required: false,
            serializedName: 'aggregation',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          interval: {
            required: false,
            serializedName: 'interval',
            type: {
              name: 'TimeSpan'
            }
          },
          segment: {
            required: false,
            serializedName: 'segment',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          top: {
            required: false,
            serializedName: 'top',
            type: {
              name: 'Number'
            }
          },
          orderby: {
            required: false,
            serializedName: 'orderby',
            type: {
              name: 'String'
            }
          },
          filter: {
            required: false,
            serializedName: 'filter',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricsPostBodySchemaParameters;