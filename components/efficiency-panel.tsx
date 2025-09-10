import { Card } from "@/components/ui/card"
import { Zap, Monitor, Gauge } from "lucide-react"

export function EfficiencyPanel() {
  const metrics = [
    {
      label: "Hashrate",
      value: "1.25PH/s",
      color: "text-cyan-400",
    },
    {
      label: "Machines Online",
      value: "0.12 JGH",
      color: "text-green-400",
    },
    {
      label: "Efficiency",
      value: "0.12 JGH",
      color: "text-yellow-400",
    },
  ]

  return (
    <Card
      className="
        relative 
        p-6 
         h-[423px] 
        rounded-[12px] 
        border 
        overflow-hidden 
        backdrop-blur-[94px]
        shadow-[0px_4px_10px_0px_rgba(5,11,32,0.36),2px_4px_14px_0px_rgba(0,255,221,0.6)_inset]
      "
      style={{
        backgroundImage: 'url("/images/tester.jpeg")',

        background:
          "linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 255, 241, 0.1) 95.47%)",
        borderImageSource:
          "linear-gradient(207.74deg, rgba(48, 139, 164, 0.6) 16.89%, rgba(0, 7, 15, 0) 85.16%)",
        borderImageSlice: 1,
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/5" />

      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 right-2 w-20 h-12 border border-orange-400/30 rounded">
          <div className="w-full h-2 bg-gradient-to-r from-orange-400/50 to-yellow-400/50 mt-2"></div>
          <div className="w-3/4 h-1 bg-orange-400/30 mt-1 ml-1"></div>
          <div className="w-1/2 h-1 bg-yellow-400/30 mt-1 ml-1"></div>
        </div>
        <div className="absolute bottom-4 right-4 text-orange-400/20 text-xs">
          Mining Rig
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-semibold text-lg mb-6">Efficiency Metrics</h3>

        <div className="space-y-4">
          {metrics.map((metric, index) => {
            // const IconComponent = metric.icon
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
             
                  <span style={{
                    color: "#FFFFFF",
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    textAlign: "right",
                  }}>{metric.label}</span>
                </div>
                <span
                  style={{
                    color: "#0FEDBE",
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "15px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    textAlign: "right",
                  }}
                >
                  {metric.value}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
