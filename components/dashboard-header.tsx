"use client"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Flower2 } from "lucide-react"

interface DashboardHeaderProps {
  selectedTab: string
  onTabChange: (tab: string) => void
}

export function DashboardHeader({ selectedTab, onTabChange }: DashboardHeaderProps) {
  return (
    <header className=" py-5 relative overflow-hidden">
      {/* Background texture overlay */}


      <div className="flex items-center justify-between">
        {/* Left Section - Logo and Title */}
        <div className="flex items-center space-x-4">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden bg-white" style={{backgroundColor: 'transparent'}}>
            <img src="/images/Group 1707488843.png" alt="logo" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-white font-semibold text-2xl">Mining Dashboard</h1>
            <span className="text-white/70 font-normal text-sm">Last Update: 03/10/2025</span>
          </div>
        </div>

        {/* Center Section - Navigation Tabs */}
        <div className="flex items-center">
          <div className="bg-[#1F375166] rounded-full py-[7px] px-[8px] flex items-center border gap-2 border-slate-600/30">
            <Button
              variant="ghost"
              onClick={() => onTabChange("mining")}
              className={`rounded-full px-4 py-3 h-auto transition-all duration-200 ${selectedTab === "mining"
                  ? "text-white shadow-lg border border-slate-600"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/50 border border-transparent"
                }`}
              style={selectedTab === "mining" ? {
                background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
              } : {}}
            >
              Mining Dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => onTabChange("buy")}
              className={`rounded-full px-4 py-3 h-auto transition-all duration-200 ${selectedTab === "buy"
                  ? "text-white shadow-lg border border-slate-600"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/50 border border-transparent"
                }`}
              style={selectedTab === "buy" ? {
                background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
              } : {}}
            >
              Buy
            </Button>
            <Button
              variant="ghost"
              onClick={() => onTabChange("transactions")}
              className={`rounded-full px-4 py-3 h-auto transition-all duration-200 ${selectedTab === "transactions"
                  ? "text-white shadow-lg border border-slate-600"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/50 border border-transparent"
                }`}
              style={selectedTab === "transactions" ? {
                background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
              } : {}}
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Transactions
            </Button>
          </div>
        </div>

        {/* Right Section - Currency and Wallet */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-4">
            <h1 className="font-normal text-sm text-white">
              Currency
            </h1>
            <Select defaultValue="usd">
              <SelectTrigger className="w-16 bg-slate-700 border-slate-600 text-slate-300 rounded-full px-3 py-2 h-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="btc">BTC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center bg-slate-700 rounded-full px-3 py-2 space-x-2">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-slate-300 text-sm">bc17S92VF27rkF...</span>
          </div>
        </div>
      </div>
    </header>
  )
}
