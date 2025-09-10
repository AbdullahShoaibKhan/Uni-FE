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
      dotColor: "bg-orange-400",
      isSelected: true
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
    <Card className="bg-slate-800/50 border-slate-700 p-6 col-span-5" >
      <h3 className="text-white font-semibold text-lg mb-6">Mining Pool Distribution</h3>

      <div className="relative z-10">
        <h3 className="text-white font-semibold text-lg mb-6">Mining Pool Distribution</h3>

        <div className="flex items-start justify-between h-full">
          {/* Left Section - Cryptocurrency Cards in 2x2 Grid */}
          <div className="w-1/2 pr-4">
            <div className="grid grid-cols-2 gap-4">
              {/* BTC */}
              <div 
                className={`
                  relative 
                  p-4 
                  rounded-lg 
                  border 
                  transition-all 
                  duration-300
                  ${poolData[0].isSelected 
                    ? 'border-cyan-400/60 bg-cyan-400/5 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-600/50 bg-slate-800/30'
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-3 h-3 rounded-full ${poolData[0].dotColor} shadow-lg`} />
                  <div className="text-white font-medium text-sm">{poolData[0].name}</div>
                  <div className={`text-lg font-bold ${poolData[0].color}`}>{poolData[0].percentage}%</div>
                </div>
                {poolData[0].isSelected && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-pulse"></div>
                )}
              </div>

              {/* KAS */}
              <div 
                className={`
                  relative 
                  p-4 
                  rounded-lg 
                  border 
                  transition-all 
                  duration-300
                  ${poolData[1].isSelected 
                    ? 'border-cyan-400/60 bg-cyan-400/5 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-600/50 bg-slate-800/30'
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-3 h-3 rounded-full ${poolData[1].dotColor} shadow-lg`} />
                  <div className="text-white font-medium text-sm">{poolData[1].name}</div>
                  <div className={`text-lg font-bold ${poolData[1].color}`}>{poolData[1].percentage}%</div>
                </div>
                {poolData[1].isSelected && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-pulse"></div>
                )}
              </div>

              {/* DOGE */}
              <div 
                className={`
                  relative 
                  p-4 
                  rounded-lg 
                  border 
                  transition-all 
                  duration-300
                  ${poolData[2].isSelected 
                    ? 'border-cyan-400/60 bg-cyan-400/5 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-600/50 bg-slate-800/30'
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-3 h-3 rounded-full ${poolData[2].dotColor} shadow-lg`} />
                  <div className="text-white font-medium text-sm">{poolData[2].name}</div>
                  <div className={`text-lg font-bold ${poolData[2].color}`}>{poolData[2].percentage}%</div>
                </div>
                {poolData[2].isSelected && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-pulse"></div>
                )}
              </div>

              {/* LTC */}
              <div 
                className={`
                  relative 
                  p-4 
                  rounded-lg 
                  border 
                  transition-all 
                  duration-300
                  ${poolData[3].isSelected 
                    ? 'border-cyan-400/60 bg-cyan-400/5 shadow-lg shadow-cyan-400/20' 
                    : 'border-slate-600/50 bg-slate-800/30'
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-3 h-3 rounded-full ${poolData[3].dotColor} shadow-lg`} />
                  <div className="text-white font-medium text-sm">{poolData[3].name}</div>
                  <div className={`text-lg font-bold ${poolData[3].color}`}>{poolData[3].percentage}%</div>
                </div>
                {poolData[3].isSelected && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-pulse"></div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Donut Chart */}
          <div className="flex items-center justify-center w-1/2">
            <div className="relative w-48 h-48">
              {/* Donut Chart */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Define gradients */}
                <defs>
                  <linearGradient id="btcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                    <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                  </linearGradient>
                  <linearGradient id="kasGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0FEDBE" />
                    <stop offset="100%" stopColor="#101F25" />
                  </linearGradient>
                  <linearGradient id="dogeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF8C00" />
                    <stop offset="100%" stopColor="#8B4513" />
                  </linearGradient>
                  <linearGradient id="ltcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(251, 191, 36)" />
                    <stop offset="100%" stopColor="rgb(245, 158, 11)" />
                  </linearGradient>
                </defs>
                
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="rgb(55, 65, 81)"
                  strokeWidth="20"
                />
                
                {/* BTC - 40% (144 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#btcGradient)"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.4} ${2 * Math.PI * 80}`}
                  strokeDashoffset="0"
                  transform="rotate(-90 100 100)"
                />
                
                {/* KAS - 30% (108 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#kasGradient)"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.3} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.4}`}
                  transform="rotate(-90 100 100)"
                />
                
                {/* DOGE - 15% (54 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#dogeGradient)"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.15} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.7}`}
                  transform="rotate(-90 100 100)"
                />
                
                {/* LTC - 15% (54 degrees) */}
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="url(#ltcGradient)"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 80 * 0.15} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${2 * Math.PI * 80 * 0.85}`}
                  transform="rotate(-90 100 100)"
                />
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
