import  React,{ useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { Table, } from "react-bootstrap"; 

const HomeScreen = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
          try {
            const res = await axios.get("/users");
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
<h4>1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
</h4>
<br/>
<Table striped bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            FIRST_NAME
                        </th>
                        <th>
                            LAST_NAME
                        </th>
                        <th>
                            EMAIL
                        </th>
                        <th>
                            GENDER
                        </th>
                        <th>
                            INCOME
                        </th>
                        <th>
                            CITY
                        </th>
                        <th>
                            CAR
                        </th>
                        <th>
                            QUOTE
                        </th>
                        <th>
                            PHONE_PRICE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((product) => (
                            <tr key={product._id}>
                            <td>
                                {product.id}
                            </td>
                            <td>
                                {product.first_name}
                            </td>
                            <td>
                                {product.last_name}
                            </td>
                            <td>
                                {product.email}
                            </td>
                            <td>
                                {product.gender}
                            </td>
                            <td>
                                {product.income}
                            </td>
                            <td>
                                {product.city}
                            </td>
                            <td>
                                {product.car}
                            </td>
                            <td>
                                {product.quote}
                            </td>
                            <td>
                                {product.phone_price}
                            </td>



                            </tr>
                        ))
                    }
                </tbody>
        </Table>
    </>
        
    
   )
  
}

export default HomeScreen;

