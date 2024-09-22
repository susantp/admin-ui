export interface IInputField {
  label: string
  id: string
  type: string
  placeHolder: string
}

export interface IAppError {
  error: string
  errorCode: number | string
  executionTime?: number
}
