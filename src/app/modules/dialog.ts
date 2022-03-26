export interface PhoneNumbers {
  intPhoneNumber: string
}

export interface DialogDatas {
  name: string
  lastname: string
  cpf: string
  phoneNumber: string
  additionalPhoneNumber: PhoneNumbers[]
  adress: string
  complement: string
  username: string
  password: string
  passwordConfirmation: string
}