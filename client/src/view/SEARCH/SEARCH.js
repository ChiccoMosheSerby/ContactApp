import React, { Component } from 'react';
import './search.css';


import CONTACT from '../CONTACT/CONTACT';


class SEARCH extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: []
        }
    }

    render() {
        let options;
        if (this.state.search.length) {
            const searchPattern = new RegExp(this.state.search.map(term => `(?=.*${term})`).join(''), 'i');
            options = this.props.contactsList.filter(option =>
                option.contactName.match(searchPattern)
            );
        } else {
            
            options=[];
            console.log(options);
        }

        return (
            <div>
                <div className="header">

                    <input placeholder="search contact by name"
                        className="search" type="text" onChange={(e) => this.setState({ search: e.target.value.split(' ') })} />

                </div>
                <ul>
                    {options.map((option, i) =>

                        <div className="singleContacBlock">

                            <div className="singleContacBlock-img">
                                <img src={option.contactImg} alt="" />
                                <div className="contactName">{option.contactName}</div>
                            </div>

                            <div className="singleContacBlock-details">

                                <h3>{option.contactName}</h3>
                                <div class="">{option.contactLocation}</div>
                                <div className="phoneNumber">{option.phoneNumber}</div>

                            </div>
                        </div >
                    )}
                </ul>
            </div>
        )
    }
}

export default SEARCH;
