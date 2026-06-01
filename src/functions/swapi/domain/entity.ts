export type User = {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: string
}

export type Hair = {
  color: string
  type: string
}

export type Address = {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates
  country: string
}

export type Coordinates = {
  lat: number
  lng: number
}

export type Bank = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export type Company = {
  department: string
  name: string
  title: string
  address: Address2
}

export type Address2 = {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates2
  country: string
}

export type Coordinates2 = {
  lat: number
  lng: number
}

export type Crypto = {
  coin: string
  wallet: string
  network: string
}
