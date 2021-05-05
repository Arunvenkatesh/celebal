import * as types from "../constants/actionTypes";
import * as API_END_POINTS from "../constants/apiEndPoints";
import axios from "axios";
// import moment from "moment";





export function getProductList() {
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'secret-key': '$2b$10$ZWSHXj00VptBBaVlUpjKEOPKGJCnKsdouU98oLoAJajImk7eq3dSa'
    };
    return dispatch => {

        axios.get(API_END_POINTS.GET_PRODUCT_LIST, { headers })
            .then(async response => {
                if (response.status === 200) {
                    dispatch({
                        type: types.GET_PRODUCT_LIST,
                        isProductListLoaded: true,
                        productList: response.data
                    });
                } else {

                    dispatch({
                        type: types.GET_PRODUCT_LIST,
                        isProductListLoaded: false
                    });
                }
            })
            .catch(err => {

                if (err && err.config) {
                    dispatch({
                        type: types.GET_PRODUCT_LIST,
                        isProductListLoaded: false
                    });
                }
            });
    };
}
