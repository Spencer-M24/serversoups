import React, { Component } from "react";
import { connect } from "react-redux";
import {
    recInvent,
    grabitem,
    addInv,
    deleteInv,
    updateInv
} from "../actions/inventoryActions";

class Inventory extends Component {
    constructor(props) {
        super();
    }
    recInvent = e => {
        this.props.recInvent();
    };
    grabitem0 = e => {
        this.props.grabitem(5);
    };

    render() {
        return (
            <div>
                <button onClick={this.recInvent}>Display Inventory </button>
                <button onClick={this.grabitem0}>Items </button>
                <button
                    onClick={() =>
                        this.props.addInv({
                            name: "", //required
                            quantity: "",
                            units: ""
                        })
                    }>
                    Testing
                </button>
                <button onClick={() => this.props.deleteInv(45)}>Remove</button>
                <button
                    onClick={() =>
                        this.props.updateInv(1, {
                            name: "", //required
                            qty: 0,
                            units: "pound"
                        })}>
                    Update{" "}
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetchingInv: state.inventory.fetchingInv,
        inventory: state.inventory.inventory,
        postingInv: state.inventory.postingInv
    };
};
export default connect(
    mapStateToProps,
    { recInvent, grabitem, addInv, deleteInv, updateInv }
)(Inventory);
