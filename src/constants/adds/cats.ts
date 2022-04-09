import { ReactNode } from "react"
import { ImageProps, ImageSourcePropType, ImageURISource } from "react-native"

interface Icats {
    categoryId : number,
    subCat : "servieces"  | "product" | "other" ,
    subCat2? : "financial" | "transportation",
    comment?: string,

}
export const cats :Icats[] =   
[
    {
        "categoryId" : 1001,
        "subCat" : "servieces",
        "subCat2" : "financial",
},
    {
        "categoryId" : 1002,
        "subCat" : "servieces",
        "subCat2" : "transportation",
},
    {
        "categoryId" : 1003,
        "subCat" : "other",
},
    ]
