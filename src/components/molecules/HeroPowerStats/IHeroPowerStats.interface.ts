import { IHeroResult } from "@/pages";
import { IPowerStats } from "../HeroCard/generic-interfaces/powerStats.interface";

export interface IHeroPowerStats {
  heroName: string,
  heroImage: string,
  heroRace: string,
  principalHero: IPowerStats,
  openenteHero: IPowerStats,
  championLeft?: boolean,
}
