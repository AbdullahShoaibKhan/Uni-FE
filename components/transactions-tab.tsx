import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
export function TransactionsTab() {
  // Sample transaction data matching the image
  const transactions = [
    {
      coin: "Bitcoin",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/BTC.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
      date: "12 Jun, 2025",
      amount: "$5,240",
      shares: "0.36",
      fundValue: "12 Jun, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Litecoin",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/LTC.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
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
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/DOGE.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
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
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/ETH.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "Litecoin",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/LTC.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
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
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/BTC.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
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
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/SHIB.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
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
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/DOGE.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
      date: "21 Aug, 2025",
      amount: "$5,240",
      shares: "15",
      fundValue: "21 Aug, 2025",
      status: "Completed",
      txHash: "AC 18.55"
    },
    {
      coin: "SHIB",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/SHIB.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
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
    <main className="py-4 sm:py-6 lg:py-8 flex flex-col gap-3 w-full">
      {/* Stats Cards Grid */}


      {/* Main Content Grid */}
      <div className="grid grid-cols-1 2xl:grid-cols-12 gap-2 sm:gap-3">

        {/* Transactions Table - 7 columns */}
        <div className="2xl:col-span-9 flex flex-col gap-3 sm:gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-2 sm:gap-3">
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
              px-4 sm:px-6 py-4 sm:py-6 lg:py-[30px]
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
                  <div className="flex flex-col gap-1 sm:gap-2 flex-1 min-w-0">
                    <p className="text-white text-xs sm:text-sm font-normal leading-tight">{stat.title}</p>
                    <p
                      className="text-xl sm:text-2xl lg:text-[32px] font-normal text-[#0FEDBE] leading-[100%]"
                    >
                      {stat.value}
                    </p>
                  </div>

                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={66}
                    height={66}
                    className="object-contain w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex-shrink-0"
                  />
                </div>
              </Card>
            ))}
          </div>
          <Card className="relative bg-transparent border-none backdrop-blur-[94px]"
            style={{
              background: `linear-gradient(55.85deg, rgba(31, 55, 81, 0.15) 50.9%, rgba(85, 224, 255, 0.15) 90.47%)`

            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] pointer-events-none"
              style={{
                background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-[18px] p-3 sm:p-4 gap-3 sm:gap-1">
              <h3 className="text-white font-normal text-sm sm:text-base lg:text-[20px]">Track all your fund purchases, rewards, and withdraws in real time</h3>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1">
                <Select defaultValue="all">
                  <SelectTrigger className="bg-white/6 border-none text-white backdrop-blur-[34px] text-sm font-normal h-10 sm:h-[49px] w-full sm:w-[135px] rounded-[8px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white/6 border-none text-white backdrop-blur-[34px] text-sm font-normal rounded-[8px]">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="ltc">LTC</SelectItem>
                    <SelectItem value="doge">DOGE</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="border-none text-white backdrop-blur-[34px] hover:bg-white/10 hover:text-white bg-white/6 rounded-[8px] font-normal text-xs sm:text-sm p-3 sm:p-4 h-10 sm:h-[49px]">
                  <span className="hidden sm:inline">Download CSV File</span>
                  <span className="sm:hidden">Download</span>
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 bg-[#39597D33]">
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 px-3 sm:px-6">Coins</th>
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 hidden sm:table-cell">Date</th>
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3">Amount</th>
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 hidden md:table-cell">Shares</th>
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 hidden lg:table-cell">Fund Value</th>
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3">Status</th>
                    <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 hidden xl:table-cell">Tx Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-slate-800/70 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-normal text-white">
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px] px-3 sm:px-6">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <span className={`text-sm sm:text-lg ${transaction.iconColor}`}>{transaction.icon}</span>
                          <span className="text-white font-medium">{transaction.coin}</span>
                        </div>
                      </td>
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px] hidden sm:table-cell">{transaction.date}</td>
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px]">{transaction.amount}</td>
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px] hidden md:table-cell">{transaction.shares}</td>
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px] hidden lg:table-cell">{transaction.fundValue}</td>
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px]">
                        <span className="text-[#0FEDBE]">{transaction.status}</span>
                      </td>
                      <td className="pt-3 sm:pt-[21px] pb-3 sm:pb-[21px] hidden xl:table-cell">{transaction.txHash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Right Side Panels - 5 columns */}
        <div className="2xl:col-span-3 grid grid-cols-1 gap-2 sm:gap-3">
          {/* AI Insights Panel */}
          <Card
            className="
              relative 
              p-4 sm:p-6 lg:p-[30px] h-full
              rounded-[12px] 
              border-none
              bg-transparent
              overflow-hidden 
              backdrop-blur-[94px]
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              background: 'background: linear-gradient(282.85deg, rgba(31, 55, 81, 0.15) 24.9%, rgba(85, 224, 255, 0.15) 95.47%)',
              backgroundImage: 'url(/images/AI.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px]"
              style={{
                background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}></div>
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-base sm:text-lg lg:text-[20px] mb-4 sm:mb-6 lg:mb-[30px]">AI Insights</h3>

              <div className="flex flex-col gap-3">
                {/* Insights */}
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-[14px]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0">
                      <img src="/images/CheckGreen.png" alt="Check Green" className="w-full h-full object-cover object-center" />
                    </div>
                    <p className="text-white text-xs sm:text-sm">You've averaged $1,041 per buy order</p>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-[14px]">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex-shrink-0">
                      <img src="/images/CheckGreen.png" alt="Check Green" className="w-full h-full object-cover object-center" />
                    </div>
                    <p className="text-white text-xs sm:text-sm">You Latest buy was $200 on 15/04/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Next Projected Withdraws Eligibility */}
          <Card className="relative border-none p-4 sm:p-6 lg:p-[30px] h-fit backdrop-blur-[94px]"
            style={{
              background: 'radial-gradient(circle at bottom left, rgba(31, 138, 129, 1) 0%, transparent 30%),radial-gradient(circle at top right, rgba(21 55 52) -12%, transparent 31%)'
              
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px]"
              style={{
                background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
                padding: '1px',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
              }}></div>
            <div className="text-left">
              <h3 className="text-white font-normal text-sm sm:text-base lg:text-[20px] mb-2">Next projected withdraws eligibility on 12/05/2025</h3>
              <p className="text-[#0FEDBE] text-xs sm:text-sm"></p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
