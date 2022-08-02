export interface SupportedGame {
  description: string;
  release: number;
  name: string;
  slug: string;
  logo: string;
  cover: string;
  hero?: string;
  updated?: number;
  ogc_active: boolean;
  ogc_id: string;
  total_maps?: number;
  total_cinematics?: number;
}

export interface SupportedMap {
  name: string;
  description: string;
  cover: string;
  game: string;
  slug: string;
  wiki: string;
  release: number;
  updated: number;
  ogc_trailer: string;
}

export interface AddDataResp {
  success: boolean;
  error?: string;
}
