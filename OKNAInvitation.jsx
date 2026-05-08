export default function OKNAInvitation() {
  return (
    <div className="min-h-screen bg-[#ececec] p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white border border-gray-300 shadow-2xl overflow-hidden">
        {/* Logo */}
        <div className="text-center py-8 border-b border-black">
          <h1 className="text-6xl font-extrabold tracking-widest text-[#0b1b35]">
            OKNA
          </h1>
        </div>

        {/* Top Invitation Layout */}
        <div className="grid md:grid-cols-2">
          {/* Left Side */}
          <div className="p-10">
            <div className="inline-block border border-black px-5 py-2 text-xs tracking-[5px] uppercase mb-8">
              Lunch Invitation · 2026
            </div>

            <p className="italic text-gray-600 mb-8 text-lg">
              You are warmly invited
            </p>

            <h2 className="text-7xl font-serif font-bold leading-tight mb-10">
              Ar. Deeksha <br /> & Ar. <br /> Harsimran
            </h2>

            <div className="uppercase tracking-[5px] text-sm text-gray-500 mb-12">
              Architects <br /> — The Arch House
            </div>

            <div className="flex items-end gap-5">
              <div className="text-9xl font-bold leading-none">12</div>

              <div className="uppercase tracking-[4px] text-gray-500 text-sm pb-3">
                <div>May · 2026</div>
                <div>Tuesday · Lunch</div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="h-full min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
              alt="Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Middle Text */}
        <div className="px-10 py-10 border-t border-gray-300 text-xl leading-relaxed text-gray-700">
          Please join us for an intimate <span className="italic font-semibold">lunch at OKNA</span>
          — an opportunity to connect, experience our world of precision-engineered
          windows & doors, and share ideas in good company.
        </div>

        {/* Venue */}
        <div className="grid md:grid-cols-2 border-t border-gray-300">
          <div className="p-10 border-r border-gray-300">
            <div className="text-4xl text-gray-500 mb-4">Tuesday</div>
            <div className="text-xl text-gray-700">12:30 PM onwards</div>
          </div>

          <div className="p-10">
            <div className="uppercase tracking-[5px] text-sm text-gray-500 mb-4">
              Venue
            </div>

            <h3 className="text-4xl font-bold mb-5">
              OKNA System Windows
            </h3>

            <p className="text-lg text-gray-700 leading-9">
              2nd Floor, Plot No. 1620 C <br />
              Sector 82, JLPL Industrial Area <br />
              SAS Nagar, Punjab 140306
            </p>

            <button className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition-all">
              View Location
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 uppercase tracking-[4px] text-sm text-gray-500">
          <div>System Doors & Windows</div>
          <div className="text-2xl font-bold text-[#0b1b35] tracking-normal">
            OKNA
          </div>
          <div>oknadesigns.com</div>
        </div>
      </div>
    </div>
  );
}
