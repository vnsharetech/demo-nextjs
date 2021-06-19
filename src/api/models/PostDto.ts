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

import { TagDto } from './TagDto';
import { HttpFile } from '../http/http';

export class PostDto {
    'id'?: number;
    'title'?: string;
    'summary'?: string;
    'body'?: string;
    'tags'?: Array<TagDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<TagDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PostDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

