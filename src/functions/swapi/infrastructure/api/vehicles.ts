import { swapi } from '..';
import { IPagination, IVehicle } from '../interface';

export async function getVehicles(
  search?: string,
): Promise<IPagination<IVehicle>> {
  const searchParams = new URLSearchParams();
  if (search) searchParams.set('search', search);

  const data = await swapi().get('vehicles').json<IPagination<IVehicle>>();
  return data;
}

export async function getVehicle(id: number): Promise<IVehicle> {
  const data = await swapi().get(`vehicles/${id}`).json<IVehicle>();
  return data;
}
