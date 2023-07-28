import { useState, useEffect, Fragment } from "react";
import './quoteGen.css'
import { FaRandom} from 'react-icons/fa';
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from 'react-icons/bi';

export default function QuoteApp()
{
    const [quote,setQuote] = useState([])
    const [data,setData] = useState()
    // const [count,setCount] = useState(0)
    // const RandomCount = () =>{
    //     // console.log(data,Math.floor(Math.random() * (data.length)))
    //     if(data){
    //         const count = Math.floor(Math.random() * (data.length));
    //     // console.log(count)
    //         console.log(quote)
    //         setQuote([{text:data[count].text,author:data[count].author}])
    //     }
    // }

    // const count = data && Math.floor(Math.random() * (data.length));
    const randomData = (data) =>{
        // setData(data)
        const count = data && Math.floor(Math.random() * (data.length));
        setQuote([{text:data[count].text,author:data[count].author}])
    }

    useEffect(()=>{
        fetch('https://type.fit/api/quotes')
        .then(response=>{
        response.json()
        .then(json=> {
            setData(json)
            randomData(json)

            // setQuote([{text:data[0].text,author:data[0].author}])
            // setQuote(data[count].text);
        })
        
        })
        
        .catch(error=> {
        console.log('Fetch Error:', error);
        });
    },[])
    return <Fragment>
        <div className="quoteMainDiv">
            <div>
                <h1>Random Quotes</h1>
                <br/>
                {quote.length > 0 && (
                    <div className="quoteSubDiv">
                        <div><BiSolidQuoteAltLeft/>{quote[0].text}<BiSolidQuoteAltRight/></div>
                        <div className="blockquote-footer">{(quote[0].author).split(',')[0]}</div>
                    </div>
                )}
                <button onClick={()=>{randomData(data)}}>
                    <FaRandom/>
                </button>
            </div>
        </div>
        
        
    </Fragment>
}