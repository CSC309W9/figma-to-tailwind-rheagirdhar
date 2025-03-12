// app/page.js
// girdha16 - Rhea Girdhar
export default function Home() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Button */}
      <div className="absolute right-[5vw] top-[5vh]">
        <button className="px-[2vw] py-[1vh] bg-[#eaecd7] rounded-full flex items-center justify-center">
          <span className="text-[#db4439] text-[1.2vw] font-black font-['Inknut_Antiqua']">Login</span>
        </button>
      </div>
      
      {/* Coffee Image */}
      <div className="origin-top-left rotate-[-8.64deg] w-[30vw] h-[50vh] absolute right-[15vw] top-[20vh]">
        <div className="w-full h-full absolute" />
        <img 
          className="w-[28vw] h-auto absolute" 
          src="https://marketplace.canva.com/EAE3ZQEPq2I/2/0/900w/canva-simple-aesthetic-coffee-time-instagram-instagram-BTsdS_U4hE4.jpg" 
        />
      </div>
      
      {/* Main Heading */}
      <div className="w-[38vw] absolute left-[8vw] top-[27vh] text-[#eaecd7] text-[6vw] font-black font-['Inknut_Antiqua'] leading-tight">
        Yummy Coffee!
      </div>
      
      {/* Subheading */}
      <div className="w-[38vw] absolute left-[8vw] top-[64vh] text-[#eaecd7] text-[2.2vw] font-semibold font-['Inknut_Antiqua']">
        Your #1 Choice 
      </div>
      
      {/* Navigation */}
      <div className="absolute left-[15vw] top-[4vh] text-[#eaecd7] text-[1.2vw] font-bold font-['Inknut_Antiqua']">Menu</div>
      <div className="absolute left-[3.5vw] top-[4vh] text-[#eaecd7] text-[1.2vw] font-bold font-['Inknut_Antiqua']">Beans</div>
      <div className="absolute left-[28vw] top-[4vh] text-[#eaecd7] text-[1.2vw] font-bold font-['Inknut_Antiqua']">Locations</div>
      
      {/* Footer */}
      <div className="w-full h-[8vh] absolute bottom-0 left-0 bg-white">
        <div className="absolute left-[3.5vw] top-[2vh] text-[#db4439] text-[1.2vw] font-black font-['Inknut_Antiqua']">Reviews</div>
        <div className="absolute left-[17vw] top-[2vh] text-[#db4439] text-[1.2vw] font-black font-['Inknut_Antiqua']">Blogs</div>
        <div className="absolute left-[31vw] top-[2vh] text-[#db4439] text-[1.2vw] font-black font-['Inknut_Antiqua']">Ratings</div>
      </div>
    </div>
  );
}