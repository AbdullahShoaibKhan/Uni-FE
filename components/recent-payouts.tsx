import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RecentPayouts() {
  const payouts = [
    {
      coin: "Bitcoin",
      icon: "₿",
      iconColor: "text-orange-400",
      date: "12 Jun, 2025",
      amount: "$5,240",
      qty: "0.36",
      status: "Completed",
    },
    {
      coin: "Litecoin",
      icon: "Ł",
      iconColor: "text-gray-400",
      date: "15 Jul, 2025",
      amount: "$5,240",
      qty: "12",
      status: "Completed",
    },
    {
      coin: "Doge Coin",
      icon: "Ð",
      iconColor: "text-yellow-400",
      date: "17 Jul, 2025",
      amount: "$5,240",
      qty: "30",
      status: "Completed",
    },
    {
      coin: "SHIB",
      icon: "🐕",
      iconColor: "text-orange-400",
      date: "21 Aug, 2025",
      amount: "$5,240",
      qty: "15",
      status: "Completed",
    },
  ]

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">Recent Payouts</h3>
        <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-slate-700">
          View All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left text-slate-400 text-sm font-medium pb-3">Coins</th>
              <th className="text-left text-slate-400 text-sm font-medium pb-3">Date</th>
              <th className="text-left text-slate-400 text-sm font-medium pb-3">Amount</th>
              <th className="text-left text-slate-400 text-sm font-medium pb-3">Qty</th>
              <th className="text-left text-slate-400 text-sm font-medium pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout, index) => (
              <tr key={index} className="border-b border-slate-800/50">
                <td className="py-4">
                  <div className="flex items-center space-x-3">
                    <span className={`text-lg ${payout.iconColor}`}>{payout.icon}</span>
                    <span className="text-white font-medium">{payout.coin}</span>
                  </div>
                </td>
                <td className="py-4 text-slate-300">{payout.date}</td>
                <td className="py-4 text-white font-semibold">{payout.amount}</td>
                <td className="py-4 text-slate-300">{payout.qty}</td>
                <td className="py-4">
                  <span className="text-green-400 text-sm font-medium">{payout.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
