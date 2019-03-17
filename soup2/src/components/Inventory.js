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
    grabitem = e => {
        this.props.grabitem(5);
    };
    render() {
        return (
            <div>
                <button onClick={this.recInvent}>Display Inventory </button>
                <button onClick={this.grabitem}>Items </button>
                <button
                    onClick={() =>
                        this.props.addInv( this.props.userId, { 
                            name: "Sugar", // string, required
                            qty: 123, // integer, required 
                            categoryId: 123, // ingeger, required
                            units: "cups", // string, optional
                            imageUrl: "", // string, optional
                            inStock: true, // boolean, optional
                            description: "" // string, optional
                        })
                    }
                >
                    Add 123 cups of Sugar
                </button>
                <button onClick={() => this.props.deleteInv(this.props.userId)}>
                    Remove Sugar
                </button>
                <button
                    onClick={() =>
                        this.props.updateInv(1, {
                            name: "Pop Corn", //required
                            qty: 22,
                            units: "pound"
                        })
                    }
                >
                    Update Sugar
                </button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        fetchingInv: state.inventory.fetchingInv,
        inventory: state.inventory.inventory,
        postingInv: state.inventory.postingInv,
        userId: state.userAccounts.userId

    };
};
export default connect(
    mapStateToProps,
    { recInvent, grabitem, addInv, deleteInv, updateInv }
)(Inventory);
