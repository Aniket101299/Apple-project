import "./ImageSlider.css";

export function ImageSlider() {

var slider_img = document.querySelector(".slider-img");
var images = ["https://www.apple.com/v/airpods/q/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg","https://www.apple.com/v/airpods/q/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg","https://www.apple.com/v/airpods/q/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg","https://www.apple.com/v/airpods/q/images/overview/tile_announce_notifications__f2jmuafd1wey_large.jpg"];

return (
    <>
       <div className="slider">
          <div className="img-box">
            <img src="" alt="" className="slider-image"/>
          </div>
       </div>

    
    {/* Next and Prev buttons */}

    <button className="btn" onClick={()=> prev()}>Prev</button>
    <button className="btn" onClick={()=> next()}>Next</button>


    </>
)

}