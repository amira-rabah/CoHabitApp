export interface Bill{
    ID_BILL : number ,
    BILL_NUM : string ,
    DESCRIPTION : string, 
    AMOUNT : number,
    DEADLINE : Date,
    PAYED : boolean,
    ID_TYPE : number ,
    BILL_TYPE_NAME: string,
    ID_USER : number
}