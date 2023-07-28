import { useState, useEffect, Fragment } from "react";
export default function QuoteApp()
{
    const [quote,setQuote] = useState([])
    const [data,setData] = useState()
    // const [count,setCount] = useState(0)
    
    useEffect(()=>{
        fetch('https://type.fit/api/quotes')
        .then(response=>{
        response.json()
        .then(data=> {
            setData(data)
            setQuote([{text:data[0].text,author:data[0].author}])
            // setQuote(data[count].text);
        });
        })
        .catch(error=> {
        console.log('Fetch Error:', error);
        });
    },[])
    return <Fragment>
        <h1>Random Quotes</h1>
        {quote.length > 0 && (
            <blockquote>
                <div>{quote[0].text}</div>
                <div>{quote[0].author}</div>
            </blockquote>
        )}
        <button onClick={()=>{
            // console.log(data,Math.floor(Math.random() * (data.length)))
            if(data){
                const count = Math.floor(Math.random() * (data.length));
            // console.log(count)
                console.log(quote)
                setQuote([{text:data[count].text,author:data[count].author}])
            }
        }}>New Quote</button>
    </Fragment>
}