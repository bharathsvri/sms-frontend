import React, { useState } from "react";
import './Form.css'
import { sendTextMessage } from "../../assets/data";
import axios from "axios";

const Form = () => {

    const [name,setName] = useState('');
    const [number,setNumber] = useState('')
    const [place,setPlace] = useState('')
    const [productName,setProductName] = useState('')
    const [price,setPrice] = useState('')
    const [emi,setEmi] = useState('')
    const [amount,setAmount] = useState('')
    const [balance,setBalance] = useState('')
    const [date,setDate] = useState('')

    async function getData(){
        await axios.post("http://localhost:3000/",{name,number,place,productName,price,emi,amount,balance,date});
    }
    
  return (
    <div className="form">
    <h2>Form</h2>
      <section className="name">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={(e)=> setName(e.target.value)} />
      </section>
      <section className="mobile">
        <label htmlFor="mobile">Mobile:</label>
        <input type="text" id="mobile" onChange={(e)=> setNumber(e.target.value)} />
      </section>
      <section className="place">
        <label htmlFor="place">Place:</label>
        <input type="text" id="place" onChange={(e)=> setPlace(e.target.value)} />
      </section>
      <section className="productName">
        <label htmlFor="productName">Product Name</label>
        <input type="text" id="productName" onChange={(e)=> setProductName(e.target.value)} />
      </section>
      <section className="price">
        <label htmlFor="price">Price</label>
        <input type="text" id="price" onChange={(e)=> setPrice(e.target.value)} />
      </section>
      <section className="emi">
        <label htmlFor="emi">EMI</label>
        <select name="emi" id="emi" onChange={(e)=> setEmi(e.target.value)}>
          <option value="">Month</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </section>
      <section className="amount">
        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" onChange={(e)=> setAmount(e.target.value)} />
      </section>
      <section className="balance">
        <label htmlFor="balance">Balance</label>
        <input type="text" id="balance" onChange={(e)=> setBalance(e.target.value)} />
      </section>
      <section className="date">
        <label htmlFor="date">Date</label>
        <input type="date" id="date" onChange={(e)=> setDate(e.target.value)} />
      </section>
      <button onClick={getData}>Submit</button>
    </div>
  );
};

export default Form;
