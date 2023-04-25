import  React,{ useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { Table, } from "react-bootstrap"; 

const MaleScreen = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
          try {
            const res = await axios.get("/male-users");
            
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
<h4>2. Male Users which have phone price greater than 10,000.

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

export default MaleScreen;

