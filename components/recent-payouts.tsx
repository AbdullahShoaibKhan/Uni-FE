import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RecentPayouts() {
  const payouts = [
    {
      coin: "Bitcoin",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/BTC.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      ),
      iconColor: "text-orange-400",
      date: "12 Jun, 2025",
      amount: "$5,240",
      qty: "0.36",
      status: "Completed",
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
      qty: "12",
      status: "Completed",
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
      qty: "30",
      status: "Completed",
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
      qty: "15",
      status: "Completed",
    },
  ]

  return (
    <Card className="        
        relative 
        pt-4 sm:pt-6 lg:pt-[30px] h-full
        rounded-[12px] 
        border-none
        bg-transparent
        overflow-hidden 
        backdrop-blur-[94px]
        lg:col-span-7
        "
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
        }}
      />
      <div className="flex items-center justify-between mb-4 sm:mb-6 px-4 sm:px-6">
        <h3 className="text-white font-semibold text-base sm:text-lg lg:text-[20px]">Recent Payouts</h3>
        <p className="text-[#0FEDBE] hover:text-cyan-300 font-medium text-sm sm:text-base">
          View All
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700 bg-[#39597D33]">
              <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 px-3 sm:px-6">Coins</th>
              <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 hidden sm:table-cell">Date</th>
              <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3">Amount</th>
              <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3 hidden md:table-cell">Qty</th>
              <th className="text-left text-white text-xs sm:text-sm lg:text-base font-normal py-2 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout, index) => (
              <tr key={index} className="border-b border-slate-800/70 py-2 sm:py-3 text-xs sm:text-sm lg:text-base font-normal text-white">
                <td className="pt-3 sm:pt-[22px] pb-3 sm:pb-5 px-3 sm:px-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className={`text-sm sm:text-lg ${payout.iconColor}`}>{payout.icon}</span>
                    <span className="text-white font-medium">{payout.coin}</span>
                  </div>
                </td>
                <td className="pt-3 sm:pt-[22px] pb-3 sm:pb-5 hidden sm:table-cell">{payout.date}</td>
                <td className="pt-3 sm:pt-[22px] pb-3 sm:pb-5">{payout.amount}</td>
                <td className="pt-3 sm:pt-[22px] pb-3 sm:pb-5 hidden md:table-cell">{payout.qty}</td>
                <td className="pt-3 sm:pt-[22px] pb-3 sm:pb-5">
                  <span className="text-[#0FEDBE]">{payout.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
