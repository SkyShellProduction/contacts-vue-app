export interface ContactsType {
    name: string;
    email: string;
    phone: string;
    tags: string;
    id: string;
}
export enum filterEnum {
    name = 'name',
    email = 'email',
    phone = 'phone',
    tags = 'tags'
};
export const filtersData =  [
    {type: filterEnum.name, name: 'По имени'},
    {type: filterEnum.email, name: 'По почте'},
    {type: filterEnum.phone, name: 'По номеру'},
    {type: filterEnum.tags, name: 'По тегам'},
]