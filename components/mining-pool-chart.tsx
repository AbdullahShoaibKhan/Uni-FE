import { Card } from "@/components/ui/card"

export function MiningPoolChart() {
  const poolData = [
    {
      name: "BTC",
      percentage: 40,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400",
      dotColor: "bg-cyan-400"
    },
    {
      name: "KAS",
      percentage: 30,
      color: "text-green-400",
      bgColor: "bg-green-400",
      dotColor: "bg-green-400"
    },
    {
      name: "DOGE",
      percentage: 15,
      color: "text-cyan-400",
      bgColor: "bg-orange-400",
      dotColor: "bg-orange-400"
    },
    {
      name: "LTC",
      percentage: 15,
      color: "text-cyan-400",
      bgColor: "bg-yellow-400",
      dotColor: "bg-yellow-400"
    },
  ]
  return (
    <Card
      className="relative bg-transparent border-none p-4 lg:p-5 2xl:p-6 lg:col-span-5 backdrop-blur-[94px]"
      style={{
        background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.15) 24.9%, rgba(85, 224, 255, 0.15) 95.47%)',
      }}

    >
      <div
        className="absolute inset-0 rounded-[10px] 2xl:rounded-[12px]"
        style={{
          background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      />
      <div className="relative z-10">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full">
          {/* Left Section - Cryptocurrency Cards in 2x2 Grid */}
          <div className="w-full">
            <h3 className="text-white font-semibold text-base lg:text-lg 2xl:text-[20px] mb-4 lg:mb-6 2xl:mb-[32px]">Mining Pool Distribution</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* BTC */}
              <div className="relative p-3 lg:p-4 2xl:p-6 rounded-[10px] 2xl:rounded-lg bg-slate-800/30 overflow-hidden"
                style={{
                  background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 164, 255, 0.1) 95.47%)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-[10px] 2xl:rounded-lg"
                  style={{
                    background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2 lg:gap-3 2xl:gap-4">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#0FEDBE] shadow-lg" />
                  <div className="text-white font-normal text-xs sm:text-sm">{poolData[0].name}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0FEDBE]">{poolData[0].percentage}%</div>
                </div>
              </div>

              {/* KAS */}
              <div className="relative p-3 sm:p-4 lg:p-6 rounded-lg bg-slate-800/30 overflow-hidden"
                style={{
                  background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 164, 255, 0.1) 95.47%)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#95FF85] shadow-lg" />
                  <div className="text-white font-medium text-xs sm:text-sm">{poolData[1].name}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0FEDBE]">{poolData[1].percentage}%</div>
                </div>
              </div>

              {/* DOGE */}
              <div className="relative p-3 sm:p-4 lg:p-6 rounded-lg bg-slate-800/30 overflow-hidden"
                style={{
                  background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 164, 255, 0.1) 95.47%)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FFA93F] shadow-lg" />
                  <div className="text-white font-medium text-xs sm:text-sm">{poolData[2].name}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0FEDBE]">{poolData[2].percentage}%</div>
                </div>
              </div>

              {/* LTC */}
              <div className="relative p-3 sm:p-4 lg:p-6 rounded-lg bg-slate-800/30 overflow-hidden"
                style={{
                  background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 164, 255, 0.1) 95.47%)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                    padding: '1px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'xor',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#FBFF79] shadow-lg" />
                  <div className="text-white font-medium text-xs sm:text-sm">{poolData[3].name}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0FEDBE]">{poolData[3].percentage}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Donut Chart */}
          <div className="flex items-center justify-center w-full">
            <div className="relative w-full h-48 sm:h-64 lg:h-full">
              {/* Donut Chart */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgb(55, 65, 81)"
                  strokeWidth="20"
                />

                {/* BTC - 40% (144 degrees) - Teal */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#0FEDBE"
                  strokeWidth="30"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.4} ${2 * Math.PI * 80}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />

                {/* KAS - 30% (108 degrees) - Light Green */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#95FF85"
                  strokeWidth="30"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.3} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.4}`}
                  transform="rotate(-90 100 100)"
                />

                {/* DOGE - 15% (54 degrees) - Orange */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#FFA93F"
                  strokeWidth="30"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.15} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.7}`}
                  transform="rotate(-90 100 100)"
                />

                {/* LTC - 15% (54 degrees) - Yellow */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#FBFF79"
                  strokeWidth="30"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.15} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.85}`}
                  transform="rotate(-90 100 100)"
                />
              </svg>

              {/* Center Circle and Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl lg:text-3xl font-normal">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
