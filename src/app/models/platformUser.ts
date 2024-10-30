export interface PlatformUser {
  id: number,
  email: string,
  password: string,
  role: string,
  organisation: string,
  userIdentityRef: string,
  createdByAdmin: string,
  isActive: boolean
}
