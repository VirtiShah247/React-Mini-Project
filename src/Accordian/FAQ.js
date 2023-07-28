import { Fragment, useState } from "react";
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import './FAQ.css';

export default function AccordionApp(props) {

    const Accordion = ({ title, info }) => {
        const [status, setStatus] = useState(false);

        const toggleStatus = () => {
            setStatus(!status);
        };

        const icon = status? <BiUpArrow /> : <BiDownArrow />;

        return (
            <Fragment>
                <div className="row accordianDiv" >
                    <div className="col-10 accordianTitleDiv" onClick={toggleStatus}>
                        {title}
                    </div>
                    <button className="col-2 accordianButtonDiv" onClick={toggleStatus}>
                        {icon}
                    </button>
                    {status && <div className="accordianInfoDiv my-3">{info}</div>}
                </div>
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div className="accordianMainDiv">
                <div className="accordianSubDiv">
                    <h3 className="text-center">FAQ/Accordion</h3>
                    {props.propArray.map((prop, index) => (
                        <Accordion key={index} title={prop.title} info={prop.info} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
