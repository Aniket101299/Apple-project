import ReactPlayer from "react-player";
import "./Airpods.css";
import { Icons } from "./Icons";



export function Airpods() {





return(
    <>
    <Icons/>

    <div className="get">Get 6 months of Apple Music free with your AirPods.* <span> Check eligibility {'>'} </span> </div>

    <div className="video" >
    <ReactPlayer fluid={false} width='100%' height='800px'  Border-radius='10px' autoPlay={true} playing={true} loop={true} muted={true} url='https://www.apple.com/105/media/us/airpods/2021/625e09e3-e26e-49ed-a5ee-6e4eda5d275f/anim/supercut/large_2x.mp4' />  
    </div>
						
	<div className="textonVid">
    <p>AirPods</p>
    <p>3rd generation</p>
    <p>$179</p>
    </div>				
   
    <div>
        <button className="buy">Buy</button>
        <p className="lm"> Learn more {'>'} </p>
    </div>




    <div className="whiair" >
    <img width='410px' height='600px' className="limg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_pro_left__bvanpj0ujnf6_large.png' alt="img"/>  
    <img width='410px' height='600px' className="rimg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_pro_right__fm0wwisa76em_medium.png' alt="img"/> 
    </div>
						
	<div className="textonImg">
    <p>AirPods Pro</p>
    <p>$249</p>
    </div>				
   
    <div>
        <button className="buy1">Buy</button>
        <p className="lm1"> Learn more {'>'} </p>
    </div>





    
    <div className="airMaxImg" >
    <img width='535px' height='592px'  Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_max__f265q4g4ddym_large.png' alt="img"/>  
    </div>
						
	<div className="airMax">
    <img src="https://www.apple.com/v/airpods/q/images/overview/airpods_max_logo__bdgdixidcqcy_large.jpg" alt="img"/>
    <p>$549</p>
    </div>				
   
    <div>
        <button className="airbuy">Buy</button>
        <p className="airlm"> Learn more {'>'} </p>
    </div>
    






    <div className="airp" >
    <div >
    <img width='350px' height='700px'  className="airplimg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large.png' alt="img"/>  
    </div>
    <img width='310px' height='718px' className="airprimg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_2ndgen_right__gahfggwvcx6q_large.png' alt="img"/> 
    </div>
						
	<div className="textonairp">
    <p>AirPods</p>
    <p>2nd generation</p>
    <p>$129</p>
    </div>				
   
    <div>
        <button className="airpbuy">Buy</button>
        <p className="airplm"> Learn more {'>'} </p>
    </div>





   <div className="maco">A magical connection to 
   <div> your devices. </div>
   </div>
  






    </>
)

    

}