import React from 'react';
import PropTypes from "prop-types";





const DropList = ({ disaplayValue, handleSelectChange, optionItems }) => {
    return (
        <div >
            <select style={{ border: "0px" }} value={disaplayValue} onChange={(e) => handleSelectChange(e)} >
                <option style={{ border: "0px" }} value={"All"}>{"All"}</option>
                {optionItems.map((option) => (
                    <option style={{ border: "0px" }} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

DropList.propTypes = {
    handleSelectChange: PropTypes.func,
    optionItems: PropTypes.array,
    disaplayValue: PropTypes.string

};
export default DropList;
