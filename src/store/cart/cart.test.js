import cartReducer from ".";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { addItem, removeItem } from "../actions";

describe('Cart reducer', () => {
  const reducers = combineReducers({
    cart: cartReducer,
  });
  const store = createStore(reducers);

  it('provides inital state', () => {
    let state = store.getState();

    expect(state.cart.length).toEqual(0);
    expect(state.cart).toBeTruthy();
  });

  it('adds products and removes products', () => {
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(addItem(productOne));
    store.dispatch(addItem(productTwo));
    let newState = store.getState();
    expect(newState.cart.length).toEqual(2);
    expect(newState.cart.name[0]).toEqual('product one');
    expect(newState.cart.name[1]).toEqual('product two');

    store.dispatch(removeItem(productOne));
    let moreNewState = store.getState();
    expect(moreNewState.cart.length).toEqual(1);
    expect(moreNewState.cart.name[0]).toEqual('product two');
  });
});

