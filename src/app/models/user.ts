export interface User {
  id: number;
  email: string;
  id_card: string;
  phone_number : number;
  full_name : string;
  active : boolean;
  staff : boolean;
  admin : boolean;
  created_at : Date;
  image : string;
}
