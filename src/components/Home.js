import Navbar from './Navbar';
import React from 'react';
import Header from './Header/Header';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = ()=>{
const [ searchedTerm, setSearchedTerm ] = useState("")
const [ foundSearched, setFoundSearched ] = useState(false)
const [ datasetBooks, setDatasetBooks]=useState({
    "Fiction":[] , 
    
    "Cooking":[],
    "Travel":[],
    "Science":[],
    "Psychology":[],
    "Poetry":[]
})
const sidebar_list= ["Fiction","Travel","Cooking","Science","Psychology","Poetry"]
const sidebar_title="Categories"

useEffect(()=>{
    getBooks();
},[])
const getBooks = () => {
    console.log("Here");
    axios.get('http://localhost:5000/homepage/get_books')
    .then((response)=>{
        console.log(response);
        const allBooks=response.data;
        setDatasetBooks(allBooks);
    })
    .catch(error => console.log(error));
}



    const updateSearchedTerm = async (input) => {
        console.log(input)
        setSearchedTerm(input);
        
     };


    const handleKeyPress= async (event) => {
        if (event.key === "Enter") {
          console.log(searchedTerm)
          //fetch request to find the searched books
          setFoundSearched(true)
        }
      }
   

return (
<div>
    <Navbar/>
    
    {!foundSearched && <React.Fragment>
    <td><Header sidebar_list={sidebar_list} sidebar_title={sidebar_title}/></td>
    <td>
        <SearchBar updateInput={updateSearchedTerm} keyPress={handleKeyPress}/>
        <BookCard category={"Fiction"} books={datasetBooks.Fiction}/>
        <BookCard category={"Travel"} books={datasetBooks.Travel}/>
        <BookCard category={"Cooking"} books={datasetBooks.Cooking}/>
        <BookCard category={"Science"} books={datasetBooks.Science}/>
        <BookCard category={"Psychology"} books={datasetBooks.Psychology}/>
        <BookCard category={"Poetry"} books={datasetBooks.Poetry}/>
        
        </td>
    </React.Fragment>}
</div>
);

}

export default Home;