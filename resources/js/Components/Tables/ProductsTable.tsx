import React from "react";

export default function ProductsTable() {
    return (
        <React.Fragment>
            <div className="fade-in-early overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th></th>
                            <th>Unit Price</th>
                            <th></th>
                            <th>Stocks</th>
                            <th>Added Date</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <tr className="odd:bg-secondary">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr className="odd:bg-secondary">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}
