import React, { Component } from 'react';
import './contact.css';

class CONTACT extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showEditForm: false
        };
    }


    render() {

        return (

            <div className="singleContacBlock">

                <div className="singleContacBlock-img">
                    <img src={this.props.contactImg} alt="" />
                    <div className="contactName">{this.props.contactName}</div>
                </div>

                <div className="singleContacBlock-details">

                    <h3>{this.props.contactName}</h3>
                    <div class="">{this.props.contactLocation}</div>
                    <div className="phoneNumber">{this.props.phoneNumber}</div>

                </div>
                <div className="singleContacBlock-icons">

                    <div onClick={() => {
                        this.props.editContact(this.props.contactName, this.props.id);
                    }}>&#128393;</div>

                    <div className="fa fa-trash-o"
                        onClick={() => { this.props.removeContact(this.props.id) }}></div>

                </div>

            </div >
        )
    }

}


export default CONTACT;
