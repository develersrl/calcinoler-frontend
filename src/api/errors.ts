export interface ErrorsMap {
  [field: string]: string[];
}

export class ErrorREST extends Error {
  public status: number;
  public message: string;
  public details: ErrorsMap;

  constructor(error: {
    status: number;
    message?: string;
    details?: ErrorsMap;
  }) {
    super();
    this.status = error.status;
    this.message = error.message || "";
    this.details = error.details || {};
  }
}
