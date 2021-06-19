// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { DashboardResponse } from '../models/DashboardResponse';

/**
 * no description
 */
export class DashboardEndpointsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets a users Dashboard for a specific Brand
     * Gets a users Dashboard
     * @param brandId 
     */
    public async dashboardGet(brandId: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError('Required parameter brandId was null or undefined when calling dashboardGet.');
        }


        // Path Params
        const localVarPath = '/dashboard'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class DashboardEndpointsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dashboardGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dashboardGet(response: ResponseContext): Promise<DashboardResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DashboardResponse", ""
            ) as DashboardResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DashboardResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DashboardResponse", ""
            ) as DashboardResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
