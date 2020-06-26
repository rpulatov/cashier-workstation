export class AuthError extends Error {
  public code: number;
  constructor(message = "", code = 403) {
    super(message);
    this.code = code;
  }
}
