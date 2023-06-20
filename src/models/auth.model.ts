export interface IAuthResponse {
  token: string,
  user_email: string,
  user_nicename: string,
  user_display_name: string
}

export interface IAuthError {
  code: string,
  data: {
    status: number
  },
  message: string
}


export interface ILogin {
  username: string,
  password: string
}