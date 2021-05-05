import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions/";
import { PropTypes } from "prop-types";

export default function ProductContainer(ComposedComponent) {
    class ProductContainer extends Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {
            productReducer: state.productReducer
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ActionCreators, dispatch)
        };
    }
    return connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
}

ProductContainer.contextTypes = {
    router: PropTypes.object
};