// Capa de persistencia. Hoy guarda en localStorage; para pasar a Supabase basta con
// implementar otro ProgressRepository y cambiar `repository`.
import type { ProfileId } from '../types';
import { emptyState, type ProfileState } from './game';

export interface ProgressRepository {
  load(profile: ProfileId): ProfileState;
  save(profile: ProfileId, state: ProfileState): void;
  reset(profile: ProfileId): void;
}

const KEY = (p: ProfileId) => `primaria:v1:${p}`;

class LocalStorageRepository implements ProgressRepository {
  load(profile: ProfileId): ProfileState {
    try {
      const raw = localStorage.getItem(KEY(profile));
      if (!raw) return emptyState();
      return { ...emptyState(), ...JSON.parse(raw) } as ProfileState;
    } catch {
      return emptyState();
    }
  }
  save(profile: ProfileId, state: ProfileState): void {
    try {
      localStorage.setItem(KEY(profile), JSON.stringify(state));
    } catch {
      // Sin almacenamiento (modo privado): la partida sigue, solo no se guarda.
    }
  }
  reset(profile: ProfileId): void {
    try {
      localStorage.removeItem(KEY(profile));
    } catch {
      /* nada */
    }
  }
}

export const repository: ProgressRepository = new LocalStorageRepository();

export function getLastProfile(): ProfileId | null {
  try {
    const v = localStorage.getItem('primaria:lastProfile');
    return v === 'africa' || v === 'leire' ? v : null;
  } catch {
    return null;
  }
}

export function setLastProfile(p: ProfileId | null): void {
  try {
    if (p) localStorage.setItem('primaria:lastProfile', p);
    else localStorage.removeItem('primaria:lastProfile');
  } catch {
    /* nada */
  }
}
