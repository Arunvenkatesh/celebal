import * as types from "../constants/actionTypes";



const initialState = {
    isProductListLoaded: false,
    productList: []

}

export default function productList(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCT_LIST: {
            if (action.isProductListLoaded) {
                return Object.assign({}, state, { productList: action.productList, isProductListLoaded: true });

            }
            else {
                return Object.assign({}, state, { isProductListLoaded: false });

            }
        }
        default:
            return state;
    }
}