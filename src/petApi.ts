//@ts-nocheck

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: () => ({}),
});

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postsControllerUpdatePostPosition: build.mutation<
      PostsControllerUpdatePostPositionApiResponse,
      PostsControllerUpdatePostPositionApiArg
    >({
      query: (queryArg) => ({
        url: `/posts/update-post-position`,
        method: "PATCH",
        body: queryArg.updatePostPositionDto,
      }),
    }),
    postsControllerCreate: build.mutation<
      PostsControllerCreateApiResponse,
      PostsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/posts`,
        method: "POST",
        body: queryArg.createPostDto,
      }),
    }),
    postsControllerFindAll: build.query<
      PostsControllerFindAllApiResponse,
      PostsControllerFindAllApiArg
    >({
      query: () => ({ url: `/posts` }),
    }),
    postsControllerGetPostsTreeWithProblemsIds: build.query<
      PostsControllerGetPostsTreeWithProblemsIdsApiResponse,
      PostsControllerGetPostsTreeWithProblemsIdsApiArg
    >({
      query: () => ({ url: `/posts/get-posts-tree-with-problems-ids` }),
    }),
    postsControllerGetProblemsOfTest: build.query<
      PostsControllerGetProblemsOfTestApiResponse,
      PostsControllerGetProblemsOfTestApiArg
    >({
      query: (queryArg) => ({
        url: `/posts/get-problems-of-test/${queryArg.postId}`,
      }),
    }),
    postsControllerGetPostsTree: build.query<
      PostsControllerGetPostsTreeApiResponse,
      PostsControllerGetPostsTreeApiArg
    >({
      query: () => ({ url: `/posts/tree` }),
    }),
    postsControllerGetPostsQuotes: build.query<
      PostsControllerGetPostsQuotesApiResponse,
      PostsControllerGetPostsQuotesApiArg
    >({
      query: () => ({ url: `/posts/posts-quotes` }),
    }),
    postsControllerGetPostsMedias: build.query<
      PostsControllerGetPostsMediasApiResponse,
      PostsControllerGetPostsMediasApiArg
    >({
      query: (queryArg) => ({
        url: `/posts/posts-medias`,
        params: {
          loadAll: queryArg.loadAll,
          page: queryArg.page,
          filter: queryArg.filter,
        },
      }),
    }),
    postsControllerFindOne: build.query<
      PostsControllerFindOneApiResponse,
      PostsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
    }),
    postsControllerUpdate: build.mutation<
      PostsControllerUpdateApiResponse,
      PostsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/posts/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updatePostDto,
      }),
    }),
    postsControllerRemove: build.mutation<
      PostsControllerRemoveApiResponse,
      PostsControllerRemoveApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}`, method: "DELETE" }),
    }),
    siteConfigControllerGetConfig: build.query<
      SiteConfigControllerGetConfigApiResponse,
      SiteConfigControllerGetConfigApiArg
    >({
      query: () => ({ url: `/site-config` }),
    }),
    siteConfigControllerUpdateConfig: build.mutation<
      SiteConfigControllerUpdateConfigApiResponse,
      SiteConfigControllerUpdateConfigApiArg
    >({
      query: (queryArg) => ({
        url: `/site-config`,
        method: "PATCH",
        body: queryArg.updateSiteConfigDto,
      }),
    }),
    problemsControllerCreate: build.mutation<
      ProblemsControllerCreateApiResponse,
      ProblemsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/problems`,
        method: "POST",
        body: queryArg.createProblemDto,
      }),
    }),
    problemsControllerFindAll: build.query<
      ProblemsControllerFindAllApiResponse,
      ProblemsControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/problems`,
        params: { withPosts: queryArg.withPosts },
      }),
    }),
    problemsControllerAdminFindAll: build.query<
      ProblemsControllerAdminFindAllApiResponse,
      ProblemsControllerAdminFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/problems/admin-get-all`,
        params: { withPosts: queryArg.withPosts },
      }),
    }),
    problemsControllerFindOne: build.query<
      ProblemsControllerFindOneApiResponse,
      ProblemsControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/problems/${queryArg.id}` }),
    }),
    problemsControllerUpdate: build.mutation<
      ProblemsControllerUpdateApiResponse,
      ProblemsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/problems/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateProblemDto,
      }),
    }),
    problemsControllerRemove: build.mutation<
      ProblemsControllerRemoveApiResponse,
      ProblemsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/problems/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    searchControllerSearchByPosts: build.query<
      SearchControllerSearchByPostsApiResponse,
      SearchControllerSearchByPostsApiArg
    >({
      query: (queryArg) => ({
        url: `/search/by-posts`,
        params: { text: queryArg.text },
      }),
    }),
    searchControllerSearchByCategories: build.query<
      SearchControllerSearchByCategoriesApiResponse,
      SearchControllerSearchByCategoriesApiArg
    >({
      query: (queryArg) => ({
        url: `/search/by-categories`,
        params: { text: queryArg.text },
      }),
    }),
    calculatorsControllerCreate: build.mutation<
      CalculatorsControllerCreateApiResponse,
      CalculatorsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/calculators`,
        method: "POST",
        body: queryArg.createCalculatorDto,
      }),
    }),
    calculatorsControllerFindAll: build.query<
      CalculatorsControllerFindAllApiResponse,
      CalculatorsControllerFindAllApiArg
    >({
      query: (queryArg) => ({
        url: `/calculators`,
        params: {
          loadAll: queryArg.loadAll,
          page: queryArg.page,
          withPosts: queryArg.withPosts,
          variables: queryArg.variables,
          resultVariables: queryArg.resultVariables,
        },
      }),
    }),
    calculatorsControllerGetCalculatorsVariables: build.query<
      CalculatorsControllerGetCalculatorsVariablesApiResponse,
      CalculatorsControllerGetCalculatorsVariablesApiArg
    >({
      query: () => ({ url: `/calculators/get-variables` }),
    }),
    calculatorsControllerFindOne: build.query<
      CalculatorsControllerFindOneApiResponse,
      CalculatorsControllerFindOneApiArg
    >({
      query: (queryArg) => ({
        url: `/calculators/${queryArg.id}`,
        params: { withPosts: queryArg.withPosts },
      }),
    }),
    calculatorsControllerUpdate: build.mutation<
      CalculatorsControllerUpdateApiResponse,
      CalculatorsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/calculators/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateCalculatorDto,
      }),
    }),
    calculatorsControllerRemove: build.mutation<
      CalculatorsControllerRemoveApiResponse,
      CalculatorsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/calculators/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    pagesControllerGetInfoForMainPage: build.query<
      PagesControllerGetInfoForMainPageApiResponse,
      PagesControllerGetInfoForMainPageApiArg
    >({
      query: () => ({ url: `/pages/main-page-data` }),
    }),
    pagesControllerGetInfoForContentPage: build.query<
      PagesControllerGetInfoForContentPageApiResponse,
      PagesControllerGetInfoForContentPageApiArg
    >({
      query: () => ({ url: `/pages/content-page-data` }),
    }),
    filesControllerUpload: build.mutation<
      FilesControllerUploadApiResponse,
      FilesControllerUploadApiArg
    >({
      query: (queryArg) => ({
        url: `/files`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    filesControllerGetFileInfo: build.query<
      FilesControllerGetFileInfoApiResponse,
      FilesControllerGetFileInfoApiArg
    >({
      query: (queryArg) => ({ url: `/files/info/${queryArg.id}` }),
    }),
    filesControllerGetNotVideoFile: build.query<
      FilesControllerGetNotVideoFileApiResponse,
      FilesControllerGetNotVideoFileApiArg
    >({
      query: (queryArg) => ({ url: `/files/${queryArg.id}` }),
    }),
    filesControllerGetStreamingVideoFile: build.query<
      FilesControllerGetStreamingVideoFileApiResponse,
      FilesControllerGetStreamingVideoFileApiArg
    >({
      query: (queryArg) => ({ url: `/files/video/${queryArg.id}` }),
    }),
    filesControllerDownloadFile: build.query<
      FilesControllerDownloadFileApiResponse,
      FilesControllerDownloadFileApiArg
    >({
      query: (queryArg) => ({ url: `/files/download/${queryArg.id}` }),
    }),
    filesControllerDeleteFile: build.mutation<
      FilesControllerDeleteFileApiResponse,
      FilesControllerDeleteFileApiArg
    >({
      query: (queryArg) => ({
        url: `/files/delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    filesControllerUpdateFileMetaData: build.mutation<
      FilesControllerUpdateFileMetaDataApiResponse,
      FilesControllerUpdateFileMetaDataApiArg
    >({
      query: (queryArg) => ({
        url: `/files/update-meta-data/${queryArg.fileId}`,
        method: "PATCH",
        body: queryArg.updateFileMetaDataDto,
      }),
    }),
    usersControllerRegister: build.mutation<
      UsersControllerRegisterApiResponse,
      UsersControllerRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/users/register`,
        method: "POST",
        body: queryArg.registerUserDto,
      }),
    }),
    usersControllerLogin: build.mutation<
      UsersControllerLoginApiResponse,
      UsersControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/users/login`,
        method: "POST",
        body: queryArg.loginUserDto,
      }),
    }),
    usersControllerWhoAmI: build.query<
      UsersControllerWhoAmIApiResponse,
      UsersControllerWhoAmIApiArg
    >({
      query: () => ({ url: `/users/whoAmI` }),
    }),
    usersControllerUpdatePassword: build.mutation<
      UsersControllerUpdatePasswordApiResponse,
      UsersControllerUpdatePasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/users/update-password`,
        method: "PATCH",
        body: queryArg.updateUserPasswordDto,
      }),
    }),
    usersControllerUpdateUserData: build.mutation<
      UsersControllerUpdateUserDataApiResponse,
      UsersControllerUpdateUserDataApiArg
    >({
      query: (queryArg) => ({
        url: `/users/update-user-data`,
        method: "PATCH",
        body: queryArg.updateUserDataDto,
      }),
    }),
    usersControllerProblemAttempt: build.mutation<
      UsersControllerProblemAttemptApiResponse,
      UsersControllerProblemAttemptApiArg
    >({
      query: (queryArg) => ({
        url: `/users/problem-attempt`,
        method: "POST",
        body: queryArg.problemAttemptDto,
      }),
    }),
    usersControllerResetProblemsAttempts: build.mutation<
      UsersControllerResetProblemsAttemptsApiResponse,
      UsersControllerResetProblemsAttemptsApiArg
    >({
      query: () => ({ url: `/users/reset-problems-attempts`, method: "POST" }),
    }),
    usersControllerRestorePasswordRequest: build.mutation<
      UsersControllerRestorePasswordRequestApiResponse,
      UsersControllerRestorePasswordRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/users/restore-password-request`,
        method: "POST",
        body: queryArg.restorePasswordRequestDto,
      }),
    }),
    usersControllerRestorePasswordConfirm: build.mutation<
      UsersControllerRestorePasswordConfirmApiResponse,
      UsersControllerRestorePasswordConfirmApiArg
    >({
      query: (queryArg) => ({
        url: `/users/restore-password-confirm`,
        method: "POST",
        body: queryArg.restorePasswordConfirmDto,
      }),
    }),
    usersControllerUpdateUserEmailRequest: build.mutation<
      UsersControllerUpdateUserEmailRequestApiResponse,
      UsersControllerUpdateUserEmailRequestApiArg
    >({
      query: (queryArg) => ({
        url: `/users/update-email-request`,
        method: "PATCH",
        body: queryArg.updateUserEmailRequestDto,
      }),
    }),
    usersControllerUpdateUserEmailConfirm: build.mutation<
      UsersControllerUpdateUserEmailConfirmApiResponse,
      UsersControllerUpdateUserEmailConfirmApiArg
    >({
      query: (queryArg) => ({
        url: `/users/update-email-confirm`,
        method: "PATCH",
        body: queryArg.updateUserEmailConfirmDto,
      }),
    }),
    staticPagesControllerCreate: build.mutation<
      StaticPagesControllerCreateApiResponse,
      StaticPagesControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/static-pages`,
        method: "POST",
        body: queryArg.createStaticPageDto,
      }),
    }),
    staticPagesControllerFindAll: build.query<
      StaticPagesControllerFindAllApiResponse,
      StaticPagesControllerFindAllApiArg
    >({
      query: () => ({ url: `/static-pages` }),
    }),
    staticPagesControllerFindOne: build.query<
      StaticPagesControllerFindOneApiResponse,
      StaticPagesControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/static-pages/${queryArg.id}` }),
    }),
    staticPagesControllerUpdate: build.mutation<
      StaticPagesControllerUpdateApiResponse,
      StaticPagesControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/static-pages/${queryArg.id}`,
        method: "PATCH",
        body: queryArg.updateStaticPageDto,
      }),
    }),
    staticPagesControllerRemove: build.mutation<
      StaticPagesControllerRemoveApiResponse,
      StaticPagesControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/static-pages/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as petApi };
export type PostsControllerUpdatePostPositionApiResponse =
  /** status 200  */ UpdatePostPositionReturnDto;
export type PostsControllerUpdatePostPositionApiArg = {
  updatePostPositionDto: UpdatePostPositionDto;
};
export type PostsControllerCreateApiResponse =
  /** status 200  */
  CreatePostReturnDto | /** status 201  */ PostEntity;
export type PostsControllerCreateApiArg = {
  createPostDto: CreatePostDto;
};
export type PostsControllerFindAllApiResponse =
  /** status 200  */ GetPostReturnDto[];
export type PostsControllerFindAllApiArg = void;
export type PostsControllerGetPostsTreeWithProblemsIdsApiResponse =
  /** status 200  */ object;
export type PostsControllerGetPostsTreeWithProblemsIdsApiArg = void;
export type PostsControllerGetProblemsOfTestApiResponse =
  /** status 200  */ GetProblemsOfTestDto;
export type PostsControllerGetProblemsOfTestApiArg = {
  postId: string;
};
export type PostsControllerGetPostsTreeApiResponse = /** status 200  */ object;
export type PostsControllerGetPostsTreeApiArg = void;
export type PostsControllerGetPostsQuotesApiResponse =
  /** status 200  */ GetPostsQuoteReturnDto[];
export type PostsControllerGetPostsQuotesApiArg = void;
export type PostsControllerGetPostsMediasApiResponse =
  /** status 200  */ GetPostsMediaReturnDto;
export type PostsControllerGetPostsMediasApiArg = {
  loadAll: boolean;
  page: number;
  filter: string;
};
export type PostsControllerFindOneApiResponse =
  /** status 200  */ GetPostReturnDto;
export type PostsControllerFindOneApiArg = {
  id: string;
};
export type PostsControllerUpdateApiResponse =
  /** status 200  */ UpdatePostReturnDto;
export type PostsControllerUpdateApiArg = {
  id: string;
  updatePostDto: UpdatePostDto;
};
export type PostsControllerRemoveApiResponse = /** status 200  */ object;
export type PostsControllerRemoveApiArg = {
  id: string;
};
export type SiteConfigControllerGetConfigApiResponse =
  /** status 200  */ GetSiteConfigReturnDto;
export type SiteConfigControllerGetConfigApiArg = void;
export type SiteConfigControllerUpdateConfigApiResponse =
  /** status 200  */ UpdateSiteConfigReturnDto;
export type SiteConfigControllerUpdateConfigApiArg = {
  updateSiteConfigDto: UpdateSiteConfigDto;
};
export type ProblemsControllerCreateApiResponse =
  /** status 200  */
  CreateProblemReturnDto | /** status 201  */ object;
export type ProblemsControllerCreateApiArg = {
  createProblemDto: CreateProblemDto;
};
export type ProblemsControllerFindAllApiResponse =
  /** status 200  */ GetProblemsItemDto[];
export type ProblemsControllerFindAllApiArg = {
  withPosts: boolean;
};
export type ProblemsControllerAdminFindAllApiResponse =
  /** status 200  */ GetProblemsItemDto[];
export type ProblemsControllerAdminFindAllApiArg = {
  withPosts: boolean;
};
export type ProblemsControllerFindOneApiResponse =
  /** status 200  */ GetProblemReturnDto;
export type ProblemsControllerFindOneApiArg = {
  id: string;
};
export type ProblemsControllerUpdateApiResponse =
  /** status 200  */ UpdateProblemReturnDto;
export type ProblemsControllerUpdateApiArg = {
  id: string;
  updateProblemDto: UpdateProblemDto;
};
export type ProblemsControllerRemoveApiResponse = /** status 200  */ object;
export type ProblemsControllerRemoveApiArg = {
  id: string;
};
export type SearchControllerSearchByPostsApiResponse =
  /** status 200  */ SearchByPostsItemReturnDto[];
export type SearchControllerSearchByPostsApiArg = {
  text: string;
};
export type SearchControllerSearchByCategoriesApiResponse =
  /** status 200  */ SearchByCategoriesItemReturnDto[];
export type SearchControllerSearchByCategoriesApiArg = {
  text: string;
};
export type CalculatorsControllerCreateApiResponse =
  /** status 200  */
  CreateCalculatorReturnDto | /** status 201  */ object;
export type CalculatorsControllerCreateApiArg = {
  createCalculatorDto: CreateCalculatorDto;
};
export type CalculatorsControllerFindAllApiResponse =
  /** status 200  */ GetCalculatorsReturnDto;
export type CalculatorsControllerFindAllApiArg = {
  loadAll: boolean;
  page: number;
  withPosts: boolean;
  variables: string[];
  resultVariables: string[];
};
export type CalculatorsControllerGetCalculatorsVariablesApiResponse =
  /** status 200  */ GetCalculatorsVariablesReturnDto;
export type CalculatorsControllerGetCalculatorsVariablesApiArg = void;
export type CalculatorsControllerFindOneApiResponse =
  /** status 200  */ GetCalculatorsItemDto;
export type CalculatorsControllerFindOneApiArg = {
  withPosts: boolean;
  id: string;
};
export type CalculatorsControllerUpdateApiResponse =
  /** status 200  */ UpdateCalculatorReturnDto;
export type CalculatorsControllerUpdateApiArg = {
  id: string;
  updateCalculatorDto: UpdateCalculatorDto;
};
export type CalculatorsControllerRemoveApiResponse = unknown;
export type CalculatorsControllerRemoveApiArg = {
  id: string;
};
export type PagesControllerGetInfoForMainPageApiResponse =
  /** status 200  */ GetInfoForMainPageReturnDto;
export type PagesControllerGetInfoForMainPageApiArg = void;
export type PagesControllerGetInfoForContentPageApiResponse =
  /** status 200  */ GetInfoForContentPageReturnDto;
export type PagesControllerGetInfoForContentPageApiArg = void;
export type FilesControllerUploadApiResponse =
  /** status 200  */ UploadFileReturnDto[];
export type FilesControllerUploadApiArg = {
  body: {
    file?: Blob;
  };
};
export type FilesControllerGetFileInfoApiResponse =
  /** status 200  */ FileResponseVm;
export type FilesControllerGetFileInfoApiArg = {
  id: string;
};
export type FilesControllerGetNotVideoFileApiResponse = unknown;
export type FilesControllerGetNotVideoFileApiArg = {
  id: string;
};
export type FilesControllerGetStreamingVideoFileApiResponse = unknown;
export type FilesControllerGetStreamingVideoFileApiArg = {
  id: string;
};
export type FilesControllerDownloadFileApiResponse = unknown;
export type FilesControllerDownloadFileApiArg = {
  id: string;
};
export type FilesControllerDeleteFileApiResponse =
  /** status 201  */ FileResponseVm;
export type FilesControllerDeleteFileApiArg = {
  id: string;
};
export type FilesControllerUpdateFileMetaDataApiResponse =
  /** status 200  */ UpdateFileMetaDataReturnDto;
export type FilesControllerUpdateFileMetaDataApiArg = {
  fileId: string;
  updateFileMetaDataDto: UpdateFileMetaDataDto;
};
export type UsersControllerRegisterApiResponse =
  /** status 200  */
  RegisterUserReturnDto | /** status 201  */ undefined;
export type UsersControllerRegisterApiArg = {
  registerUserDto: RegisterUserDto;
};
export type UsersControllerLoginApiResponse =
  /** status 200  */
  LoginUserReturnDto | /** status 201  */ undefined;
export type UsersControllerLoginApiArg = {
  loginUserDto: LoginUserDto;
};
export type UsersControllerWhoAmIApiResponse =
  /** status 200  */ WhoAmIReturnDto;
export type UsersControllerWhoAmIApiArg = void;
export type UsersControllerUpdatePasswordApiResponse =
  /** status 200  */ UpdateUserPasswordReturnDto;
export type UsersControllerUpdatePasswordApiArg = {
  updateUserPasswordDto: UpdateUserPasswordDto;
};
export type UsersControllerUpdateUserDataApiResponse =
  /** status 200  */ UpdateUserDataReturnDto;
export type UsersControllerUpdateUserDataApiArg = {
  updateUserDataDto: UpdateUserDataDto;
};
export type UsersControllerProblemAttemptApiResponse =
  /** status 200  */
  ProblemAttemptReturnDto | /** status 201  */ ProblemAttempt;
export type UsersControllerProblemAttemptApiArg = {
  problemAttemptDto: ProblemAttemptDto;
};
export type UsersControllerResetProblemsAttemptsApiResponse = unknown;
export type UsersControllerResetProblemsAttemptsApiArg = void;
export type UsersControllerRestorePasswordRequestApiResponse = unknown;
export type UsersControllerRestorePasswordRequestApiArg = {
  restorePasswordRequestDto: RestorePasswordRequestDto;
};
export type UsersControllerRestorePasswordConfirmApiResponse = unknown;
export type UsersControllerRestorePasswordConfirmApiArg = {
  restorePasswordConfirmDto: RestorePasswordConfirmDto;
};
export type UsersControllerUpdateUserEmailRequestApiResponse = unknown;
export type UsersControllerUpdateUserEmailRequestApiArg = {
  updateUserEmailRequestDto: UpdateUserEmailRequestDto;
};
export type UsersControllerUpdateUserEmailConfirmApiResponse = unknown;
export type UsersControllerUpdateUserEmailConfirmApiArg = {
  updateUserEmailConfirmDto: UpdateUserEmailConfirmDto;
};
export type StaticPagesControllerCreateApiResponse =
  /** status 200  */
  CreateStaticPageReturnDto | /** status 201  */ StaticPageEntity;
export type StaticPagesControllerCreateApiArg = {
  createStaticPageDto: CreateStaticPageDto;
};
export type StaticPagesControllerFindAllApiResponse =
  /** status 200  */ GetStaticPageReturnDto[];
export type StaticPagesControllerFindAllApiArg = void;
export type StaticPagesControllerFindOneApiResponse =
  /** status 200  */ GetStaticPageReturnDto;
export type StaticPagesControllerFindOneApiArg = {
  id: string;
};
export type StaticPagesControllerUpdateApiResponse =
  /** status 200  */ UpdateStaticPageReturnDto;
export type StaticPagesControllerUpdateApiArg = {
  id: string;
  updateStaticPageDto: UpdateStaticPageDto;
};
export type StaticPagesControllerRemoveApiResponse = /** status 200  */ object;
export type StaticPagesControllerRemoveApiArg = {
  id: string;
};
export type UpdatePostPositionReturnDto = {
  result: boolean;
};
export type UpdatePostPositionDto = {
  targetPostId: string;
  newParentOrSiblingId: string;
  dropToGap: boolean;
  dropPosition: number;
};
export type PostContent = {
  type: "text" | "quote" | "media" | "calculator" | "problem" | "embed";
  contentTitle?: string;
  calcId?: string;
  problemId?: string;
  text?: string;
  media?: string[];
  enabledForView?: boolean;
  id: string;
  embedHtml: string;
  isDraft: boolean;
};
export type PostLangData = {
  title: string;
  slug: string;
  content: PostContent[];
};
export type PostLanguagesDictionary = {
  ru: PostLangData;
  en: PostLangData;
};
export type CreatePostReturnDto = {
  _id: string;
  priority: number;
  languages: PostLanguagesDictionary;
  parent: string;
  related: string[];
  chapter: string;
  isRoot: boolean;
  createdAt: string;
  updatedAt: string;
};
export type PostEntity = {
  _id: string;
  priority: number;
  languages: PostLanguagesDictionary;
  parent: string;
  related: string[];
  chapter: string;
  isRoot: boolean;
  createdAt: string;
  updatedAt: string;
};
export type ContentDto = {
  type: "text" | "quote" | "media" | "calculator" | "problem" | "embed";
  calcId?: string;
  problemId?: string;
  text?: string;
  embedHtml?: string;
  media?: string[];
  contentTitle?: string;
  enabledForView?: boolean;
  id: string;
  isDraft?: boolean;
};
export type CreatePostDto = {
  title: string;
  slug: string;
  chapter: string;
  parent: string;
  related: string[];
  content: ContentDto[];
  isRoot: boolean;
};
export type CustomPostContent = {
  type: "text" | "quote" | "media" | "calculator" | "problem" | "embed";
  contentTitle?: string;
  calcId?: string;
  problemId?: string;
  text?: string;
  media?: string[];
  enabledForView?: boolean;
  id: string;
  embedHtml: string;
  isDraft: boolean;
  posts?: PostEntity[];
};
export type CustomPostLangData = {
  title: string;
  slug: string;
  content: CustomPostContent[];
};
export type CustomLanguage = {
  ru: CustomPostLangData;
  en: CustomPostLangData;
};
export type PostSiblingDto = {
  _id: string;
  title: string;
  slug: string;
};
export type PostBreadcrumbsDto = {
  children: PostEntity;
};
export type SearchByPostsItemReturnDto = {
  _id: string;
  numOfOccurrences: number;
  slug: string;
  title: string;
};
export type GetPostReturnDto = {
  languages: CustomLanguage;
  siblings: PostSiblingDto[];
  breadcrumbs: PostBreadcrumbsDto[];
  mentions: SearchByPostsItemReturnDto[];
  _id: string;
  priority: number;
  parent: string;
  related: string[];
  chapter: string;
  isRoot: boolean;
  createdAt: string;
  updatedAt: string;
};
export type GetProblemsOfTestDto = {
  problemIds: string[];
};
export type GetPostsQuoteReturnDto = {
  postId: string;
  postTitle: string;
  postSlug: string;
  quote: string;
};
export type GetPostsMediaReturnItemDto = {
  postId: string;
  postTitle: string;
  postSlug: string;
  media: string[];
};
export type GetPostsMediaReturnDto = {
  media: GetPostsMediaReturnItemDto[];
  totalPagesCount: number;
};
export type UpdatePostReturnDto = {
  _id: string;
  priority: number;
  languages: PostLanguagesDictionary;
  parent: string;
  related: string[];
  chapter: string;
  isRoot: boolean;
  createdAt: string;
  updatedAt: string;
};
export type UpdatePostDto = {
  title: string;
  slug: string;
  chapter: string;
  parent: string;
  related: string[];
  content: ContentDto[];
  isRoot: boolean;
};
export type GetSiteConfigReturnDto = {
  _id: string;
  newPostsDuring: number;
  browsingHistory: number;
  browsingHistoryScrollPercentage: number;
  postsPerLetter: number;
  problemBlockInterval: number;
  problemsCountInPostToBecomeTest: number;
  postsMediaLoadCount: number;
  calculatorsLoadCount: number;
  createdAt: string;
  updatedAt: string;
};
export type UpdateSiteConfigReturnDto = {
  _id: string;
  newPostsDuring: number;
  browsingHistory: number;
  browsingHistoryScrollPercentage: number;
  postsPerLetter: number;
  problemBlockInterval: number;
  problemsCountInPostToBecomeTest: number;
  postsMediaLoadCount: number;
  calculatorsLoadCount: number;
  createdAt: string;
  updatedAt: string;
};
export type UpdateSiteConfigDto = {
  newPostsDuring: number;
  browsingHistory: number;
  browsingHistoryScrollPercentage: number;
  postsPerLetter: number;
  problemBlockInterval: number;
  problemsCountInPostToBecomeTest: number;
  postsMediaLoadCount: number;
  calculatorsLoadCount: number;
};
export type ProblemLangData = {
  title: string;
};
export type ProblemLanguagesDictionary = {
  ru: ProblemLangData;
  en: ProblemLangData;
};
export type ProblemAnswerLangData = {
  text: string;
};
export type ProblemAnswerLanguagesDictionary = {
  ru: ProblemAnswerLangData;
  en: ProblemAnswerLangData;
};
export type ProblemAnswer = {
  correct: boolean;
  languages: ProblemAnswerLanguagesDictionary;
};
export type CreateProblemReturnDto = {
  _id: string;
  languages: ProblemLanguagesDictionary;
  answers: ProblemAnswer[];
  media: string[];
  createdAt: string;
  updatedAt: string;
};
export type CreateProblemAnswerLanguage = {
  text: string;
};
export type CreateProblemAnswerLanguagesDictionary = {
  ru: CreateProblemAnswerLanguage;
  en: CreateProblemAnswerLanguage;
};
export type CreateProblemAnswerDto = {
  correct: boolean;
  languages: CreateProblemAnswerLanguagesDictionary;
};
export type CreateProblemDto = {
  title: string;
  answers: CreateProblemAnswerDto[];
  media: string[];
};
export type GetProblemPostDto = {
  _id?: string;
  priority?: number;
  languages?: PostLanguagesDictionary;
  parent?: string;
  related?: string[];
  chapter?: string;
  isRoot?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type GetProblemsItemDto = {
  willBeAvailableForAttemptIn?: number;
  posts: GetProblemPostDto[];
  _id: string;
  languages: ProblemLanguagesDictionary;
  answers: ProblemAnswer[];
  media: string[];
  createdAt: string;
  updatedAt: string;
};
export type GetProblemReturnDto = {
  willBeAvailableForAttemptIn?: number;
  posts: GetProblemPostDto[];
  _id: string;
  languages: ProblemLanguagesDictionary;
  answers: ProblemAnswer[];
  media: string[];
  createdAt: string;
  updatedAt: string;
};
export type UpdateProblemReturnDto = {
  _id: string;
  languages: ProblemLanguagesDictionary;
  answers: ProblemAnswer[];
  media: string[];
  createdAt: string;
  updatedAt: string;
};
export type UpdateProblemDto = {
  title: string;
  answers: CreateProblemAnswerDto[];
  media: string[];
};
export type SearchByCategoriesItemReturnDto = {
  _id: string;
  slug: string;
  title: string;
  posts: SearchByPostsItemReturnDto[];
};
export type CalculatorLangData = {
  title: string;
  calculatorDescriptions: string[];
};
export type CalculatorLanguagesDictionary = {
  ru: CalculatorLangData;
  en: CalculatorLangData;
};
export type CalculatorVariableLangData = {
  description: string;
};
export type CalculatorVariableLanguagesDictionary = {
  ru: CalculatorVariableLangData;
  en: CalculatorVariableLangData;
};
export type CalculatorVariable = {
  name: string;
  languages: CalculatorVariableLanguagesDictionary;
  initialValue: number;
};
export type CreateCalculatorReturnDto = {
  _id: string;
  languages: CalculatorLanguagesDictionary;
  media: string[];
  expressions: string[];
  variables: CalculatorVariable[];
  resultVariables: string[];
  createdAt: string;
  updatedAt: string;
};
export type CreateCalculatorVariableLanguage = {
  description: string;
};
export type CreateCalculatorVariableLanguagesDictionary = {
  ru: CreateCalculatorVariableLanguage;
  en: CreateCalculatorVariableLanguage;
};
export type CreateCalculatorVariableDto = {
  name: string;
  initialValue: number;
  languages: CreateCalculatorVariableLanguagesDictionary;
};
export type CreateCalculatorDto = {
  title: string;
  media: string[];
  calculatorDescriptions: string[];
  expressions: string[];
  variables: CreateCalculatorVariableDto[];
  resultVariables: string[];
};
export type GetCalculatorsItemDto = {
  posts?: PostEntity[];
  _id: string;
  languages: CalculatorLanguagesDictionary;
  media: string[];
  expressions: string[];
  variables: CalculatorVariable[];
  resultVariables: string[];
  createdAt: string;
  updatedAt: string;
};
export type GetCalculatorsReturnDto = {
  totalPagesCount: number;
  calculators: GetCalculatorsItemDto[];
};
export type GetCalculatorsVariablesReturnDto = {
  variables: string[];
  resultVariables: string[];
};
export type UpdateCalculatorReturnDto = {
  _id: string;
  languages: CalculatorLanguagesDictionary;
  media: string[];
  expressions: string[];
  variables: CalculatorVariable[];
  resultVariables: string[];
  createdAt: string;
  updatedAt: string;
};
export type UpdateCalculatorDto = {
  title: string;
  media: string[];
  calculatorDescriptions: string[];
  expressions: string[];
  variables: CreateCalculatorVariableDto[];
  resultVariables: string[];
};
export type GetInfoMainPageRandomQuote = {
  _id: string;
  slug: string;
  quote: string;
};
export type GetInfoForMainPageRootPostDto = {
  _id: string;
  priority: number;
  languages: PostLanguagesDictionary;
  parent: string;
  related: string[];
  chapter: string;
  isRoot: boolean;
  createdAt: string;
  updatedAt: string;
  postsCount: number;
  recentlyAddedPostsIds: string[];
};
export type GetInfoForMainPageLatestPostParentDto = {
  _id: string;
  languages: PostLanguagesDictionary;
};
export type Problem = {
  _id: string;
  languages: ProblemLanguagesDictionary;
  answers: ProblemAnswer[];
  media: string[];
  createdAt: string;
  updatedAt: string;
};
export type Calculator = {
  _id: string;
  languages: CalculatorLanguagesDictionary;
  media: string[];
  expressions: string[];
  variables: CalculatorVariable[];
  resultVariables: string[];
  createdAt: string;
  updatedAt: string;
};
export type GetInfoForMainPageLatestPostDto = {
  parents: GetInfoForMainPageLatestPostParentDto[];
  problemsData: Problem[];
  calculatorsData: Calculator[];
  _id?: string;
  priority?: number;
  languages?: PostLanguagesDictionary;
  parent?: string;
  related?: string[];
  chapter?: string;
  isRoot?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type GetInfoForMainPageReturnDto = {
  randomQuote: GetInfoMainPageRandomQuote | null;
  rootPosts: GetInfoForMainPageRootPostDto[];
  latestPosts: GetInfoForMainPageLatestPostDto[];
  totalPostsCount: number;
  totalMediaCount: number;
  totalCalculatorCount: number;
  totalProblemsCount: number;
};
export type GetInfoForContentPageRootPostDto = {
  _id: string;
  priority: number;
  languages: PostLanguagesDictionary;
  parent: string;
  related: string[];
  chapter: string;
  isRoot: boolean;
  createdAt: string;
  updatedAt: string;
  postsCount: number;
  recentlyAddedPostsIds: string[];
};
export type GetInfoForContentPageReturnDto = {
  postsTree: object;
  rootPosts: GetInfoForContentPageRootPostDto[];
};
export type UploadFileReturnDto = {
  originalName: string;
  encoding: string;
  mimetype: string;
  id: string;
  filename: string;
  bucketName: string;
  chunkSize: number;
  size: number;
  uploadDate: string;
  contentType: string;
};
export type FileLangMetaData = {
  sourceLabel: string;
  title: string;
};
export type FileMetaDataLanguagesDictionary = {
  ru: FileLangMetaData;
  en: FileLangMetaData;
};
export type FileMetaData = {
  languages: FileMetaDataLanguagesDictionary;
  sourceLink: string;
};
export type FileInfoVm = {
  length: number;
  chunkSize: number;
  filename: string;
  contentType: string;
  metadata: FileMetaData;
};
export type FileResponseVm = {
  message: string;
  file: FileInfoVm;
};
export type UpdateFileMetaDataReturnDto = {
  title: string;
  sourceLink: string;
  sourceLabel: string;
};
export type UpdateFileMetaDataDto = {
  title: string;
  sourceLink: string;
  sourceLabel: string;
};
export type ProblemAttempt = {
  problemId: string;
  correctAnswers: string[];
  incorrectAnswers: string[];
  correct: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type RegisterUserReturnDto = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
  roles: ("user" | "admin")[];
  problemAttempts: ProblemAttempt[];
};
export type RegisterUserDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
};
export type LoginUserReturnDto = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
  roles: ("user" | "admin")[];
  problemAttempts: ProblemAttempt[];
};
export type LoginUserDto = {
  email: string;
  password: string;
};
export type WhoAmIReturnDto = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
  roles: ("user" | "admin")[];
  problemAttempts: ProblemAttempt[];
};
export type UpdateUserPasswordReturnDto = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
  roles: ("user" | "admin")[];
  problemAttempts: ProblemAttempt[];
};
export type UpdateUserPasswordDto = {
  oldPassword: string;
  newPassword: string;
};
export type UpdateUserDataReturnDto = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
  roles: ("user" | "admin")[];
  problemAttempts: ProblemAttempt[];
};
export type UpdateUserDataDto = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  tel: string;
};
export type ProblemAttemptReturnDto = {
  problemId: string;
  correctAnswers: string[];
  incorrectAnswers: string[];
  correct: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type ProblemAttemptDto = {
  problemId: string;
  answer: string[];
};
export type RestorePasswordRequestDto = {
  email: string;
};
export type RestorePasswordConfirmDto = {
  token: string;
  newPassword: string;
};
export type UpdateUserEmailRequestDto = {
  newEmail: string;
};
export type UpdateUserEmailConfirmDto = {
  token: string;
};
export type StaticPagesLangData = {
  title: string;
  content: string;
};
export type StaticPagesLanguagesDictionary = {
  ru: StaticPagesLangData;
  en: StaticPagesLangData;
};
export type CreateStaticPageReturnDto = {
  _id: string;
  languages: StaticPagesLanguagesDictionary;
  createdAt: string;
  updatedAt: string;
};
export type StaticPageEntity = {
  _id: string;
  languages: StaticPagesLanguagesDictionary;
  createdAt: string;
  updatedAt: string;
};
export type CreateStaticPageDto = {
  title: string;
  content: string;
};
export type GetStaticPageReturnDto = {
  _id: string;
  languages: StaticPagesLanguagesDictionary;
  createdAt: string;
  updatedAt: string;
};
export type UpdateStaticPageReturnDto = {
  _id: string;
  languages: StaticPagesLanguagesDictionary;
  createdAt: string;
  updatedAt: string;
};
export type UpdateStaticPageDto = {
  title: string;
  content: string;
};
export const {
  usePostsControllerUpdatePostPositionMutation,
  usePostsControllerCreateMutation,
  usePostsControllerFindAllQuery,
  usePostsControllerGetPostsTreeWithProblemsIdsQuery,
  usePostsControllerGetProblemsOfTestQuery,
  usePostsControllerGetPostsTreeQuery,
  usePostsControllerGetPostsQuotesQuery,
  usePostsControllerGetPostsMediasQuery,
  usePostsControllerFindOneQuery,
  usePostsControllerUpdateMutation,
  usePostsControllerRemoveMutation,
  useSiteConfigControllerGetConfigQuery,
  useSiteConfigControllerUpdateConfigMutation,
  useProblemsControllerCreateMutation,
  useProblemsControllerFindAllQuery,
  useProblemsControllerAdminFindAllQuery,
  useProblemsControllerFindOneQuery,
  useProblemsControllerUpdateMutation,
  useProblemsControllerRemoveMutation,
  useSearchControllerSearchByPostsQuery,
  useSearchControllerSearchByCategoriesQuery,
  useCalculatorsControllerCreateMutation,
  useCalculatorsControllerFindAllQuery,
  useCalculatorsControllerGetCalculatorsVariablesQuery,
  useCalculatorsControllerFindOneQuery,
  useCalculatorsControllerUpdateMutation,
  useCalculatorsControllerRemoveMutation,
  usePagesControllerGetInfoForMainPageQuery,
  usePagesControllerGetInfoForContentPageQuery,
  useFilesControllerUploadMutation,
  useFilesControllerGetFileInfoQuery,
  useFilesControllerGetNotVideoFileQuery,
  useFilesControllerGetStreamingVideoFileQuery,
  useFilesControllerDownloadFileQuery,
  useFilesControllerDeleteFileMutation,
  useFilesControllerUpdateFileMetaDataMutation,
  useUsersControllerRegisterMutation,
  useUsersControllerLoginMutation,
  useUsersControllerWhoAmIQuery,
  useUsersControllerUpdatePasswordMutation,
  useUsersControllerUpdateUserDataMutation,
  useUsersControllerProblemAttemptMutation,
  useUsersControllerResetProblemsAttemptsMutation,
  useUsersControllerRestorePasswordRequestMutation,
  useUsersControllerRestorePasswordConfirmMutation,
  useUsersControllerUpdateUserEmailRequestMutation,
  useUsersControllerUpdateUserEmailConfirmMutation,
  useStaticPagesControllerCreateMutation,
  useStaticPagesControllerFindAllQuery,
  useStaticPagesControllerFindOneQuery,
  useStaticPagesControllerUpdateMutation,
  useStaticPagesControllerRemoveMutation,
} = injectedRtkApi;
