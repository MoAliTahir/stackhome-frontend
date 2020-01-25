export interface Rent {
  id: number;
  tenant: {
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
  apartment: number;
  room: number;
  state: number;
  start_date: Date;
  end_date: Date;
  created_at: Date;
}
