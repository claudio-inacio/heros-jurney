import { IHeroResult } from "@/pages";
import { IPowerStats } from "../HeroCard/generic-interfaces/powerStats.interface";

export interface IHeroPowerStats {
  [key: number]: string | number,
  heroName: string,
  heroImage: string,
  heroRace: string,
  principalHero: IPowerStats,
  oponenteHero: IPowerStats,
  championLeft?: boolean,
}
