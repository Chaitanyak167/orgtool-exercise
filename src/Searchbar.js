import React from "react";
import Employee from './Employee';
import axios from "axios";
import './Searchbar.css';

class Searchbar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: null,
            employeeData: null
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/employees').then(resp => {
            this.setState({employeeData: resp.data})
        });
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword });
    };
    render() {
        return this.state.employeeData ? (
            <div>
                <div className="employeeSearch" >
                    <div className="helperMessage" >
                        <h2>{`Employee Search\n`}</h2>
                        <input type="text" placeholder="Type your search here" onChange={(e) => this.searchSpace(e)} />
                    </div>
                </div>
                <div className="employeeData" >
                    <h2> { 'RESULTS'} </h2>
                    <Employee data={this.state.employeeData} searchData={this.state.search}/>
                </div>
            </div>

        ): null;
    }
}
export default Searchbar