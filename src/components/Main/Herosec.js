import Img from "../../images/idol.jpg";
export default function Herosec() {
  return (
    <>
      <div className="relative">
        <img src={Img} alt="" className="w-full bg-center " />
        <div className="absolute imga text-white text-3xl text-center">
          Shopping above 50,000 on <br />
          <span className="text-primary ">Wooden Furniture</span> u will <br />
          get 2,000 discount.
          <div>
            <button className="btn">Go to the page</button>
          </div>
        </div>
      </div>
    </>
  );
}
