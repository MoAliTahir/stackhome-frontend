export interface Apartment {
  id: number;
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
    apartments: number[],
    rooms: number[]
  };
  features: string[];
  address: string;
  district: string;
  equipped: boolean;
  available: boolean;
  bedrooms: number;
  living_room: number;
  bathroom : number;
  price: number;
  description: string;
  created: Date;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
}
