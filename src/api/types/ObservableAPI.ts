import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthEndpointsApiRequestFactory, AuthEndpointsApiResponseProcessor} from "../apis/AuthEndpointsApi";
export class ObservableAuthEndpointsApi {
    private requestFactory: AuthEndpointsApiRequestFactory;
    private responseProcessor: AuthEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthEndpointsApiRequestFactory,
        responseProcessor?: AuthEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthEndpointsApiResponseProcessor();
    }

    /**
     * Get public details for Auth0 authentication Domain, ClientId, and Audience
     * Gets Public Authentication Details
     */
    public authGet(options?: Configuration): Observable<PublicAuthSettingsDto> {
        const requestContextPromise = this.requestFactory.authGet(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authGet(rsp)));
            }));
    }
 
}

import { DashboardEndpointsApiRequestFactory, DashboardEndpointsApiResponseProcessor} from "../apis/DashboardEndpointsApi";
export class ObservableDashboardEndpointsApi {
    private requestFactory: DashboardEndpointsApiRequestFactory;
    private responseProcessor: DashboardEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DashboardEndpointsApiRequestFactory,
        responseProcessor?: DashboardEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DashboardEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DashboardEndpointsApiResponseProcessor();
    }

    /**
     * Gets a users Dashboard for a specific Brand
     * Gets a users Dashboard
     * @param brandId 
     */
    public dashboardGet(brandId: number, options?: Configuration): Observable<DashboardResponse> {
        const requestContextPromise = this.requestFactory.dashboardGet(brandId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dashboardGet(rsp)));
            }));
    }
 
}

import { HealthEndpointsApiRequestFactory, HealthEndpointsApiResponseProcessor} from "../apis/HealthEndpointsApi";
export class ObservableHealthEndpointsApi {
    private requestFactory: HealthEndpointsApiRequestFactory;
    private responseProcessor: HealthEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: HealthEndpointsApiRequestFactory,
        responseProcessor?: HealthEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HealthEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HealthEndpointsApiResponseProcessor();
    }

    /**
     * Gets version and API publish date information
     * Get Version information for API
     */
    public healthInfo(options?: Configuration): Observable<HealthInfoResponse> {
        const requestContextPromise = this.requestFactory.healthInfo(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.healthInfo(rsp)));
            }));
    }
 
}

import { PostsEndpointsApiRequestFactory, PostsEndpointsApiResponseProcessor} from "../apis/PostsEndpointsApi";
export class ObservablePostsEndpointsApi {
    private requestFactory: PostsEndpointsApiRequestFactory;
    private responseProcessor: PostsEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PostsEndpointsApiRequestFactory,
        responseProcessor?: PostsEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PostsEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PostsEndpointsApiResponseProcessor();
    }

    /**
     * Creates a new Post
     * Creates a new Post
     * @param newPostRequest 
     */
    public postCreate(newPostRequest?: NewPostRequest, options?: Configuration): Observable<PostDto> {
        const requestContextPromise = this.requestFactory.postCreate(newPostRequest, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postCreate(rsp)));
            }));
    }
 
    /**
     * Deletes a Post
     * Deletes a Post
     * @param postId 
     */
    public postsDelete(postId: number, options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.postsDelete(postId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postsDelete(rsp)));
            }));
    }
 
    /**
     * Gets a single Post by Id
     * Gets a single Post
     * @param postId 
     */
    public postsGetById(postId: number, options?: Configuration): Observable<GetByIdPostResponse> {
        const requestContextPromise = this.requestFactory.postsGetById(postId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postsGetById(rsp)));
            }));
    }
 
    /**
     * Gets a list of all Posts
     * Gets a list of all Posts
     */
    public postsList(options?: Configuration): Observable<ListPostsResponse> {
        const requestContextPromise = this.requestFactory.postsList(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postsList(rsp)));
            }));
    }
 
    /**
     * Updates a Post to the provided details
     * Updates a Post
     * @param updatePostRequest 
     */
    public postsUpdate(updatePostRequest?: UpdatePostRequest, options?: Configuration): Observable<UpdatePostResponse> {
        const requestContextPromise = this.requestFactory.postsUpdate(updatePostRequest, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postsUpdate(rsp)));
            }));
    }
 
}

import { SurveysEndpointsApiRequestFactory, SurveysEndpointsApiResponseProcessor} from "../apis/SurveysEndpointsApi";
export class ObservableSurveysEndpointsApi {
    private requestFactory: SurveysEndpointsApiRequestFactory;
    private responseProcessor: SurveysEndpointsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SurveysEndpointsApiRequestFactory,
        responseProcessor?: SurveysEndpointsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SurveysEndpointsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SurveysEndpointsApiResponseProcessor();
    }

    /**
     * Creates a new Survey
     * Creates a new Survey
     * @param newSurveyRequest 
     */
    public surveyCreate(newSurveyRequest?: NewSurveyRequest, options?: Configuration): Observable<Survey> {
        const requestContextPromise = this.requestFactory.surveyCreate(newSurveyRequest, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveyCreate(rsp)));
            }));
    }
 
    /**
     * Deletes a Survey
     * Deletes a Survey
     * @param surveyId 
     */
    public surveysDelete(surveyId: number, options?: Configuration): Observable<DeleteSurveyResponse> {
        const requestContextPromise = this.requestFactory.surveysDelete(surveyId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysDelete(rsp)));
            }));
    }
 
    /**
     * Gets a single Survey by Id
     * Gets a single Survey
     * @param surveyId 
     */
    public surveysGetById(surveyId: number, options?: Configuration): Observable<GetSurveyByIdResponse> {
        const requestContextPromise = this.requestFactory.surveysGetById(surveyId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysGetById(rsp)));
            }));
    }
 
    /**
     * Gets a list of all Surveys
     * Gets a list of all Surveys
     */
    public surveysList(options?: Configuration): Observable<ListSurveysResponse> {
        const requestContextPromise = this.requestFactory.surveysList(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysList(rsp)));
            }));
    }
 
    /**
     * Updates a Survey to the provided details
     * Updates a Survey
     * @param updateSurveyRequest 
     */
    public surveysUpdate(updateSurveyRequest?: UpdateSurveyRequest, options?: Configuration): Observable<UpdateSurveyResponse> {
        const requestContextPromise = this.requestFactory.surveysUpdate(updateSurveyRequest, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.surveysUpdate(rsp)));
            }));
    }
 
}
