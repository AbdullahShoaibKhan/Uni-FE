import Image from "next/image"
import { Card } from "@/components/ui/card"

export function StatsCards() {
  const stats = [
    {
      title: "Current Fund Price Per",
      value: "$1.00",
      icon: "/images/Frame (1).png",
      gradient: "from-emerald-500/20 to-cyan-500/20",
      border: "border-emerald-500/30",
    },
     {
      title: "Your Balance",
      value: "$8,560",
      icon: "/images/Group (1).png",
      gradient: "from-blue-500/20 to-purple-500/20",
      border: "border-blue-500/30",
    },
    {
      title: "You Will Receive",
      value: "1000 Share",
      icon: "/images/Frame.png",
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
    },
    {
      title: "Rewards Rate",
      value: "1000 Share",
      icon: "/images/Group.png",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
  ]

return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className={`
            relative overflow-hidden 
            p-6 
            rounded-xl 
            w-full h-[125px]
            backdrop-blur-[34px]
            border-0
          `}
          style={{
            background: "linear-gradient(130deg, #0F2B2A 0%, #1A4A47 50%, #0F2B2A 100%)",
            boxShadow: `
              0 0 20px rgba(20, 184, 166, 0.3),
              0 0 40px rgba(20, 184, 166, 0.1),
              inset 0 1px 0 rgba(20, 184, 166, 0.2),
              inset 0 -1px 0 rgba(20, 184, 166, 0.1)
            `,
            border: "1px solid rgba(20, 184, 166, 0.2)"
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
            <div>
              <p className="text-gray-300 text-sm font-medium mb-2">{stat.title}</p>
              <p 
                className="text-3xl font-bold mt-1"
                style={{ color: "#14B8A6" }}
              >
                {stat.value}
              </p>
            </div>
            <div 
              className="p-3 rounded-lg flex items-center justify-center"
              style={{
                background: "rgba(20, 184, 166, 0.1)",
                border: "1px solid rgba(20, 184, 166, 0.3)",
                boxShadow: "0 0 10px rgba(20, 184, 166, 0.2)"
              }}
            >
              <Image
                src={stat.icon}
                alt={stat.title}
                width={48}
                height={48}
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.4))" }}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}