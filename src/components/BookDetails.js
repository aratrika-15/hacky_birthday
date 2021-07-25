import Navbar from './Navbar';
import Header from './Header/Header';
import { useParams, useLocation } from "react-router-dom";
import React from 'react';
import BookBlog from './BookBlog';


const BookDetails = () => {
    const location = useLocation();
    const book= location.state?.book
    const sidebar_list=["Details","Description","Reviews"]
    
    return (
        <div>
            <Navbar/>
            <React.Fragment>
            <td><Header sidebar_list={sidebar_list} sidebar_title={book.title}/></td>
            <td>
            <BookBlog book={book} />
            </td>
            </React.Fragment>
        </div>
    )
}

export default BookDetails;