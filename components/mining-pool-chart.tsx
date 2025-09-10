import { Card } from "@/components/ui/card"

export function MiningPoolChart() {
  const poolData = [
    { name: "BTC", percentage: 40, color: "text-orange-400", bgColor: "bg-orange-400" },
    { name: "KAS", percentage: 30, color: "text-green-400", bgColor: "bg-green-400" },
    { name: "DOGE", percentage: 15, color: "text-yellow-400", bgColor: "bg-yellow-400" },
    { name: "LTC", percentage: 15, color: "text-gray-400", bgColor: "bg-gray-400" },
  ]

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6" >
      <h3 className="text-white font-semibold text-lg mb-6">Mining Pool Distribution</h3>

      <div className="flex items-center justify-center mb-6">
        {/* Circular Chart Placeholder */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-green-400 via-yellow-400 to-gray-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">100%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {poolData.map((pool, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${pool.bgColor}`} />
            <div>
              <span className="text-white font-medium">{pool.name}</span>
              <span className={`ml-2 ${pool.color} font-bold`}>{pool.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
