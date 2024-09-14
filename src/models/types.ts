import { z } from "zod"
import { OGetOdds, OSignIn, OSignUp, OUser } from "./objects"

export type TGetOdds = z.infer<typeof OGetOdds>
export type TSignUp = z.infer<typeof OSignUp>
export type TSignIn = z.infer<typeof OSignIn>
export type TUser = z.infer<typeof OUser>
export type TPreAccountUser = Exclude<TUser, "id">
export type TTables = "users" // ...and other postgres tables