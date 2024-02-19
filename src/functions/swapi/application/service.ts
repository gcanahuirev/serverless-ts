import { Person } from '../domain/entity';
import { IPeopleService } from '../domain/interface';
import { getPerson } from '../infrastructure/api';

export class PeopleService implements IPeopleService {
  async getOne(id: number): Promise<Person> {
    const data = await getPerson(id);
    return {
      año_nacimiento: data.birth_year,
      color_ojo: data.eye_color,
      películas: data.films,
      genero: data.gender,
      color_cabello: data.hair_color,
      altura: data.height,
      mundo_natal: data.homeworld,
      masa: data.mass,
      nombre: data.name,
      color_piel: data.skin_color,
      creado: data.created,
      editado: data.edited,
      especie: data.species,
      naves: data.starships,
      url: data.url,
      vehículos: data.vehicles,
    };
  }
}
