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
                    {
                        this.props.contactName == "Edit" ?
                            <div onClick={() => {
                                this.props.editContact(this.props.contactName, this.props.id);
                            }} className="contactName">{this.props.contactName}</div>
                            :
                            <div className="contactName">{this.props.contactName}</div>

                    }
                </div>

                <div className="singleContacBlock-details">
                    {
                        this.props.contactName == "Edit" ?
                            <h3 onClick={() => {
                                this.props.editContact(this.props.contactName, this.props.id);
                            }}>{this.props.contactName}</h3>
                            :
                            <h3>{this.props.contactName}</h3>
                    }
                    <div class="">{this.props.contactLocation}</div>
                    <div className="phoneNumber">{this.props.phoneNumber}</div>

                </div>
                <div className="singleContacBlock-icons">

                    <div onClick={() => {
                        this.props.editContact(this.props.contactName, this.props.id);
                    }}>&#9998;</div>

                    <div className="fa fa-trash-o"
                        onClick={() => { this.props.removeContact(this.props.id) }}></div>

                </div>

            </div >
        )
    }

}


export default CONTACT;
