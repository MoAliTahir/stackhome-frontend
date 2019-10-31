export interface Apartment {
  owner: {
    id: number,
    image: string,
    email: string,
    id_card: number,
    phone_number: number,
    full_name: string,
    active: boolean,
    staff: boolean,
    admin: boolean,
    created_at: Date,
    last_login: Date,
    apartments: number[]
  };
  address: string;
  equipped: boolean;
  bedrooms: number;
  living_room: number;
  bathroom : number;
  price: number;
  features: string;
  description: string;
  available: boolean;
  created: Date
}
