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

import { SurveyType } from './SurveyType';
import { HttpFile } from '../http/http';

export class SurveyDto {
    'id'?: number;
    'name'?: string;
    'description'?: string;
    'type'?: SurveyType;
    'numberOfQuestions'?: number;

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
            "name": "type",
            "baseName": "type",
            "type": "SurveyType",
            "format": ""
        },
        {
            "name": "numberOfQuestions",
            "baseName": "numberOfQuestions",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SurveyDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

