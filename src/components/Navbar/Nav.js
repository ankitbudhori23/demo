export default function Nav() {
  return (
    <>
      <div className="flex justify-between px-20 py-6 align-middle">
        <div>LOGO</div>
        <div>
          <input
            type="text"
            className="outline-none p-1 w-200"
            placeholder="Let's look for your favourite..."
          />
        </div>
        <div>right</div>
      </div>
      <hr style={{ backgroundColor: "#ad923e", padding: ".3px" }} />
      <div className="flex justify-between px-20 py-4 align-middle font-bold text-medium">
        <div className="cursor-pointer hover-u ">Our Journey</div>
        <div className="cursor-pointer hover-u ">Top Pics</div>
        <div className="cursor-pointer hover-u ">Devine Essentials</div>
        <div className="cursor-pointer hover-u ">Decor</div>
        <div className="cursor-pointer hover-u ">Figurines</div>
        <div className="cursor-pointer hover-u ">Wooden Handicrafts</div>
        <div className="cursor-pointer hover-u ">Corporate Giftings</div>
        <div className="cursor-pointer hover-u ">Say Hello!</div>
      </div>
    </>
  );
}
