import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
const Main=()=>{
    const [search,setSearch]= useState("");
    const [bookData,setBookData]=useState([]);
    const searchBook=(evt)=>{
        // if(evt.key==="Enter" || evt.key==="onClick")
        // {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyDuQ4_doYIpTOBYFGxHDd-9NSUHtWT0DpA' + '&maxResults=40')
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
        // }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e => setSearch(e.target.value)} onKeyUp={searchBook}/>
                        <button onClick={searchBook}><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;