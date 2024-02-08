export interface Pita {
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

export interface Additionals {
    name:string;
    text:string;
}

export interface Quantities {
    value:string;
}
