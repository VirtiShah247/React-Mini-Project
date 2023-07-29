import { useState, useEffect, Fragment } from "react";
import './quoteGen.css'
import { FaRandom} from 'react-icons/fa';
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from 'react-icons/bi';

export default function QuoteApp()
{
    const [quote,setQuote] = useState([])
    const [data,setData] = useState()

    const randomData = (data) =>{
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
        })
        
        })
        .catch(error=> {
        console.log('Fetch Error:', error);
        });
    },[])
    return <Fragment>
                <div>
                    <div className="quoteMainDiv">
                        <h1>Random Quotes</h1>
                        <br/>
                        {quote.length>0 && (
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