

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ForgotPasswordChangeMutation
// ====================================================

export interface ForgotPasswordChangeMutation_forgotPasswordChange {
  path: string;
  message: string;
}

export interface ForgotPasswordChangeMutation {
  forgotPasswordChange: ForgotPasswordChangeMutation_forgotPasswordChange[] | null;
}

export interface ForgotPasswordChangeMutationVariables {
  newPassword: string;
  key: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateListingMutation
// ====================================================

export interface CreateListingMutation {
  createListing: string;
}

export interface CreateListingMutationVariables {
  picture?: any | null;
  artist: string;
  venue: string;
  date: string;
  spotifyId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateMessageMutation
// ====================================================

export interface CreateMessageMutation {
  createMessage: boolean;
}

export interface CreateMessageMutationVariables {
  message: MessageInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTicketMutation
// ====================================================

export interface CreateTicketMutation {
  createTicket: boolean;
}

export interface CreateTicketMutationVariables {
  ticket?: any | null;
  listingId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindListingsQuery
// ====================================================

export interface FindListingsQuery_findListings_owner {
  id: string;
  email: string;
}

export interface FindListingsQuery_findListings {
  id: string;
  artist: string;
  venue: string;
  pictureUrl: string;
  date: string;
  owner: FindListingsQuery_findListings_owner;
}

export interface FindListingsQuery {
  findListings: FindListingsQuery_findListings[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendForgotPasswordEmailMutation
// ====================================================

export interface SendForgotPasswordEmailMutation {
  sendForgotPasswordEmail: boolean | null;
}

export interface SendForgotPasswordEmailMutationVariables {
  email: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GrabTicketMutation
// ====================================================

export interface GrabTicketMutation_grabTicket {
  ticketId: string;
}

export interface GrabTicketMutation {
  grabTicket: GrabTicketMutation_grabTicket | null;
}

export interface GrabTicketMutationVariables {
  listingId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_errors {
  path: string;
  message: string;
}

export interface LoginMutation_login {
  errors: LoginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchListingsQuery
// ====================================================

export interface SearchListingsQuery_searchListings_owner {
  id: string;
  email: string;
}

export interface SearchListingsQuery_searchListings {
  id: string;
  artist: string;
  venue: string;
  date: string;
  pictureUrl: string;
  owner: SearchListingsQuery_searchListings_owner;
}

export interface SearchListingsQuery {
  searchListings: SearchListingsQuery_searchListings[];
}

export interface SearchListingsQueryVariables {
  input?: SearchListingsInput | null;
  offset: number;
  limit: number;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateListingMutation
// ====================================================

export interface UpdateListingMutation {
  updateListing: boolean;
}

export interface UpdateListingMutationVariables {
  listingId: string;
  input: UpdateListingInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewListingQuery
// ====================================================

export interface ViewListingQuery_viewListing_owner {
  id: string;
  email: string;
}

export interface ViewListingQuery_viewListing {
  id: string;
  artist: string;
  venue: string;
  date: string;
  pictureUrl: string;
  owner: ViewListingQuery_viewListing_owner;
}

export interface ViewListingQuery {
  viewListing: ViewListingQuery_viewListing | null;
}

export interface ViewListingQueryVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewMessagesQuery
// ====================================================

export interface ViewMessagesQuery_messages_user {
  id: string;
  email: string;
}

export interface ViewMessagesQuery_messages {
  text: string;
  user: ViewMessagesQuery_messages_user;
  listingId: string;
}

export interface ViewMessagesQuery {
  messages: ViewMessagesQuery_messages[];
}

export interface ViewMessagesQueryVariables {
  listingId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: NewMessageSubscrition
// ====================================================

export interface NewMessageSubscrition_newMessage_user {
  id: string;
  email: string;
}

export interface NewMessageSubscrition_newMessage {
  text: string;
  user: NewMessageSubscrition_newMessage_user;
  listingId: string;
}

export interface NewMessageSubscrition {
  newMessage: NewMessageSubscrition_newMessage;
}

export interface NewMessageSubscritionVariables {
  listingId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// 
export interface MessageInput {
  text: string;
  listingId: string;
}

// 
export interface SearchListingsInput {
  artist?: string | null;
}

// 
export interface UpdateListingInput {
  name?: string | null;
  picture?: any | null;
  pictureUrl?: string | null;
  category?: string | null;
  description?: string | null;
  price?: number | null;
  beds?: number | null;
  guests?: number | null;
  latitude?: number | null;
  longitude?: number | null;
  amenities?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================