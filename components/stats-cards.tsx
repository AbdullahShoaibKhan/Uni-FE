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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-[14px]">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`
            relative overflow-hidden 
            px-4 lg:px-5 2xl:px-6 py-4 lg:py-[25px] 2xl:py-[30px]
            rounded-[10px] 2xl:rounded-[12px] 
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
              background: "radial-gradient(ellipse at right, rgba(20, 184, 166, 0.15) 0%, transparent 90%)"
            }}
          />
          
          {/* Content */}
          <div className="relative flex items-start justify-between h-full z-10">
            <div className="flex flex-col gap-1 sm:gap-2 flex-1 min-w-0">
              <p className="text-white text-xs lg:text-[13px] 2xl:text-sm font-normal leading-tight">{stat.title}</p>
              <p 
                className="text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] font-normal text-[#0FEDBE] leading-[100%]"
              >
                {stat.value}
              </p>
            </div>

              <Image
                src={stat.icon}
                alt={stat.title}
                width={66}
                height={66}
                className="object-contain w-8 h-8 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16 flex-shrink-0"
              />
          </div>
        </Card>
      ))}
    </div>
  )
}