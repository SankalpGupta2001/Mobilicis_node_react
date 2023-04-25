import  React,{ useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { Table, } from "react-bootstrap"; 

const LastNameScreen = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
          try {
            const res = await axios.get("/last-name-users");
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
<h4>3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

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

export default LastNameScreen;

