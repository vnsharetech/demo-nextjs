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

import { Driver } from './Driver';
import { Factor } from './Factor';
import { Question } from './Question';
import { ScoringLevel } from './ScoringLevel';
import { HttpFile } from '../http/http';

export class QuestionScorer {
    'id'?: number;
    'name'?: string;
    'question'?: Question;
    'reverseKeyed'?: boolean;
    'factor'?: Factor;
    'driver'?: Driver;
    'pst'?: ScoringLevel;

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
            "name": "question",
            "baseName": "question",
            "type": "Question",
            "format": ""
        },
        {
            "name": "reverseKeyed",
            "baseName": "reverseKeyed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "factor",
            "baseName": "factor",
            "type": "Factor",
            "format": ""
        },
        {
            "name": "driver",
            "baseName": "driver",
            "type": "Driver",
            "format": ""
        },
        {
            "name": "pst",
            "baseName": "pst",
            "type": "ScoringLevel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return QuestionScorer.attributeTypeMap;
    }
    
    public constructor() {
    }
}

