export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_A_STRING: 'Name must be a string',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Name length must be from 1 to 100',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is invalid',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_A_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Password length must be from 6 to 50',
  PASSWORD_MUST_BE_STRONG:
    'Password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_A_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: 'Confirm password length must be from 6 to 50',
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    'Confirm password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
  CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Confirm password must be the same as password',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be ISO8601',
  LOGIN_SUCCESS: 'Login Successfully',
  LOGOUT_SUCCESS: 'Logout Successfully',
  REGISTER_SUCCESS: 'Register Successfully',
  EMAIL_OR_PASSWORD_INCORRECT: 'Email or Password incorrect',
  ACCESS_TOKEN_IS_REQUIRED: 'Access Token is Required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh Token is Required',
  REFRESH_TOKEN_INVALID: 'Refresh Token invalid',
  ACCESS_TOKEN_INVALID: 'Access Token invalid',
  USED_REFRESH_TOKEN_DOES_NOT_EXIST: 'Used Refresh Token does not exist',
  EMAIL_VERIFY_TOKEN_IS_REQUIRED: 'Email verify token is required',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_VERIFIED_BEFORE: 'Email already verified before',
  EMAIL_VERIFY_SUCCESS: 'Email verify successfully',
  RESEND_VERIFY_EMAIL_SUCCESS: 'Resend verify email successfully',
  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',
  FORGOT_PASSWORD_TOKEN_IS_REQUIRED: 'Forgot password token is required',
  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password successfully',
  FORGOT_PASSWORD_TOKEN_IS_INVALID: 'Forgot password token is invalid',
  RESET_PASSWORD_SUCCESS: 'Reset password successfully',
  GET_ME_SUCCESS: 'Get me successfully',
  USER_NOT_VERIFY: 'User not verify',
  BIO_MUST_BE_A_STRING: 'Bio must be a string',
  BIO_LENGTH: 'Bio length must be from 1 to 200',
  LOCATION_MUST_BE_A_STRING: 'Location must be a string',
  LOCATION_LENGTH: 'Location length must be from 1 to 200',
  WEBSITE_MUST_BE_A_STRING: 'Website must be a string',
  WEBSITE__LENGTH: 'Website length must be from 1 to 400',
  USER_NAME_MUST_BE_A_STRING: 'User name must be a string',
  USER_NAME_LENGTH: 'User name length must be from 1 to 50',
  IMAGE_URL_MUST_BE_A_STRING: 'Image url must be a string',
  IMAGE_URL_LENGTH: 'Image url length must be from 1 to 400',
  UPDATE_ME_SUCCESS: 'Update me successfully',
  GET_PROFILE_SUCCESS: 'Get profile successfully',
  FOLLOW_SUCCESS: 'Follow successfully',
  INVALID_FOLLOWED_USER_ID: 'Invalid followed user id',
  FOLLOWED: 'User was followed',
  GMAIL_NOT_VERIFIED: 'Gmail not verified',
  INVALID_USER_ID: 'Invalid user id',
  FOLLOW_NOT_YET: 'User not yet followed',
  UNFOLLOW_SUCCESS: 'Unfollow successfully',
  USER_NAME_INVALID:
    'User name must 4-15 characters long and contain only letters, numbers, underscores and periods, not only number',
  USER_NAME_ALREADY_EXISTS: 'User name already exists',
  OLD_PASSWORD_INCORRECT: 'Old password incorrect',
  CHANGE_PASSWORD_SUCCESS: 'Change password successfully',
  UPLOAD_IMAGE_SUCCESS: 'Upload image successfully',
  UPLOAD_VIDEO_SUCCESS: 'Upload video successfully'
} as const;
