import { Image } from './Image';

export interface User {
    id?: number,
    adress?: string,
    wallet: number,
    postalCode?: string,
    email: string,
    isLunchLady?: boolean,
    password: string,
    name?: string,
    firstname?: string,
    phone?: string,
    town?: string,
    sex?: number,
    image?: Image
}