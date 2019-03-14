import React, { Component } from "react";
// import './index.css'
import { recInvent } from "../actions/inventoryActions";
import { connect } from "react-redux";

// Displaying Iventory
let itemsShow = [];
let inventoryArr = [];

class DisplayInventory extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        this.props.recInvent();
        if (localStorage.grabitem("token")) {
        }
    }
    delete = id => {};

    update = id => {};

    render() {
        inventoryArr = this.props.inventory;
        if (this.props.inventory.length !== 0) {
            for (let i = 0; i < 15; i++) {
                itemsShow.push(inventoryArr[i]);
            }
        }

        return (
            <div>
                {this.props.fetchingInv ? (
                    <h3>Please Wait Data Reciving </h3>
                ) : (
                    <div className="item-container">
                        {itemsShow.map((item, index) => {
                            return (
                                <div>
                                    <button onClick={e => this.delete(item.id)}>
                                        Delete
                                    </button>
                                    <button onClick={e => this.update(item.id)}>
                                        Update
                                    </button>
                                    <div key={item.id} className="item">
                                        {item.name} {item.quantity} {item.units}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
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
    { recInvent }
)(DisplayInventory);
