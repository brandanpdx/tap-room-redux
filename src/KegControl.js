import React from 'react';
import NewKegForm from './NewKegForm.js';
import KegList from './KegList.js';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null, 
      editing: false
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
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

  handleKegPurchase = (id) => {
    const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newQuantityOfKeg = currentlySelectedKeg.quantity - 1;
    const updatedKeg = { ...currentlySelectedKeg, quantity: newQuantityOfKeg };
    const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...previousKegList, updatedKeg],
      selectedKeg: updatedKeg
    });
  }

  handleKegRefill = (id) => {
    const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    const newQuantityOfKeg = currentlySelectedKeg.quantity + 10;
    const updatedKeg = { ...currentlySelectedKeg, quantity: newQuantityOfKeg };
    const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...previousKegList, updatedKeg],
      selectedKeg: updatedKeg
    });
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
        onKegSelection={this.handleChangingSelectedKeg}
        onClickingBuy={this.handleKegPurchase}
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

export default KegControl;  