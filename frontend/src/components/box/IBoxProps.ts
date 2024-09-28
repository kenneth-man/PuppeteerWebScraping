import { ReactNode } from "react";
import {
	TBoxType,
	TBoxDirection,
	TAlignItems,
	TJustifyContent,
	TJustifyItems,
	TAlignContent
} from "../../models/types";

interface baseBox {
	children: ReactNode
	flexDirection?: TBoxDirection
	justifyContent?: TJustifyContent
	alignItems?: TAlignItems
	styles?: Object
}

interface flexBox {
	type: Extract<TBoxType, "flex">
}

interface gridBox {
	type: Extract<TBoxType, "grid">
	cols: number
	rows: number
	justifyItems?: TJustifyItems
	alignContent?: TAlignContent
}

export type boxProps = baseBox & (flexBox | gridBox)