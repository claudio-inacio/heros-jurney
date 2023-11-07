import { IHeroResult } from "@/pages";


export interface IListHeros {
  heros: IHeroResult[] ,
  hendleSaveHero: (hero: IHeroResult) => void,
  openModal: boolean,
  handleCloseModal: () => void,
  hendleResetHeros: () => void,
}
