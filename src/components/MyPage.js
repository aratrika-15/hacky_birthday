import Navbar from './Navbar';
import Header from './Header/Header';
import MyCard from './MyCard';
import React from 'react';

const MyPage = () => {
    const sidebar_title="My Page";
    const sidebar_list=["Recommended","Wishlist","CurrentlyReading","BooksRead"]
    const dataset_books={
        "Recommended":[{
            title:"Harry Potter",
            author:"JK Rowling",
            img:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
        },
            {
                title:"Harry Potter",
                author:"JK Rowling",
                img:"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
                description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
            }
                
        ],
        "Wishlist":[
                {   isbn:"0002005018",
                    title:"Clara Callan",
                    author:"Ming Li",
                    img:"https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
                    description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
                },
                {
                    title:"Annabelle",
                    author:"Dave Rich",
                    img:"https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
                    description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
                }
        ],
        "CurrentlyReading":[
            {   isbn:"0002005018",
                title:"Clara Callan",
                author:"Ming Li",
                img:"https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
                description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
            },
            {
                title:"Annabelle",
                author:"Dave Rich",
                img:"https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
                description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
            }
    ],
    "BooksRead":[
        {   isbn:"0002005018",
            title:"Clara Callan",
            author:"Ming Li",
            img:"https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
            description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
        },
        {
            title:"Annabelle",
            author:"Dave Rich",
            img:"https://upload.wikimedia.org/wikipedia/en/e/e8/The_Conjuring_-_The_Devil_Made_Me_Do_It.png",
            description: "In a small town in Canada, Clara Callan reluctantly takes leave of her sister, Nora, who is bound for New York. It\'s a time when the growing threat of fascism in Europe is a constant worry, and people escape from reality through radio and the movies. Meanwhile, the two sisters -- vastly different in personality, yet inextricably linked by a shared past -- try to find their places within the complex web of social expectations for young women in the 1930s. While Nora embarks on a glamorous career as a radio-soap opera star, Clara, a strong and independent-minded woman, struggles to observe the traditional boundaries of a small and tight-knit community without relinquishing her dreams of love, freedom, and adventure. However, things aren\'t as simple as they appear -- Nora\'s letters eventually reveal life in the big city is less exotic than it seems, and the tranquil solitude of Clara\'s life is shattered by a series of unforeseeable events. These twists of fate require all of Clara\'s courage and strength, and finally put the seemingly unbreakable bond between the sisters to the test.",
        }
]
        }
    return (
    <div>
    <Navbar/>
    <React.Fragment>
    <td><Header sidebar_list={sidebar_list} sidebar_title={sidebar_title}/></td>
    <td>
    <MyCard category={"Recommended"} books={dataset_books.Recommended}/>
    <MyCard category={"Wishlist"} books={dataset_books.Wishlist}/>
    <MyCard category={"Currently Reading"} books={dataset_books.CurrentlyReading}/>
    <MyCard category={"Books Read"} books={dataset_books.BooksRead}/>
    </td>
    </React.Fragment>
    </div>
    )
}

export default MyPage;