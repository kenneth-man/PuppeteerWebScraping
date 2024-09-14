import { z } from "zod"
import { OgetOdds } from "./objects"

export type TgetOdds = z.infer<typeof OgetOdds>