import React, { useState, useEffect } from 'react'
import "../css/Orders.css"
import { useStateValue } from "../StateProvider"
import { collection, doc, query, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import Order from './Order'

function Orders() {
    const [ {basket, user }, dispatch] = useStateValue()
    const [ orders, setOrders ] =useState([])

    useEffect(() => {
        if(user){
            const ordersQuery = query(
                collection(doc(collection(db, "users"), user?.uid), 'orders'),
                orderBy("created", "desc")
            )
    
            onSnapshot(ordersQuery, (snapshot) => {
                console.log("The snapshot", snapshot)
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }else{
            setOrders([])
        }
    }, [])

    useEffect(() => {
      console.log("UseEffect", orders)
    }, [orders])


  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map(order => (
            <Order order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders
