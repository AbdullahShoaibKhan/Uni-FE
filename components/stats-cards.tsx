import Image from "next/image"
import { Card } from "@/components/ui/card"

interface StatsCardsProps {
  currentFundPrice?: string
  youWillReceive?: string
  yourBalance?: string
  rewardsRate?: string
}

export function StatsCards({ 
  currentFundPrice = "$1.00",
  youWillReceive = "1000 Share", 
  yourBalance = "$8,560",
  rewardsRate = "1000 Share"
}: StatsCardsProps) {
  const stats = [
    {
      title: "Current Fund Price Per",
      value: currentFundPrice,
      icon: "/images/CurrentFundPrice.png",
    },
    {
      title: "You Will Receive",
      value: youWillReceive,
      icon: "/images/YouRecieve.png",
    },
    {
      title: "Your Balance",
      value: yourBalance,
      icon: "/images/YOurBalance.png",
    },
    {
      title: "Rewards Rate",
      value: rewardsRate,
      icon: "/images/RewardRates.png",
    },
  ]

return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`
            relative overflow-hidden 
            px-6 py-[30px]
            rounded-xl 
            w-full
            backdrop-blur-[34px]
            border-0 
        shadow-[0px_4px_10px_0px_rgba(5,11,32,0.36),2px_4px_14px_0px_rgba(0,255,221,0.6)_inset]
          `}
          style={{
            background:
              "linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 255, 241, 0.1) 95.47%)",
            borderImageSource:
              "linear-gradient(207.74deg, rgba(48, 139, 164, 0.6) 16.89%, rgba(0, 7, 15, 0) 85.16%)",
            borderImageSlice: 1,
          }}
        >
          {/* Glow effect overlay */}
          <div 
            className="absolute inset-0 rounded-xl opacity-30"
            style={{
              background: "radial-gradient(ellipse at top, rgba(20, 184, 166, 0.15) 0%, transparent 70%)"
            }}
          />
          
          {/* Content */}
          <div className="relative flex items-start justify-between h-full z-10">
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm font-normal">{stat.title}</p>
              <p 
                className="text-[32px] font-normal text-[#0FEDBE] leading-[100%]"
              >
                {stat.value}
              </p>
            </div>

              <Image
                src={stat.icon}
                alt={stat.title}
                width={66}
                height={66}
                className="object-contain"
              />
          </div>
        </Card>
      ))}
    </div>
  )
}