import { Owner } from './Owner'
import { HomestayCategoryType } from './types'

export interface Gallery {
  name: string
  path: string
}

export interface CancellationPolicy {
  daysAgo: number
  charge: number
  isPercentage: boolean
}

export class Room {
  id: string
  name: string
  description: string
  count: number
  noOfHeads: number
  amenities: string[]
  plans: RoomPlan[]
}

export class RoomPlan {
  id: string
  name: string
  rate: number
  currency: string
  discount: number
  isDiscountPercentage: boolean
}

export class Promotion {
  plan: string
  priority: number
  createdAt?: string
  lastModifiedAt?: string
}

export interface Homestay {
  _id: string
  name: string
  category: HomestayCategoryType
  description: string
  address: string
  place: string
  state: string
  country: string
  mobile: string
  email: string
  checkinTime: string
  checkoutTime: string
  locationTags: string[]
  tags: string[]
  isActive: boolean
  cancellationPolicies: CancellationPolicy[]
  gallery: Gallery[]
  coverImage: Gallery
  owners: Owner[]
  promotions: Promotion[]
  rooms: Room[]
  createdAt?: string
  lastModifiedAt?: string
}
