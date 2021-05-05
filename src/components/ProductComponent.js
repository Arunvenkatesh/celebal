import React, { Component } from 'react';
import map from "lodash/map";
import Product from "./Product"
import { productStyles } from "../styles/product.js"
import Pagination from '@material-ui/lab/Pagination';
import SearchIcon from '@material-ui/icons/Search';
import DropList from "./common/DropList"
import InputBase from '@material-ui/core/InputBase';

class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            isProductListLoaded: false,
            page: 1,
            count: 0,
            pageSize: 2,
            searchValue: '',
            sortByList: ["fruit", "vegatable", "dairy", "leaves"],
            sortByValue: "All"
        }
        this.retrieveProductList = this.retrieveProductList.bind(this);
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleSortByClick = this.handleSortByClick.bind(this);
        this.onProductClick = this.onProductClick.bind(this);

    }
    componentDidMount() {
        this.props.actions.getProductList()
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.productReducer && nextProps.productReducer.isProductListLoaded !== prevState.isProductListLoaded) {
            if (nextProps.productReducer && nextProps.productReducer.productList !== prevState.productList) {
                return ({
                    productList: nextProps.productReducer.productList,
                    isProductListLoaded: nextProps.productReducer.isProductListLoaded
                }) // <- this is setState equivalent
            }

        }
        return null
    }
    handlePaginationChange = (event, value) => {
        this.setState({
            page: value
        }, () => {
            this.retrieveProductList()
        })
    }
    retrieveProductList(filterList) {
        if (filterList) {
            let dataImn = (filterList).slice(((this.state.page) - 1) * this.state.pageSize, (((this.state.page) - 1) * this.state.pageSize) + this.state.pageSize);
            return dataImn
        }
    }

    handleSearchInputChange = (e) => {

        this.setState({
            searchValue: e.target.value
        })

    }
    handleSortByClick = (e) => {
        this.setState({ sortByValue: e.target.value });
    }
    onProductClick(e) {
        this.props.history.push("/productDetails", e)
    }
    render() {
        let filterProductList = (searchWord, searchList) => {
            if (searchList) {
                searchWord = searchWord.toUpperCase();
                let searchByName = searchWord ? searchList.filter(product => (product.name).trim().toUpperCase().includes(searchWord.trim()))
                    : searchList;
                let searchByCategory = searchWord ? searchList.filter(product => (product.category + "").trim().toUpperCase().includes(searchWord.trim()))
                    : searchList;
                let searchedList = [...searchByName, ...searchByCategory]
                let removeDuplicate = searchedList.filter((arr, index, self) => index === self.findIndex((t) => (t.id === arr.id))
                )
                let sortedList = this.state.sortByValue ? (this.state.sortByValue != "All" ? (removeDuplicate).filter(t => (t.category).trim() === (this.state.sortByValue).trim()) : removeDuplicate) : removeDuplicate


                return sortedList;
            }
        }
        let filteredProductList = filterProductList(this.state.searchValue, this.state.productList)

        return (
            <div style={productStyles.container}>

                <div style={productStyles.header}>
                    <div style={productStyles.searchContainer}>
                        <SearchIcon />
                        <InputBase
                            style={productStyles.searchText}
                            type={"text"}
                            placeholder="Search by product name,category"
                            value={this.state.searchValue}
                            onChange={e => this.handleSearchInputChange(e)}

                        />
                    </div>
                    <div style={productStyles.sortByContainer}>
                        <p style={productStyles.productTypeText}>Sorted By :</p>
                        <DropList disaplayValue={this.state.sortByValue} optionItems={this.state.sortByList} handleSelectChange={e => this.handleSortByClick(e)} />

                    </div>

                </div>
                <div style={productStyles.productList}>

                    <div style={productStyles.flexContainer}>
                        {this.state.isProductListLoaded && map(this.retrieveProductList(filteredProductList), product => {
                            return (
                                <Product productData={product} onClick={(e) => { this.onProductClick(e) }} />

                            )

                        })}
                    </div>
                    <Pagination
                        style={productStyles.pagination}
                        variant="outlined"
                        shape="rounded"
                        count={Math.ceil((filteredProductList).length / this.state.pageSize)}
                        page={this.state.page}
                        onChange={this.handlePaginationChange} />
                </div>
            </div>
        )
    }
}

export default ProductComponent;
