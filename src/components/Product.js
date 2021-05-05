import React from 'react';
import PropTypes from "prop-types";
import Rating from '@material-ui/lab/Rating';
import { productStyles } from "../styles/product.js"



const Product = ({ onClick, productData }) => {
    return (
        <div onClick={() => { onClick(productData) }} style={{ margin: "40px" }}>
            <img alt="" src={productData.url} style={productStyles.productImage} />
            <div style={productStyles.productDetailConatiner}>
                <div style={productStyles.productReview}>
                    <div style={productStyles.reviewContainer}>
                        <div style={productStyles.reviewDetails}>
                            <p style={productStyles.productNameText}>{`${productData.name}`}</p>
                            <p style={productStyles.productCategoryText}>{`${productData.category}`}</p>
                        </div>
                        <div style={productStyles.flexContainer}>
                            <Rating name="half-rating" defaultValue={productData.rating} precision={0.1} size="large" />
                            <p style={productStyles.productRateText}>{`(${productData.rating} rating)`}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

Product.propTypes = {
    onClick: PropTypes.func,
    productData: PropTypes.object

};
export default Product;
