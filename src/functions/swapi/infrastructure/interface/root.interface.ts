export interface IRoot {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
}

export interface IPagination<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}
