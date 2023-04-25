import  React,{ useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { Table, } from "react-bootstrap"; 

const TopCitiesScreen = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
          try {
            const res = await axios.get("/top-cities");
            console.log(res);
            setUsers(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getNewUsers();
      }, []);


   return (
    <>
    <br/>
<h4>5. Show the data of top 10 cities which have the highest number of users and their average income.

</h4>
<br/>
        <Table striped bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                        
                        <th>
                            CITY
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((product) => (
                            <tr key={product._id}>
                            
                            <td>
                                {product.city}
                            </td>
                            


                            </tr>
                        ))
                    }
                </tbody>
        </Table>
    </>
   )
  
}

export default TopCitiesScreen;

