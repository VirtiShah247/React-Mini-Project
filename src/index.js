import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import CarouselApp from './carousel/carouselIndex'
import AccordianApp from './Accordian/FAQ.js'
import TodoApp from './TodoReact/newTodo'
import QuoteApp from './QuoteGenerator/quoteGen'


export default function App()
{

    const prop = [
        {
            title:"Is this a good product?",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            title:"How much does it cost?",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            title:"When can I get it?",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        },
        {
            title:"Warranty of it?",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
        }]
  return (<HashRouter>
      <Routes className="tab-content">
        <Route path="/" className="tab-pane" element={<Layout />}>
          <Route index  className="tab-pane fade" element={<CarouselApp />} />
          <Route path="todo" className="tab-pane fade" element={<TodoApp />} />
          <Route path="accordian" className="tab-pane fade" element={<AccordianApp propArray={prop}/>}/>
          <Route path="quotes" className="tab-pane fade" element={<QuoteApp/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
