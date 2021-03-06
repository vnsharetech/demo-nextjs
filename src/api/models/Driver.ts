/**
 * BrandTruth API v1
 * BrandTruth API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DriverDetails } from './DriverDetails';
import { Factor } from './Factor';
import { HttpFile } from '../http/http';

export class Driver {
    'id'?: number;
    'name'?: string;
    'description'?: string;
    'details'?: DriverDetails;
    'factor'?: Factor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "DriverDetails",
            "format": ""
        },
        {
            "name": "factor",
            "baseName": "factor",
            "type": "Factor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Driver.attributeTypeMap;
    }
    
    public constructor() {
    }
}

