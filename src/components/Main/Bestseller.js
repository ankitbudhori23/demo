import Img1 from "../../images/buddha-4440349_1920.jpg";
import Img2 from "../../images/ganesh-5508585_1920.jpg";
import Img3 from "../../images/statuette-3108045_1920.png";
import Img4 from "../../images/lord-krishna-7366880_1920.jpg";
import Img5 from "../../images/lord-3614576_1920.jpg";
export default function Bestseller() {
  return <div>
  <div>
  Our Bestsellers
    </div>
    <div className="flex justify-around">
      <img src={Img1} alt="" className="wid hei"/>
      <img src={Img2} alt="" className="wid hei"/>
      <img src={Img3} alt="" className="wid hei"/>
      <img src={Img4} alt="" className="wid hei"/>
      <img src={Img5} alt="" className="wid hei"/>
      </div>
  </div>;
}
