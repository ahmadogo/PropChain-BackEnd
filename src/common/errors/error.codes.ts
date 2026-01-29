export enum ErrorCode {
  // General & Server Errors
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',
  
  // Request Errors
  BAD_REQUEST = 'BAD_REQUEST',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  MISSING_REQUIRED_FIELD = 'MISSING_REQUIRED_FIELD',
  INVALID_FORMAT = 'INVALID_FORMAT',
  UNPROCESSABLE_ENTITY = 'UNPROCESSABLE_ENTITY',

  // Authentication Errors
  UNAUTHORIZED = 'UNAUTHORIZED',
  AUTHENTICATION_REQUIRED = 'AUTHENTICATION_REQUIRED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  AUTH_INVALID_CREDENTIALS = 'AUTH_INVALID_CREDENTIALS', // Keeping for backward compatibility
  AUTH_USER_NOT_FOUND = 'AUTH_USER_NOT_FOUND',
  AUTH_TOKEN_EXPIRED = 'AUTH_TOKEN_EXPIRED',
  AUTH_TOKEN_INVALID = 'AUTH_TOKEN_INVALID',
  AUTH_ACCOUNT_LOCKED = 'AUTH_ACCOUNT_LOCKED',
  
  // Authorization Errors
  FORBIDDEN = 'FORBIDDEN',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  ACCESS_DENIED = 'ACCESS_DENIED',
  
  // Resource & Conflict Errors
  NOT_FOUND = 'NOT_FOUND',
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  PROPERTY_NOT_FOUND = 'PROPERTY_NOT_FOUND',
  CONFLICT = 'CONFLICT',
  DUPLICATE_ENTRY = 'DUPLICATE_ENTRY',
  RESOURCE_ALREADY_EXISTS = 'RESOURCE_ALREADY_EXISTS',
  
  // Business Logic
  TRANSACTION_FAILED = 'TRANSACTION_FAILED',
  BUSINESS_RULE_VIOLATION = 'BUSINESS_RULE_VIOLATION',
  OPERATION_NOT_ALLOWED = 'OPERATION_NOT_ALLOWED',
  INVALID_STATE = 'INVALID_STATE',
}

export const ErrorMessages: Record<ErrorCode, string> = {
  // Validation
  [ErrorCode.VALIDATION_ERROR]: 'The provided data is invalid',
  [ErrorCode.INVALID_INPUT]: 'The input data contains invalid values',
  [ErrorCode.MISSING_REQUIRED_FIELD]: 'Required field is missing',
  [ErrorCode.INVALID_FORMAT]: 'The data format is incorrect',
  [ErrorCode.BAD_REQUEST]: 'The request could not be understood by the server',
  [ErrorCode.UNPROCESSABLE_ENTITY]: 'The request was well-formed but unable to be followed',
  
  // Authentication
  [ErrorCode.UNAUTHORIZED]: 'You are not authorized to access this resource',
  [ErrorCode.INVALID_CREDENTIALS]: 'The provided credentials are invalid',
  [ErrorCode.TOKEN_EXPIRED]: 'Your session has expired. Please login again',
  [ErrorCode.TOKEN_INVALID]: 'Invalid authentication token',
  [ErrorCode.AUTHENTICATION_REQUIRED]: 'Authentication is required to access this resource',
  [ErrorCode.AUTH_INVALID_CREDENTIALS]: 'Invalid credentials provided',
  [ErrorCode.AUTH_USER_NOT_FOUND]: 'No user found with these credentials',
  [ErrorCode.AUTH_TOKEN_EXPIRED]: 'Authentication token has expired',
  [ErrorCode.AUTH_TOKEN_INVALID]: 'Authentication token is invalid',
  [ErrorCode.AUTH_ACCOUNT_LOCKED]: 'Your account has been locked for security reasons',
  
  // Authorization
  [ErrorCode.FORBIDDEN]: 'You do not have permission to perform this action',
  [ErrorCode.INSUFFICIENT_PERMISSIONS]: 'You lack the necessary permissions',
  [ErrorCode.ACCESS_DENIED]: 'Access to this resource is denied',
  
  // Resource
  [ErrorCode.NOT_FOUND]: 'The requested resource was not found',
  [ErrorCode.RESOURCE_NOT_FOUND]: 'The specified resource does not exist',
  [ErrorCode.USER_NOT_FOUND]: 'User not found',
  [ErrorCode.PROPERTY_NOT_FOUND]: 'Property not found',
  
  // Conflict
  [ErrorCode.CONFLICT]: 'A conflict occurred while processing your request',
  [ErrorCode.DUPLICATE_ENTRY]: 'This entry already exists',
  [ErrorCode.RESOURCE_ALREADY_EXISTS]: 'A resource with this identifier already exists',
  
  // Server
  [ErrorCode.INTERNAL_SERVER_ERROR]: 'An unexpected error occurred. Please try again later',
  [ErrorCode.DATABASE_ERROR]: 'A database error occurred',
  [ErrorCode.EXTERNAL_SERVICE_ERROR]: 'An external service is currently unavailable',
  
  // Business Logic
  [ErrorCode.TRANSACTION_FAILED]: 'The transaction could not be completed',
  [ErrorCode.BUSINESS_RULE_VIOLATION]: 'This operation violates business rules',
  [ErrorCode.OPERATION_NOT_ALLOWED]: 'This operation is not allowed',
  [ErrorCode.INVALID_STATE]: 'The resource is in an invalid state for this operation',
};