import { ReactNode } from "react"
import { ImageProps, ImageSourcePropType, ImageURISource } from "react-native"


interface ImoneyTrans {
    _id? : string,
    addCode : number,
    selerId: string,
    title: string,
    imageUrl : string ,
    dateAdded:string,
    timeAdded:string,
    body: string,
    price: number  ,
    isNegotiable :boolean
    country: string,
    phoneNum: string,
    categoryId: number,
    bidOrAskOr: "bid" | "ask" | "lookingFor"
    promotion: "free" | "type_1.1" | "type_2.1",
    status : "show" | "on hold" | "deleted",
    servieceOrProduct? : "serviece" | "product",
    cityId? : number,
    postOption?: boolean
}
