import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import CarouselApp from './carousel/carouselIndex'
import AccordianApp from './Accordian/FAQ.js'
import TodoApp from './TodoReact/newTodo'
import QuoteApp from './QuoteGenerator/quoteGen'
import PropsApp from './components/props'





// 
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
    const arr = [
          {
              name:"Bike",
              image:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1",
              price:"$100",
              desc:"svghbnjscdgvhj ghjkcfvgbh"
          },
          {
              name:"Mobile",
              image:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1",
              price:"$101",
              desc:"svghbnjscdgvhj ghjkcfvgbh"
          },
          {
              name:"LED",
              image:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?pid=ImgDet&rs=1",
              price:"$102",
              desc:"svghbnjscdgvhj ghjkcfvgbh"
          }
  
      ]
  return (
<HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CarouselApp />} />
          <Route path="todo" element={<TodoApp />} />
          <Route path="accordian" element={<AccordianApp propArray={prop}/>}/>
          <Route path="quotes" element={<QuoteApp/>}/>
          <Route path="props" element={<PropsApp props={arr} />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

// Accordian

// const prop = [{
//     title:"Is this a good product?",
//     info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
// },
// {
//     title:"How much does it cost?",
//     info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
// },
// {
//     title:"When can I get it?",
//     info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
// },
// {
//     title:"Warranty of it?",
//     info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
// }
// ]
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AccordianApp propArray={prop}/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
