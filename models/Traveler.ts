import { SexType } from './types'

export interface Traveler {
  _id: string
  firstName: string
  middleName?: string
  lastName?: string
  dob?: string
  sex: SexType
  email: string
  mobile: string
  address?: string
  state: string
  country: string
  dpPath?: string
  password: string
  createdAt?: string
  lastModifiedAt?: string
  bookings?: any[]
}

export interface CreateTravelerInput extends Traveler {}
