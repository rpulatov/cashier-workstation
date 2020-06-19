export class AuthError extends Error {
  code: number
  constructor(message = "", code = 403) {
    super(message)
    this.code = code
  }
}
