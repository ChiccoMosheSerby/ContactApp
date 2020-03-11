import React, { Component } from 'react';

import './App.css';
//components----------------------------------------------///////////////////
import CONTACT from './view/CONTACT/CONTACT';


//end - components----------------------------------------------////////////

class App extends Component {

  constructor(props) {
    super(props)


    this.state = {
      contactToEdit: '',

      contacts: [
        {
          contactName: 'avatar someone',
          contactImg: '/img/avatar2.png',
          contactLocation: 'Tel Aviv',
          phoneNumber: "(123)4567890"
        },
        {
          contactName: 'alex roman',
          contactImg: '/img/avatar3.jpg',
          contactLocation: 'Riviera State 32/106',
          phoneNumber: "(123)4567890"
        },
        {
          contactName: 'Chicco Moshe Serby',
          contactImg: '/img/chicco.png',
          contactLocation: "Netanya - Ha'merkaz",
          phoneNumber: "+972(0)585313233"
        },
        {
          contactName: 'matrix',
          contactImg: '/img/matrix.png',
          contactLocation: 'New York State 32/106',
          phoneNumber: "(123)4567890"
        },
        {
          contactName: 'someoneNinja',
          contactImg: '/img/someoneNinja.png',
          contactLocation: 'Riviera State 32/106',
          phoneNumber: "(123)4567890"
        },
        {
          contactName: 'avatar 4',
          contactImg: '/img/avatar4.png',
          contactLocation: 'Berlin',
          phoneNumber: "(123)4567890"
        }
      ],
      showEditContactForm: false
    }
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.changeDetails = this.changeDetails.bind(this);


  }

  addContact() {
    let tempContactName = {
      contactName: 'edit name',
      contactImg: '/img/someone.png',
      contactLocation: 'Location'
    }
    this.setState({
      contacts: [...this.state.contacts, tempContactName]
    })
  }

  editContact(name, contactToEdit) {
    console.log(name, contactToEdit);
    this.setState({
      showEditContactForm: !this.state.showEditContactForm,
      contactToEdit: contactToEdit
    });


  }

  changeDetails(e) {
    e.preventDefault();
    console.log(e.target.elements.name.value);

    let reg = /[^0-9()+]/;
    // let reg = /^[^0-9()+]+$/;
    if (!reg.test(e.target.elements.phone.value)) {
      if (e.target.elements.phone.value) {

        let tempContactsList = this.state.contacts;
        tempContactsList[this.state.contactToEdit].contactName = e.target.elements.name.value;
        tempContactsList[this.state.contactToEdit].contactLocation = e.target.elements.address.value;

        tempContactsList[this.state.contactToEdit].phoneNumber = e.target.elements.phone.value;
        this.setState({
          contacts: tempContactsList,
          showEditContactForm: false
        })

      }
    }
    else {
      alert('please fix phone format. can contain only 0-9 () + characters')
    }





  }

  removeContact(contactToRemove) {
    console.dir(contactToRemove);
    let tempContactsList = this.state.contacts;
    tempContactsList.splice(Number(contactToRemove), 1);

    this.setState({
      contacts: tempContactsList
    })
  }

  render() {

    return (
      <div className="App">
        {
          this.state.showEditContactForm ?
            <form className="addForm" onSubmit={this.changeDetails}>
              <input placeholder="name" name="name"></input>
              <input placeholder="address" name="address"></input>
              <input placeholder="phone" name="phone"></input>

              <button type="submit">SAVE</button>
            </form>
            :
            null
        }
        <div className="contactsWrapper">
          {
            this.state.contacts.map((contact, index) => {
              return (
                <CONTACT key={index} id={index} contactName={contact.contactName}
                  contactImg={contact.contactImg}
                  contactLocation={contact.contactLocation}
                  removeContact={this.removeContact}
                  editContact={this.editContact}
                  contactLocation={contact.contactLocation}
                  phoneNumber={contact.phoneNumber} />
              )
            })
          }
          <div className="plusBtn">
            <img className="addContactBtn" src="/img/plus.png"
              onClick={this.addContact} />
          </div>
        </div >

      </div >

    );
  }

}

export default App;