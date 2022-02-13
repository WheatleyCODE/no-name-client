export interface CurrentCarBrand {
  brandName: string;
  numbers: number[];
  tableURL: string | null;
}

export interface CarColorState {
  currentCarBrand: CurrentCarBrand;
  currentCarBrandIndex: number;
  hashLink: string;
  numbers: number[];
}

export enum CarColorTypes {
  SET_CURRENT_CAR_BRAND = 'SET_CURRENT_CAR_BRAND',
  SET_CURRENT_CAR_BRAND_INDEX = 'SET_CURRENT_CAR_BRAND_INDEX',
}

interface SetCurrentCarBrandAction {
  type: CarColorTypes.SET_CURRENT_CAR_BRAND;
  payload: CurrentCarBrand;
}

interface SetCurrentCarBrandIndexAction {
  type: CarColorTypes.SET_CURRENT_CAR_BRAND_INDEX;
  payload: number;
}

export type CarColorAction = SetCurrentCarBrandAction | SetCurrentCarBrandIndexAction;
