import { ReactNode } from "react"
import { ImageProps, ImageSourcePropType, ImageURISource } from "react-native"

interface ImoneyTrans {
    _id : string,
    selerId: string,
    title: string,
    imageUrl : string ,
    dateAdded:string,
    timeAdded:string,
    body: string,
    price: number | 'Negotiable' ,
    country: string,
    city: string,
    phoneNum: string,
    category: number,
    bidOrAskOr: "bid" | "ask" | "lookingFor"
    promotion: "free" | "type_1.1" | "type_2.1",
    status : "show" | "on hold" | "deleted",
    servieceOrProduct : "serviece" | "product"
}
export const AllMoneyTrans :ImoneyTrans[] =   
[
    {"_id": "624addc07ffc03b1dc0986fb" ,
    "selerId": "624addf6a756b95643300084" ,
    "title" : "We transfer your money!",
    "imageUrl" : "data:image/png;base64,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",
    "dateAdded" : "04.04.2022",
    "timeAdded" : "02:03 PM",
    "body" : "this is my body",
    "price" : "Negotiable",
    "country": "Germany",
    "city" : "cologne",
    "phoneNum": "057684592784",
    "category": 2615,
    "bidOrAskOr" : "bid",
    "promotion" : "free",
    "status" : "show",
    "servieceOrProduct" : "serviece"
    }
    ,
    {"_id": "624addc07ffc03b1dc0986fb" ,
    "selerId": "624addf6a756b95643300084" ,
    "title" : "We transfer your money!",
    "imageUrl" : "data:image/png;base64,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",
    "dateAdded" : "04.04.2022",
    "timeAdded" : "02:03 PM",
    "body" : "this is my body",
    "price" : 224,
    "country": "Germany",
    "city" : "cologne",
    "phoneNum": "057684592784",
    "category": 2615,
    "bidOrAskOr" : "bid",
    "promotion" : "free",
    "status" : "show",
    "servieceOrProduct" : "serviece"

    },
    {"_id": "624addc07ffc03b1dc0986fb" ,
    "selerId": "624addf6a756b95643300084" ,
    "title" : "We transfer your money!",
    "imageUrl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe3ZvHIWkNUcalfEKT5Ihtna5si5A0nIZ1w&usqp=CAU",
    "dateAdded" : "04.04.2022",
    "timeAdded" : "02:03 PM",
    "body" : "this is my body",
    "price" : 10,
    "country": "Germany",
    "city" : "cologne",
    "phoneNum": "057684592784",
    "category": 2615,
    "bidOrAskOr" : "bid",
    "promotion" : "free",
    "status" : "show",
    "servieceOrProduct" : "serviece"

    }
    ]