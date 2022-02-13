import { CarColorAction, CarColorTypes, CarColorState } from '@t';

const initialState: CarColorState = {
  currentCarBrand: {
    brandName: 'Acura',
    numbers: [15, 22],
    tableURL: null,
  },
  currentCarBrandIndex: 0,
  hashLink: 'someRandomStirng',
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
};

export const carColorReducer = (state = initialState, action: CarColorAction): CarColorState => {
  switch (action.type) {
    case CarColorTypes.SET_CURRENT_CAR_BRAND:
      return {
        ...state,
        currentCarBrand: {
          ...action.payload,
        },
      };

    case CarColorTypes.SET_CURRENT_CAR_BRAND_INDEX:
      return {
        ...state,
        currentCarBrandIndex: action.payload,
      };

    default:
      return state;
  }
};
