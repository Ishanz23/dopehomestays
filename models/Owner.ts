import { Homestay } from './Homestay'
import { MaritalStatusType, SexType } from './types'

export interface Owner {
  _id: string

  firstName: string

  middleName?: string

  lastName?: string

  dob?: string

  sex: SexType

  mobile: string

  email?: string

  maritalStatus?: MaritalStatusType

  password?: string

  address?: string

  state: string

  country: string

  dpPath?: string

  createdAt?: string

  lastModifiedAt?: string

  homestays?: Homestay[]
}
