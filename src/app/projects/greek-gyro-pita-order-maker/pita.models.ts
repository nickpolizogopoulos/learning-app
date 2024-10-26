
export type Pita = {
    name:string;
    quantity:number;
    mainIngredient:string;
    potatoes?:boolean;
    tomatoes?:boolean;
    onion?:boolean;
    tzatziki?:boolean;
    sauce?:string;
    extras?:string;
    id?:string;
}

export type Additionals = {
    name:string;
    text:string;
}

export type Quantity = {
    value:string;
}
