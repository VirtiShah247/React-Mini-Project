import React from 'react'

const PropsApp = (props) =>
{
    
    return <>
        <div className="container">
            <div className="row">
                {props.props.map((p)=>{
                    return <>
                        <div className="col" style={{textAlign:"center"}}>
                            <div>
                                {p.name}
                            </div>
                            <img src={p.image} alt="sorry" style={{width:"40vh"}}/>
                            <div>
                                {p.price}
                            </div>
                            <div>
                                {p.desc}
                            </div>
                            <div>
                                <button onClick="Change"></button>
                            </div>
                        </div>
                    </>
                    
                    
                })}
                
            </div>
        </div>
    </>
}

export default PropsApp;