import React, { useState } from "react";


const table = () => {


    const [table, setTable] = useState();
    return (
        <div>

            <table>

                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        table.map((value,i) =>{
                        return <tr key={i}>
                            
                            <td>{value}</td>

                                </tr>
                        
                        })
                                         
                    }
                    
                </tbody>

            </table>
        </div>
    )
}

export default table; 