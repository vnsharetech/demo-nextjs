import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DashboardResponse } from '../models/DashboardResponse';
import { DeleteSurveyResponse } from '../models/DeleteSurveyResponse';
import { Driver } from '../models/Driver';
import { DriverDetails } from '../models/DriverDetails';
import { Factor } from '../models/Factor';
import { FactorDetails } from '../models/FactorDetails';
import { GetByIdPostResponse } from '../models/GetByIdPostResponse';
import { GetSurveyByIdResponse } from '../models/GetSurveyByIdResponse';
import { HealthInfoResponse } from '../models/HealthInfoResponse';
import { ListPostsResponse } from '../models/ListPostsResponse';
import { ListSurveysResponse } from '../models/ListSurveysResponse';
import { NewPostRequest } from '../models/NewPostRequest';
import { NewSurveyRequest } from '../models/NewSurveyRequest';
import { PostDto } from '../models/PostDto';
import { PostSummaryDto } from '../models/PostSummaryDto';
import { PublicAuthSettingsDto } from '../models/PublicAuthSettingsDto';
import { Question } from '../models/Question';
import { QuestionScorer } from '../models/QuestionScorer';
import { ScoringLevel } from '../models/ScoringLevel';
import { Survey } from '../models/Survey';
import { SurveyDto } from '../models/SurveyDto';
import { SurveyType } from '../models/SurveyType';
import { TagDto } from '../models/TagDto';
import { UpdatePostRequest } from '../models/UpdatePostRequest';
import { UpdatePostResponse } from '../models/UpdatePostResponse';
import { UpdateSurveyRequest } from '../models/UpdateSurveyRequest';
import { UpdateSurveyResponse } from '../models/UpdateSurveyResponse';
import { ValidationProblemDetails } from '../models/ValidationProblemDetails';

import { ObservableAuthEndpointsApi } from "./ObservableAPI";
import { AuthEndpointsApiRequestFactory, AuthEndpointsApiResponseProcessor} from "../apis/AuthEndpointsApi";

export interface AuthEndpointsApiAuthGetRequest {
}

export class ObjectAuthEndpointsApi {
    private api: ObservableAuthEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: AuthEndpointsApiRequestFactory, responseProcessor?: AuthEndpointsApiResponseProcessor) {
        this.api = new ObservableAuthEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get public details for Auth0 authentication Domain, ClientId, and Audience
     * Gets Public Authentication Details
     * @param param the request object
     */
    public authGet(param: AuthEndpointsApiAuthGetRequest, options?: Configuration): Promise<PublicAuthSettingsDto> {
        return this.api.authGet( options).toPromise();
    }

}

import { ObservableDashboardEndpointsApi } from "./ObservableAPI";
import { DashboardEndpointsApiRequestFactory, DashboardEndpointsApiResponseProcessor} from "../apis/DashboardEndpointsApi";

export interface DashboardEndpointsApiDashboardGetRequest {
    /**
     * 
     * @type number
     * @memberof DashboardEndpointsApidashboardGet
     */
    brandId: number
}

export class ObjectDashboardEndpointsApi {
    private api: ObservableDashboardEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: DashboardEndpointsApiRequestFactory, responseProcessor?: DashboardEndpointsApiResponseProcessor) {
        this.api = new ObservableDashboardEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a users Dashboard for a specific Brand
     * Gets a users Dashboard
     * @param param the request object
     */
    public dashboardGet(param: DashboardEndpointsApiDashboardGetRequest, options?: Configuration): Promise<DashboardResponse> {
        return this.api.dashboardGet(param.brandId,  options).toPromise();
    }

}

import { ObservableHealthEndpointsApi } from "./ObservableAPI";
import { HealthEndpointsApiRequestFactory, HealthEndpointsApiResponseProcessor} from "../apis/HealthEndpointsApi";

export interface HealthEndpointsApiHealthInfoRequest {
}

export class ObjectHealthEndpointsApi {
    private api: ObservableHealthEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: HealthEndpointsApiRequestFactory, responseProcessor?: HealthEndpointsApiResponseProcessor) {
        this.api = new ObservableHealthEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets version and API publish date information
     * Get Version information for API
     * @param param the request object
     */
    public healthInfo(param: HealthEndpointsApiHealthInfoRequest, options?: Configuration): Promise<HealthInfoResponse> {
        return this.api.healthInfo( options).toPromise();
    }

}

import { ObservablePostsEndpointsApi } from "./ObservableAPI";
import { PostsEndpointsApiRequestFactory, PostsEndpointsApiResponseProcessor} from "../apis/PostsEndpointsApi";

export interface PostsEndpointsApiPostCreateRequest {
    /**
     * 
     * @type NewPostRequest
     * @memberof PostsEndpointsApipostCreate
     */
    newPostRequest?: NewPostRequest
}

export interface PostsEndpointsApiPostsDeleteRequest {
    /**
     * 
     * @type number
     * @memberof PostsEndpointsApipostsDelete
     */
    postId: number
}

export interface PostsEndpointsApiPostsGetByIdRequest {
    /**
     * 
     * @type number
     * @memberof PostsEndpointsApipostsGetById
     */
    postId: number
}

export interface PostsEndpointsApiPostsListRequest {
}

export interface PostsEndpointsApiPostsUpdateRequest {
    /**
     * 
     * @type UpdatePostRequest
     * @memberof PostsEndpointsApipostsUpdate
     */
    updatePostRequest?: UpdatePostRequest
}

export class ObjectPostsEndpointsApi {
    private api: ObservablePostsEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: PostsEndpointsApiRequestFactory, responseProcessor?: PostsEndpointsApiResponseProcessor) {
        this.api = new ObservablePostsEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Post
     * Creates a new Post
     * @param param the request object
     */
    public postCreate(param: PostsEndpointsApiPostCreateRequest, options?: Configuration): Promise<PostDto> {
        return this.api.postCreate(param.newPostRequest,  options).toPromise();
    }

    /**
     * Deletes a Post
     * Deletes a Post
     * @param param the request object
     */
    public postsDelete(param: PostsEndpointsApiPostsDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.postsDelete(param.postId,  options).toPromise();
    }

    /**
     * Gets a single Post by Id
     * Gets a single Post
     * @param param the request object
     */
    public postsGetById(param: PostsEndpointsApiPostsGetByIdRequest, options?: Configuration): Promise<GetByIdPostResponse> {
        return this.api.postsGetById(param.postId,  options).toPromise();
    }

    /**
     * Gets a list of all Posts
     * Gets a list of all Posts
     * @param param the request object
     */
    public postsList(param: PostsEndpointsApiPostsListRequest, options?: Configuration): Promise<ListPostsResponse> {
        return this.api.postsList( options).toPromise();
    }

    /**
     * Updates a Post to the provided details
     * Updates a Post
     * @param param the request object
     */
    public postsUpdate(param: PostsEndpointsApiPostsUpdateRequest, options?: Configuration): Promise<UpdatePostResponse> {
        return this.api.postsUpdate(param.updatePostRequest,  options).toPromise();
    }

}

import { ObservableSurveysEndpointsApi } from "./ObservableAPI";
import { SurveysEndpointsApiRequestFactory, SurveysEndpointsApiResponseProcessor} from "../apis/SurveysEndpointsApi";

export interface SurveysEndpointsApiSurveyCreateRequest {
    /**
     * 
     * @type NewSurveyRequest
     * @memberof SurveysEndpointsApisurveyCreate
     */
    newSurveyRequest?: NewSurveyRequest
}

export interface SurveysEndpointsApiSurveysDeleteRequest {
    /**
     * 
     * @type number
     * @memberof SurveysEndpointsApisurveysDelete
     */
    surveyId: number
}

export interface SurveysEndpointsApiSurveysGetByIdRequest {
    /**
     * 
     * @type number
     * @memberof SurveysEndpointsApisurveysGetById
     */
    surveyId: number
}

export interface SurveysEndpointsApiSurveysListRequest {
}

export interface SurveysEndpointsApiSurveysUpdateRequest {
    /**
     * 
     * @type UpdateSurveyRequest
     * @memberof SurveysEndpointsApisurveysUpdate
     */
    updateSurveyRequest?: UpdateSurveyRequest
}

export class ObjectSurveysEndpointsApi {
    private api: ObservableSurveysEndpointsApi

    public constructor(configuration: Configuration, requestFactory?: SurveysEndpointsApiRequestFactory, responseProcessor?: SurveysEndpointsApiResponseProcessor) {
        this.api = new ObservableSurveysEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Survey
     * Creates a new Survey
     * @param param the request object
     */
    public surveyCreate(param: SurveysEndpointsApiSurveyCreateRequest, options?: Configuration): Promise<Survey> {
        return this.api.surveyCreate(param.newSurveyRequest,  options).toPromise();
    }

    /**
     * Deletes a Survey
     * Deletes a Survey
     * @param param the request object
     */
    public surveysDelete(param: SurveysEndpointsApiSurveysDeleteRequest, options?: Configuration): Promise<DeleteSurveyResponse> {
        return this.api.surveysDelete(param.surveyId,  options).toPromise();
    }

    /**
     * Gets a single Survey by Id
     * Gets a single Survey
     * @param param the request object
     */
    public surveysGetById(param: SurveysEndpointsApiSurveysGetByIdRequest, options?: Configuration): Promise<GetSurveyByIdResponse> {
        return this.api.surveysGetById(param.surveyId,  options).toPromise();
    }

    /**
     * Gets a list of all Surveys
     * Gets a list of all Surveys
     * @param param the request object
     */
    public surveysList(param: SurveysEndpointsApiSurveysListRequest, options?: Configuration): Promise<ListSurveysResponse> {
        return this.api.surveysList( options).toPromise();
    }

    /**
     * Updates a Survey to the provided details
     * Updates a Survey
     * @param param the request object
     */
    public surveysUpdate(param: SurveysEndpointsApiSurveysUpdateRequest, options?: Configuration): Promise<UpdateSurveyResponse> {
        return this.api.surveysUpdate(param.updateSurveyRequest,  options).toPromise();
    }

}
