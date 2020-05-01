import kegListReducer from '../../reducers/keg-list-reducer.js';

describe('kegListReducer', () => {

  let action;

  const currentState = {
    1: {
      name: 'Beer 1',
      brand: 'Beer 1 Brand',
      price: 6,
      ABV: 5,
      quantity: 124,
      id: 1
    },
    2: {
      name: 'Beer 2',
      brand: 'Beer 2 Brand',
      price: 7,
      ABV: 6,
      quantity: 124,
      id: 2
    }
  }

  const kegData = {
    name: 'Beer 2',
    brand: 'Beer 2 Brand',
    price: 7,
    ABV: 6,
    quantity: 124,
    id: 2
  };

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, ABV, quantity, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      ABV: ABV,
      quantity: quantity,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        ABV: ABV,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Beer 2',
        brand: 'Beer 2 Brand',
        price: 7,
        ABV: 6,
        quantity: 124,
        id: 2
      }
    });
  });

});