import {useState,useEffect, Fragment} from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './carousel.css'
export default function CarouselApp()
{
    const imageObj = [
        {
            id:0,
            url:"https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?pid=ImgDet&rs=1"
        },
        {
            id:1,
            url:"https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id:2,
            url:"https://www.bwallpaperhd.com/wp-content/uploads/2021/01/NashPoint.jpg"
        },
        {
            id:3,
            url:"https://th.bing.com/th/id/R.56dde41aee17e96425987f751a9269ce?rik=PimP3aKlBih1aA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f09%2ftropical_beach_blue_summer_sea_emerald_sand_hd-wallpaper-1701606.jpg&ehk=OVN5KYNNiPQtsbvJxJZF3%2fZMhpDEpVc4ebUXS5y20%2f4%3d&risl=&pid=ImgRaw&r=0"
        }
    ]
    const [image,setImage] = useState(imageObj[0].url);
    const [count,setCount] = useState(0)

    useEffect(()=>{
        setImage(imageObj[count].url)
    },[count])
    return <Fragment>
        <div className='container carouselMainDiv'>
            <h3 id="mainHeading">Carousel</h3>
            <div>
                <div className="row">
                    <div className="col buttonStyle">
                        <button onClick={()=>{setCount(count===0?3:count-1);}}>
                        <FaArrowLeft/>
                        </button>    
                    </div>
                    <div className="col resizeImage">
                        <img src = {image} alt="Sorry"/>    
                    </div>
                    <div className="col buttonStyle">
                        <button onClick={()=>{setCount(count===3?0:count+1);}}>
                            <FaArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

