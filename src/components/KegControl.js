import React from 'react';
import NewKegForm from './NewKegForm.js';
import KegList from './KegList.js';
import KegDetail from './KegDetail.js';
import EditKegForm from './EditKegForm.js';
import { connect } from 'react-redux';
import PropTypes from "prop-types";



class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null, 
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, ABV, quantity } = kegToEdit;
    const action = {
      type: 'EDIT_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      ABV: ABV,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({ 
      editing: false,
      selectedKeg: null
    });
  }

  handleKegPurchase = (id) => {
    console.log(id);
    const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    console.log(currentlySelectedKeg);
    console.log(this.state.masterKegList);
    const newQuantityOfKeg = currentlySelectedKeg.quantity - 1;
    const updatedKeg = {...currentlySelectedKeg, quantity: newQuantityOfKeg};
    const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...previousKegList, updatedKeg],
      selectedKeg: updatedKeg
    });
  }

  handleKegRefill = (id) => {
    const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newQuantityOfKeg = currentlySelectedKeg.quantity + 10;
    const updatedKeg = {...currentlySelectedKeg, quantity: newQuantityOfKeg };
    const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...previousKegList, updatedKeg],
      selectedKeg: updatedKeg
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, ABV, quantity } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      price: price,
      ABV: ABV,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }


  render() {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm 
        keg = {this.state.selectedKeg} 
        onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Kegs";

    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg = {this.state.selectedKeg} 
        onClickingDelete={this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Kegs";

    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
      
    } else {
      currentlyVisibleState = <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg} 
        onClickingSell={this.handleKegPurchase}
        onClickingRefill={this.handleKegRefill} />
      buttonText = "Add new Keg";
    }

    return (
      <React.Fragment>
          {currentlyVisibleState}
          <button onClick ={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;  