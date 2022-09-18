// export interface heroInterface {
//   id: number,
//   name: string,
//   full_name: string,
//   intelligence: number,
//   strength: number,
//   speed: number,
//   durability: number,
//   power: number,
//   combat: number,
//   gender: string,
//   race: string,
//   img: string
// }

export interface IPayloadResponse {
  response: string;
  results: any[];
  'results-for': string;
}
