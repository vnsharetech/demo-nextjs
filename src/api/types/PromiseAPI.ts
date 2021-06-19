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
import { ObservableAuthEndpointsApi } from './ObservableAPI';

import { AuthEndpointsApiRequestFactory, AuthEndpointsApiResponseProcessor} from "../apis/AuthEndpointsApi";
export class PromiseAuthEndpointsApi {
    private api: ObservableAuthEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthEndpointsApiRequestFactory,
        responseProcessor?: AuthEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableAuthEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get public details for Auth0 authentication Domain, ClientId, and Audience
     * Gets Public Authentication Details
     */
    public authGet(options?: Configuration): Promise<PublicAuthSettingsDto> {
        const result = this.api.authGet(options);
        return result.toPromise();
    }


}



import { ObservableDashboardEndpointsApi } from './ObservableAPI';

import { DashboardEndpointsApiRequestFactory, DashboardEndpointsApiResponseProcessor} from "../apis/DashboardEndpointsApi";
export class PromiseDashboardEndpointsApi {
    private api: ObservableDashboardEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DashboardEndpointsApiRequestFactory,
        responseProcessor?: DashboardEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableDashboardEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a users Dashboard for a specific Brand
     * Gets a users Dashboard
     * @param brandId 
     */
    public dashboardGet(brandId: number, options?: Configuration): Promise<DashboardResponse> {
        const result = this.api.dashboardGet(brandId, options);
        return result.toPromise();
    }


}



import { ObservableHealthEndpointsApi } from './ObservableAPI';

import { HealthEndpointsApiRequestFactory, HealthEndpointsApiResponseProcessor} from "../apis/HealthEndpointsApi";
export class PromiseHealthEndpointsApi {
    private api: ObservableHealthEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthEndpointsApiRequestFactory,
        responseProcessor?: HealthEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableHealthEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets version and API publish date information
     * Get Version information for API
     */
    public healthInfo(options?: Configuration): Promise<HealthInfoResponse> {
        const result = this.api.healthInfo(options);
        return result.toPromise();
    }


}



import { ObservablePostsEndpointsApi } from './ObservableAPI';

import { PostsEndpointsApiRequestFactory, PostsEndpointsApiResponseProcessor} from "../apis/PostsEndpointsApi";
export class PromisePostsEndpointsApi {
    private api: ObservablePostsEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PostsEndpointsApiRequestFactory,
        responseProcessor?: PostsEndpointsApiResponseProcessor
    ) {
        this.api = new ObservablePostsEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Post
     * Creates a new Post
     * @param newPostRequest 
     */
    public postCreate(newPostRequest?: NewPostRequest, options?: Configuration): Promise<PostDto> {
        const result = this.api.postCreate(newPostRequest, options);
        return result.toPromise();
    }

    /**
     * Deletes a Post
     * Deletes a Post
     * @param postId 
     */
    public postsDelete(postId: number, options?: Configuration): Promise<any> {
        const result = this.api.postsDelete(postId, options);
        return result.toPromise();
    }

    /**
     * Gets a single Post by Id
     * Gets a single Post
     * @param postId 
     */
    public postsGetById(postId: number, options?: Configuration): Promise<GetByIdPostResponse> {
        const result = this.api.postsGetById(postId, options);
        return result.toPromise();
    }

    /**
     * Gets a list of all Posts
     * Gets a list of all Posts
     */
    public postsList(options?: Configuration): Promise<ListPostsResponse> {
        const result = this.api.postsList(options);
        return result.toPromise();
    }

    /**
     * Updates a Post to the provided details
     * Updates a Post
     * @param updatePostRequest 
     */
    public postsUpdate(updatePostRequest?: UpdatePostRequest, options?: Configuration): Promise<UpdatePostResponse> {
        const result = this.api.postsUpdate(updatePostRequest, options);
        return result.toPromise();
    }


}



import { ObservableSurveysEndpointsApi } from './ObservableAPI';

import { SurveysEndpointsApiRequestFactory, SurveysEndpointsApiResponseProcessor} from "../apis/SurveysEndpointsApi";
export class PromiseSurveysEndpointsApi {
    private api: ObservableSurveysEndpointsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SurveysEndpointsApiRequestFactory,
        responseProcessor?: SurveysEndpointsApiResponseProcessor
    ) {
        this.api = new ObservableSurveysEndpointsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new Survey
     * Creates a new Survey
     * @param newSurveyRequest 
     */
    public surveyCreate(newSurveyRequest?: NewSurveyRequest, options?: Configuration): Promise<Survey> {
        const result = this.api.surveyCreate(newSurveyRequest, options);
        return result.toPromise();
    }

    /**
     * Deletes a Survey
     * Deletes a Survey
     * @param surveyId 
     */
    public surveysDelete(surveyId: number, options?: Configuration): Promise<DeleteSurveyResponse> {
        const result = this.api.surveysDelete(surveyId, options);
        return result.toPromise();
    }

    /**
     * Gets a single Survey by Id
     * Gets a single Survey
     * @param surveyId 
     */
    public surveysGetById(surveyId: number, options?: Configuration): Promise<GetSurveyByIdResponse> {
        const result = this.api.surveysGetById(surveyId, options);
        return result.toPromise();
    }

    /**
     * Gets a list of all Surveys
     * Gets a list of all Surveys
     */
    public surveysList(options?: Configuration): Promise<ListSurveysResponse> {
        const result = this.api.surveysList(options);
        return result.toPromise();
    }

    /**
     * Updates a Survey to the provided details
     * Updates a Survey
     * @param updateSurveyRequest 
     */
    public surveysUpdate(updateSurveyRequest?: UpdateSurveyRequest, options?: Configuration): Promise<UpdateSurveyResponse> {
        const result = this.api.surveysUpdate(updateSurveyRequest, options);
        return result.toPromise();
    }


}



