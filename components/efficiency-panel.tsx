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
        px-4 lg:px-5 2xl:px-6 py-4 lg:py-6 2xl:py-[30px] h-full
        rounded-[10px] 2xl:rounded-[12px] 
        border-none
        bg-transparent
        overflow-hidden 
        backdrop-blur-[94px]
      "
      style={{
        backgroundImage: 'url(/images/Efficiency.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
        <h3 className="text-white font-semibold text-base lg:text-base xl:text-xl 2xl:text-[20px] mb-4 lg:mb-6 2xl:mb-[32px]">Efficiency Metrics</h3>
        <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-5">
          {metrics.map((metric, index) => {
            // const IconComponent = metric.icon
            return (
              <div key={index} className="flex items-center justify-between">
                <span className="text-white font-normal text-sm lg:text-xs xl:text-sm 2xl:text-base">{metric.label}</span>
                <span
                  className="font-normal text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#0FEDBE]"
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
