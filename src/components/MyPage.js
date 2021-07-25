import Navbar from './Navbar';
import Header from './Header/Header';
import MyCard from './MyCard';
import React from 'react';

const MyPage = () => {
    const sidebar_title="My Page";
    const sidebar_list=["Recommended- by Content","Recommended- by Similar Users","Wishlist","CurrentlyReading","BooksRead"]
    const dataset_books={
        "RecommendedByContent":[{
            isbn: "1552041778",
            title:"Jane Doe",
            author:"R. J. Kaiser",
            medium_img:"http://images.amazon.com/images/P/1552041778.01.MZZZZZZZ.jpg",
            description: "a woman who is a party to legal proceedings and whose true name is unknown or withheld.",
        },
        {isbn:"0064442551",title:"The Witch Who Was Afraid of Witches (I Can Read Book 4)",author:"Alice Low",medium_img:"http://images.amazon.com/images/P/0064442551.01.MZZZZZZZ.jpg",description:"Wendy is a little witch who is afraid of her mean, bossy witch sisters--until one special Halloween night when she makes a magical discovery and outwitches her older sisters. In this new edition, complete with full-color art, Alice Low has adapted her popular story specifically for beginning readers"}
    ]
        ,

        "RecommendedBySimilarUsers":[  {"isbn":"0877017883","title":"Griffin &amp; Sabine: An Extraordinary Correspondence","author":"Nick Bantock","publisher":"Chronicle Books","small_img":"http://images.amazon.com/images/P/0877017883.01.THUMBZZZ.jpg","medium_img":"http://images.amazon.com/images/P/0877017883.01.MZZZZZZZ.jpg","large_img":"http://images.amazon.com/images/P/0877017883.01.LZZZZZZZ.jpg","avgRating":"6.041666666666667"},
        {"isbn":"0439064864","title":"Harry Potter and the Chamber of Secrets (Book 2)","author":"J. K. Rowling","publisher":"Scholastic","small_img":"http://images.amazon.com/images/P/0439064864.01.THUMBZZZ.jpg","medium_img":"http://images.amazon.com/images/P/0439064864.01.MZZZZZZZ.jpg","large_img":"http://images.amazon.com/images/P/0439064864.01.LZZZZZZZ.jpg","avgRating":"6.6117647058823525"},
        {"isbn":"0894808249","title":"All I Need to Know I Learned from My Cat","author":"Suzy Becker","publisher":"Workman Publishing","small_img":"http://images.amazon.com/images/P/0894808249.01.THUMBZZZ.jpg","medium_img":"http://images.amazon.com/images/P/0894808249.01.MZZZZZZZ.jpg","large_img":"http://images.amazon.com/images/P/0894808249.01.LZZZZZZZ.jpg","avgRating":"5.238095238095238"}
    ],
        "Wishlist":[
                {   isbn:"0002005018",
                    title:"Clara Callan",
                    author:"Ming Li",
                    medium_img:"http://images.amazon.com/images/P/0002005018.01.MZZZZZZZ.jpg",
                    description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
                },
        ],
        "CurrentlyReading":[
            {   isbn:"0451174828",
                title:"Deep Cover",
                author:"D. Edward Bungert",
                medium_img:"http://images.amazon.com/images/P/0451174828.01.MZZZZZZZ.jpg",
                description: "Four separate incidents test the power of the Chrestomanci, a powerful enchanter with nine lives, to control misuses of magic on various worlds.",
            },
            
    ],
    "BooksRead":[
        { isbn: "9810032439",
        title:"Classic Singapore Horror Stories : Book 1",
        author:"Damien Sin",
        medium_img:"http://images.amazon.com/images/P/9810032439.01.MZZZZZZZ.jpg",
        description:"This book talks about the Horrors in Singapore"},
        {
            isbn:"0553154354",
            title:"The Blue-Nosed Witch",
            author:"Margaret Embry",
            medium_img:"http://images.amazon.com/images/P/0553154354.01.MZZZZZZZ.jpg",
            description: "Trick or treating is a new game for a real little witch"
        }],
            
        }

        
    return (
    <div>
    <Navbar/>
    <React.Fragment>
    <td><Header sidebar_list={sidebar_list} sidebar_title={sidebar_title}/></td>
    <td>
    <MyCard category={"Recommended by Content"} books={dataset_books.RecommendedByContent}/>
    <MyCard category={"Recommended by Similar Users"} books={dataset_books.RecommendedBySimilarUsers}/>
    <MyCard category={"Wishlist"} books={dataset_books.Wishlist}/>
    <MyCard category={"Currently Reading"} books={dataset_books.CurrentlyReading}/>
    <MyCard category={"Books Read"} books={dataset_books.BooksRead}/>
    </td>
    </React.Fragment>
    </div>
    )
}

export default MyPage;