export default function OKNAInvitation() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-black flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="border-b border-gray-300 py-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">OKNA</h1>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block border border-black px-4 py-2 text-sm tracking-[4px] uppercase mb-8">
                Lunch Invitation · 2026
              </div>

              <p className="italic text-gray-600 mb-6">You are warmly invited</p>

              <h2 className="text-6xl leading-tight font-serif font-bold mb-6">
                Ar. Deeksha <br /> & Ar. <br /> Harsimran
              </h2>

              <div className="uppercase tracking-[4px] text-sm text-gray-500 mb-10">
                Architects — The Arch House
              </div>

              <div className="flex items-end gap-4 mb-10">
                <span className="text-8xl font-bold leading-none">12</span>
                <div className="pb-3 uppercase tracking-[3px] text-gray-500 text-sm">
                  <div>May · 2026</div>
                  <div>Tuesday · Lunch</div>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-8 text-lg leading-relaxed text-gray-700">
                Please join us for an intimate <span className="font-semibold italic">lunch at OKNA</span> —
                an opportunity to connect, experience our world of precision-engineered
                windows & doors, and share ideas in good company.
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="OKNA Building"
              className="w-full h-full object-cover"
            />

            <div className="absolute top-6 right-6 bg-black/70 text-white px-5 py-3 rounded-xl backdrop-blur-md">
              <div className="text-xl font-bold tracking-wide">OKNA SELECT</div>
            </div>
          </div>
        </div>

        {/* Venue Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-300">
          <div className="p-8 border-r border-gray-300">
            <div className="text-3xl text-gray-500 mb-3">Tuesday</div>
            <div className="text-lg text-gray-700">12:30 PM onwards</div>
          </div>

          <div className="p-8">
            <div className="uppercase tracking-[4px] text-sm text-gray-500 mb-3">
              Venue
            </div>

            <h3 className="text-3xl font-bold mb-3">OKNA System Windows</h3>

            <p className="text-gray-700 leading-7">
              2nd Floor, Plot No. 1620 C <br />
              Sector 82, JLPL Industrial Area <br />
              SAS Nagar, Punjab 140306
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              Open Maps
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm tracking-[3px] uppercase text-gray-500">
          <div>System Doors & Windows</div>
          <div className="font-bold text-black text-xl tracking-normal">OKNA</div>
          <div>oknadesigns.com</div>
        </div>
      </div>
    </div>
  );
}
