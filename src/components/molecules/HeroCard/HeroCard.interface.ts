import { IPowerStats } from "./generic-interfaces/powerStats.interface";

export interface IHeroCard {
  heroName: string,
  heroRace?: string,
  heroImageUrl: string,
  heroPower?: number
}
