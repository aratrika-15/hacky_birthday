import React from "react"
import Review from "./Review"
import axios from 'axios';
import { useEffect } from 'react';
//import ReactWordcloud from 'react-wordcloud';
//import 'tippy.js/dist/tippy.css';
//import 'tippy.js/animations/scale.css';
import { WordCloud } from "word-cloud-react";
import { useState } from 'react';

const BookBlog = ({book}) => {
    const [ reviews, setReviews ] =useState([
        {
            username:"pastagarg",
            content:"I loved this book. Its great. The horror is superb and I got really scared.",
            rating: 8
        },
        {
            username:"nisha",
            content:"I loved this book. Its got good horror and was making me feel scared.",
            rating: 10
        },
        {
            username:"arat",
            content:"This book is a great horror book and I loved it.",
            rating: 9
        },
    ])
    const [ words, setWords ] = useState([
        {
          "word": 'fiction',
          "value": 6,
        },
        {
          "word": 'book',
          "value": 3,
        },
        {
          "word": 'great',
          "value": 2,
        },
        {
          "word": 'story',
          "value": 4,
        },
        {
            "word": 'love',
            "value": 9,
          },
          {
            "word": 'romance',
            "value": 6,
          },
          {
            "word": 'poetry',
            "value": 4,
          },
          {
            "word": 'blend',
            "value": 1,
          },
          {
            "word": 'greatest',
            "value": 1,
          },
      ]);
      


      useEffect(()=>{
        getReviews();
    },[])
    const getReviews = () => {
      console.log("Here");
      axios.get('http://localhost:5000/reviews/all_reviews',{
        params:{isbn:book.isbn}
      })
      .then((response)=>{
          console.log(response);
          const allReviews=response.data.reviews;
          setReviews(allReviews);
      })
      .catch(error => console.log(error));
  }
      
      
    return (
        <div className="details">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <img src={book.medium_img}/>
        <h2>Summary </h2>
        <p>{book.description}</p>
        <h2> Reviews </h2>
        <WordCloud 
            width={"auto"} 
            maxFont={80} 
            minFont={20} 
            data={words} 
            clickEvent={(x)=>console.log(x.word)} 
            color={['#71803F', '#F8AC1D','#598EC0','#E2543E','#1A3051','#F46F73','#8A87BB','#56CFCD','#297373','#FF8552','#F2E863','#C2F8CB','#3A6EA5','#FF6700','#C0C0C0','#4E4381','#523CBD',]}/>
        
        {
            reviews.map((review)=>{
            return <Review review={review}/>
            })
        }
        </div> 
    )

}

export default BookBlog