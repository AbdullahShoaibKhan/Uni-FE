import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    // <header className="border-b border-slate-800" style={{backgroundImage: 'url("/images/main-bg.svg")', backgroundSize: 'cover'}}>
    <header className="">

      <div className="container mx-auto px-1 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-sm">LN</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">Buy</span>
                <span className="text-slate-400 text-sm">Last Update: 03/10/2025</span>
              </div>
            </div>

            <nav className="flex items-center space-x-1">
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Mining Dashboard
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Buy</Button>
              <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
                Transactions
              </Button>
            </nav>
          </div>

          {/* Right Section - Currency and User */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-sm">Currency</span>
              <Select defaultValue="usd">
                <SelectTrigger className="w-20 bg-slate-800 border-slate-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                  <SelectItem value="btc">BTC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-orange-500 text-white text-xs">BC</AvatarFallback>
              </Avatar>
              <span className="text-slate-300 text-sm">bc17S92VF27rkF...</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
