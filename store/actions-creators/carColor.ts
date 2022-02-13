import { CurrentCarBrand, CarColorAction, CarColorTypes } from '@t';

export const setCurrentCarBrandAC = (current: CurrentCarBrand): CarColorAction => {
  return {
    type: CarColorTypes.SET_CURRENT_CAR_BRAND,
    payload: current,
  };
};

export const setCurrentCarBrandIndexAC = (index: number): CarColorAction => {
  return {
    type: CarColorTypes.SET_CURRENT_CAR_BRAND_INDEX,
    payload: index,
  };
};
