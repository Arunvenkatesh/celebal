import React, { Component } from 'react';
import { productStyles } from "../styles/product.js"
import Rating from '@material-ui/lab/Rating';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class ProductDetails extends Component {
    constructor(props) {

        super(props);
        this.state = {
            product: props.location.state

        }
    }
    render() {

        return (
            <div style={productStyles.detailContainer}>
                <ArrowBackIcon onClick={() => { this.props.history.push("/product") }} style={productStyles.backButton} />
                <img alt="" src={this.state.product.url} style={productStyles.productDetailImage} />
                <div style={productStyles.productDetailConatiner}>
                    <div style={productStyles.productDetailReview}>
                        <div style={productStyles.reviewContainer}>

                            <div style={productStyles.reviewDetails}>
                                <p style={productStyles.productNameText}>{`${this.state.product.name}`}</p>
                                <p style={productStyles.productCategoryText}>{`${this.state.product.category}`}</p>
                            </div>

                            <div style={productStyles.flexContainer}>
                                <Rating name="half-rating" defaultValue={this.state.product.rating} precision={0.1} size="large" />
                                <p style={productStyles.productRateText}>{`(${this.state.product.rating} rating)`}</p>
                            </div>
                            <div style={productStyles.flexContainer}>
                                <p style={productStyles.productRateText}>{`${this.state.product.description} `}</p>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        )
    }
}

export default ProductDetails;
