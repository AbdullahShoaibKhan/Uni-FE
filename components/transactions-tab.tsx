import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function TransactionsTab() {
  // Sample transaction data matching the image
  const transactions = [
    {
      coin: "Bitcoin",
      icon: "₿",
      iconColor: "text-orange-400",
      date: "12 Jun, 2025",
      amount: "$5,240",
      shares: "0.36",
      fundValue: "12 Jun, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Litecoin",
      icon: "Ł",
      iconColor: "text-gray-400",
      date: "15 Jul, 2025",
      amount: "$5,240",
      shares: "12",
      fundValue: "15 Jul, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Doge Coin",
      icon: "Ð",
      iconColor: "text-yellow-400",
      date: "17 Jul, 2025",
      amount: "$5,240",
      shares: "30",
      fundValue: "17 Jul, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "SHIB",
      icon: "🐕",
      iconColor: "text-orange-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Litecoin",
      icon: "Ł",
      iconColor: "text-gray-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Bitcoin",
      icon: "₿",
      iconColor: "text-orange-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "SHIB",
      icon: "🐕",
      iconColor: "text-orange-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Doge Coin",
      icon: "Ð",
      iconColor: "text-yellow-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "SHIB",
      icon: "🐕",
      iconColor: "text-orange-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    }
  ]

  // Stats data matching the image
  const statsData = {
    totalPurchases: "$12,450",
    totalWithdraws: "$1,200",
    netBalance: "$11,300",
    transactions: "13"
  }

  return (
    <main className="py-8 flex flex-col gap-3 w-full">
      {/* Stats Cards Grid */}


      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">

        {/* Transactions Table - 7 columns */}
        <div className="lg:col-span-9 flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[14px]">
            {[
              {
                title: "Total Purchases",
                value: statsData.totalPurchases,
                icon: "/images/TotalPurchases.png",
              },
              {
                title: "Total Withdraws",
                value: statsData.totalWithdraws,
                icon: "/images/TotalWithdraws.png",
              },
              {
                title: "Net Balance",
                value: statsData.netBalance,
                icon: "/images/NetBalance.png",
              },
              {
                title: "Transactions",
                value: statsData.transactions,
                icon: "/images/Transactions.png",
              },
            ].map((stat, index) => (
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
          <Card className="bg-slate-800/50 border border-[#308BA499] py-6">
            <div className="flex items-center justify-between mb-6 px-6">
              <h3 className="text-white font-semibold text-[20px]">Track all your fund purchases, rewards, and withdraws in real time</h3>
              <div className="flex items-center gap-3">
                <select className="bg-slate-700 border border-slate-600 text-white px-3 py-1 rounded text-sm">
                  <option>All</option>
                </select>
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 text-sm">
                  Download CSV File
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 bg-[#39597D33]">
                    <th className="text-left text-white text-sm font-normal py-3 px-6">Coins</th>
                    <th className="text-left text-white text-sm font-normal py-3">Date</th>
                    <th className="text-left text-white text-sm font-normal py-3">Amount</th>
                    <th className="text-left text-white text-sm font-normal py-3">Shares</th>
                    <th className="text-left text-white text-sm font-normal py-3">Fund Value</th>
                    <th className="text-left text-white text-sm font-normal py-3">Status</th>
                    <th className="text-left text-white text-sm font-normal py-3">Tx Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-slate-800/70 py-3 text-sm font-normal text-white">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <span className={`text-lg ${transaction.iconColor}`}>{transaction.icon}</span>
                          <span className="text-white font-medium">{transaction.coin}</span>
                        </div>
                      </td>
                      <td className="py-4">{transaction.date}</td>
                      <td className="py-4">{transaction.amount}</td>
                      <td className="py-4">{transaction.shares}</td>
                      <td className="py-4">{transaction.fundValue}</td>
                      <td className="py-4">
                        <span className="text-green-400">{transaction.status}</span>
                      </td>
                      <td className="py-4">{transaction.txHash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right Side Panels - 5 columns */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-2">
          {/* AI Insights Panel */}
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
              <h3 className="text-white font-semibold text-[20px] mb-[32px]">AI Insights</h3>

              <div className="space-y-6">
                {/* Insights */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-white text-sm">You've averaged $1,041 per buy order</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <p className="text-white text-sm">You Latest buy was $200 on 15/04/2025</p>
                  </div>
                </div>

                {/* AI Chatbot Visual */}
                <div className="mt-6 relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 border border-slate-600">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#0FEDBE] mb-2">Ai</div>
                      <div className="text-xs text-slate-400 mb-3">Command Prompt</div>
                      <div className="w-full h-8 bg-slate-700 rounded border border-slate-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Next Projected Withdraws Eligibility */}
          <Card className="bg-slate-800/50 border border-[#308BA499] p-6">
            <div className="text-center">
              <h3 className="text-white font-semibold text-[16px] mb-2">Next projected withdraws eligibility</h3>
              <p className="text-[#0FEDBE] text-sm">on 12/05/2025</p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
