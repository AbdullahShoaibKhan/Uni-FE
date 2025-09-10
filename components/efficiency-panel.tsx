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
        p-6 h-full
        rounded-[12px] 
        border 
        border-[#308BA499]
        bg-transparent
        overflow-hidden 
        backdrop-blur-[94px]
      "
    >
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-[20px] mb-[32px]">Efficiency Metrics</h3>
        <div className="flex flex-col gap-[22px]">
          {metrics.map((metric, index) => {
            // const IconComponent = metric.icon
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
             
                  <span className="text-white font-normal text-sm ">{metric.label}</span>
                </div>
                <span
              className="font-normal text-[20px] text-[#0FEDBE]"
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
