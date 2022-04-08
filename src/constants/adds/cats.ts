import { ReactNode } from "react"
import { ImageProps, ImageSourcePropType, ImageURISource } from "react-native"

interface Icats {
    categoryId : number,
    subCat : "servieces"  | "product",
    subCat2 : "financial",
    comment: string
}
export const cats :Icats[] =   
[
    {
        "categoryId" : 2615,
        "subCat" : "servieces",
        "subCat2" : "financial",
        "comment" : ""
},
    ]
