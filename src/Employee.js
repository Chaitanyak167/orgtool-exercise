import React from "react";
import './Employee.css';

class Employee extends React.Component {

    render() {
        const {data, searchData} = this.props;
        const filterData = data.filter((data) => {
            if (searchData == null)
                return data;
            else if (
                (data.name
                    .toLowerCase()
                    .includes(searchData.toLowerCase()))
            ) {
                return data;
            }
        });
        return (
            filterData.length ?
                <>
                    {
                        filterData.map((item) => (
                            <>
                                <div className="card">
                                    <span> {item.name + " (" + item.title + ")"} </span>

                                    {item.subordinates?.length &&  (
                                        <div className="subChild">
                                            <Employee data={item.subordinates} searchData={searchData}/>
                                        </div>
                                    )}
                                </div>
                            </>
                        ))
                    }
                </> : <div>No employee results!</div>
        );
    }
}
export default Employee;