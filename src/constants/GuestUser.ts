interface Iuser {
    _id : string,
    email: string,
    firstName: string,
    lastName : string ,
    password : string,
    isAuth: boolean,
    authCode: string,
    signUpDate: string,
    favorites : string[] ,
    posts : object[],
    address : object,
    phone: string,
    website: string,
    gotReported : number,
    profImgUrl : string
}
export default <Iuser>   {
    "_id" : "6249b4a105f3b6633fac446c",
    "email" : "rouzbeh.mozafari.ai@gmail.com",
    "firstName": "Guest",
    "lastName" : "mo",
    "password": "123456789",
    "isAuth" : true,
    "authCode" : "1234",
    "profImgUrl" : "",
    "signUpDate": "01.03.2022",
    "favorites" : [],
    "posts": [],
    "gotReported" : 0,
    "address": {
        "street": "EckeHolterstr",
        "HauseNumber": "0",
        "city": "Koeln",
        "country" : "Germany",
        "zipcode": "52748",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
    "phone": "015534587568" ,
    "website": "",
}