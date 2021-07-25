import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '17px',
    border: '4px solid #f1356d',
    width:'500px',
    textAlign:'center'
  },
  overlay:{
    backgroundColor: 'rgba(255, 255, 255, 0.85)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement');


const BookCard = ({category,books}) => {
    const [ currentlyReading, setCurrentlyReading ] = useState(false)
    const [ wishList, setWishList ]= useState(false)
    const [ booksRead, setBooksRead ]=useState(false)
    const [ rating, setRating ] = useState(0)
    const [ review, setReview ] = useState("")
    const [ isbn, setIsbn ] = useState("")

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          paddingLeft:20,
          paddingRight:20,
          paddingTop:10,
          paddingBottom:10,
        },
        media: {
          height: 350,
        },
      });
    const classes = useStyles();


    function closeCurrentlyReading() {
      setCurrentlyReading(false);
    }

    //adding to Currently Reading
    const openCurrentlyReading=(book)=>{
        setCurrentlyReading(true)
        //send a http request to add to currently reading
        axios.post('http://localhost:5000/bookshelf/add_current', {
        book:book,
        username:'aratrika510'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    }

    //adding to Wishlist
    const openWishlist=(book)=>{
      setWishList(true)
      //send a http request to add to wishlist
      axios.post('http://localhost:5000/bookshelf/add_wishlist', {
        book:book,
        username:'aratrika510'
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
  function closeWishList() {
    setWishList(false);
  }


  function openBooksRead(book) {
    setBooksRead(true)
    console.log(book.isbn)
    setIsbn(book.isbn)
    axios.post('http://localhost:5000/bookshelf/add_read', {
      book:book,
      username:'aratrika510'
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  function changeRating(newRating) {
    console.log(newRating)
    setRating(newRating)
  }

  function handleReviewChange(e) {
    console.log(e.target.value)
    setReview(e.target.value)
  }

  function handleFormSubmit(){
    console.log(rating)
    console.log(review)
    
    axios.post('http://localhost:5000/reviews/add_reviews',{
      rating:rating,
      review:review,
      isbn:isbn,
      username:'aratrika510'
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }

    return (
        <div className="cards">
        <Modal
        isOpen={currentlyReading}
        onRequestClose={closeCurrentlyReading}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <p>Added to Currently Reading</p>
      </Modal>
      <Modal
        isOpen={wishList}
        onRequestClose={closeWishList}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <p>Added to Wishlist</p>
      </Modal>
      {booksRead &&
      <div className="wrapper">
      <form>
      <fieldset>
         <label>
           <p>Rating</p>
           <StarRatings
          rating={rating}
          starRatedColor="gold"
          changeRating={(newRating)=>changeRating(newRating)}
          numberOfStars={10}
          starDimension='30px'
          name='rating'
        />
         </label>
         <label>
           <p>Review</p>
           <input name="review" onChange={(e)=>handleReviewChange(e)} required/>
         </label>
         </fieldset>
       <button type="submit" onClick={handleFormSubmit} class="submit_button">Submit</button>
    
      </form>
      </div>
      }
        <h1>{category}</h1>
        <React.Fragment>
            { 
            books.map((book)=>{
                return (
                <td>
                <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                className={classes.media}
                image={book.medium_img? book.medium_img:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg"}
                />
                <CardContent>
                <h2>{book.title}</h2>
                <h3>By: {book.author}</h3>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <React.Fragment>
      <td>
      <Link to={{
                pathname: "/bookdetails",
                state:{
                    book:book
                }
                }}>
        
        <Button size="small" color="link" >
          See More
        </Button>
        </Link>
        </td>
        <td>
        <Button size="small" color="link" onClick={()=>openCurrentlyReading(book)}>
        Add to Currently Reading
        </Button>
        </td>
        </React.Fragment>
        <React.Fragment>
        <td>
        <Button size="small" color="link" onClick={()=>openWishlist(book)}>
        Add to Wishlist
        </Button>
        </td>
        <td>
        <Button size="small" color="link" onClick={()=>openBooksRead(book)}>
        Add to Books Read
        </Button>
        </td>
        </React.Fragment>
      </CardActions>
                </Card>
                </td>
                )
            })}
        </React.Fragment>
        </div>
    )
}


export default BookCard