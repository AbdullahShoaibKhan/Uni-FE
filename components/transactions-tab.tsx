import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function TransactionsTab() {
  // Sample transaction data
  const transactions = [
    {
      id: "TXN001",
      type: "Purchase",
      amount: "0.5 BTC",
      status: "Completed",
      date: "2025-01-03",
      time: "14:30:25"
    },
    {
      id: "TXN002", 
      type: "Mining Reward",
      amount: "0.0012 BTC",
      status: "Pending",
      date: "2025-01-03",
      time: "12:15:10"
    },
    {
      id: "TXN003",
      type: "Purchase",
      amount: "1.2 BTC", 
      status: "Completed",
      date: "2025-01-02",
      time: "09:45:33"
    },
    {
      id: "TXN004",
      type: "Withdrawal",
      amount: "0.3 BTC",
      status: "Processing",
      date: "2025-01-02", 
      time: "16:20:15"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Processing":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <main className="container px-2 py-8 space-y-8">
      {/* Transactions Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Transaction History</h1>
          <p className="text-slate-400 mt-2">View all your mining and purchase transactions</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
            Export CSV
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Filter
          </Button>
        </div>
      </div>

      {/* Transaction Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{transactions.length}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              {transactions.filter(t => t.status === "Completed").length}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">
              {transactions.filter(t => t.status === "Pending").length}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">
              {transactions.filter(t => t.status === "Processing").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions List */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Transactions</CardTitle>
          <CardDescription className="text-slate-400">
            Your latest mining and purchase activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-white">{transaction.type}</span>
                      <span className="text-slate-400 text-sm">#{transaction.id}</span>
                    </div>
                    <div className="text-slate-400 text-sm">
                      {transaction.date} at {transaction.time}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold text-white">{transaction.amount}</div>
                    <Badge className={`${getStatusColor(transaction.status)} border`}>
                      {transaction.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
