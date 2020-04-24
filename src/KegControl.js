import React from 'react';
import NewKegForm from './NewKegForm.js';
import KegList from './KegList.js';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegFrom';


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
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} />
      buttonText = "return to kegs";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg} />
      buttonText = "Return to Kegs";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList
        kegList={this.state.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add new Keg";
    }

    return (
      <React.Fragment>
        <div className="storeFront">
          {currentlyVisibleState}
          <button onClick ={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default KegControl; 