export enum Region {
  DAEJEON = '대전권',
  NATIONWIDE = '전국권',
  DIRECT = '본사직영'
}

export interface Branch {
  id: string;
  name: string;
  region: Region;
  address: string;
  phone: string;
  url: string; // Link to blog/homepage
  imageUrl: string;
  isDirectManaged: boolean;
  description: string;
}