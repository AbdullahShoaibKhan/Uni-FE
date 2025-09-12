"use client"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Flower2, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface DashboardHeaderProps {
  selectedTab: string
  onTabChange: (tab: string) => void
}

export function DashboardHeader({ selectedTab, onTabChange }: DashboardHeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleTabChange = (tab: string) => {
    onTabChange(tab)
    // Close sidebar on mobile after tab selection
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setIsSidebarOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <header className="lg:hidden py-2 sm:py-4 relative overflow-hidden">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8  lg:w-9 lg:h-9 2xl:w-10 2xl:h-10 3xl:w-10 3xl:h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/images/mainLogo.png" alt="logo" className="w-full h-full object-cover object-center" width={50} height={50} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-semibold text-lg sm:text-xl">Mining Dashboard</h1>
              <span className="text-white/70 font-normal text-xs sm:text-sm">Last Update: 03/10/2025</span>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            onClick={toggleSidebar}
            className="text-white hover:bg-slate-600/30 p-2"
          >
            <Menu size={24} />
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-full z-50 lg:z-auto bg-[#0F1923]
          border-r lg:border-r-0 border-[#12283E]
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block
      `}>
        <div className="flex flex-col h-full lg:h-auto p-4 lg:p-0">
          {/* Desktop Header (hidden on mobile) */}
          <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 py-2 lg:py-4">
            {/* Left Section - Logo and Title */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="w-8 h-8 min-w-8 lg:min-w-10 lg:w-10 lg:h-10 2xl:min-w-[50px] 2xl:w-[50px] 2xl:h-[50px] rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/mainLogo.png" alt="logo" className="w-full h-full object-cover object-center" width={50} height={50} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <h1 className="text-white font-semibold text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Mining Dashboard</h1>
                <span className="text-white/70 font-normal text-[8px] lg:text-[10px] xl:text-sm hidden sm:block">Last Update: 03/10/2025</span>
              </div>
            </div>

            {/* Center Section - Navigation Tabs */}
            <div className="bg-[#1F375166] rounded-full py-1 2xl:py-[7px] px-2 sm:px-[8px] flex items-center border gap-1 sm:gap-2 border-[#12283E] backdrop-blur-[34px] w-full lg:w-auto justify-center lg:justify-start">
              <Button
                variant="ghost"
                onClick={() => handleTabChange("mining")}
                className={`rounded-full px-2 sm:px-4 py-2 sm:py-3 h-8 lg:h-10 2xl:h-[50px] transition-all font-medium text-[9px] lg:text-[9px] xl:text-sm 2xl:text-base duration-200 ${selectedTab === "mining"
                  ? "text-white shadow-lg border border-slate-600 hover:text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/30 border border-transparent"
                  }`}
                style={selectedTab === "mining" ? {
                  background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
                } : {}}
              >
                <img
                  src="/images/Dashboard.png"
                  alt="Dashboard"
                  className={`w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 mr-1 transition-all duration-300 ${selectedTab === "mining"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                    }`}
                  style={selectedTab === "mining" ? {} : { width: 0, marginRight: 0 }}
                />
                <span className="hidden sm:inline">Mining Dashboard</span>
                <span className="sm:hidden">Mining</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleTabChange("buy")}
                className={`rounded-full px-2 sm:px-4 py-2 sm:py-3 h-8 lg:h-10 2xl:h-[50px] transition-all font-medium text-[9px] lg:text-[9px] xl:text-sm 2xl:text-base duration-200 ${selectedTab === "buy"
                  ? "text-white shadow-lg border border-slate-600 hover:text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/30 border border-transparent"
                  }`}
                style={selectedTab === "buy" ? {
                  background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
                } : {}}
              >
                <img
                  src="/images/shopping-cart.png"
                  alt="shopping-cart"
                  className={`w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 mr-1 transition-all duration-300 ${selectedTab === "buy"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                    }`}
                  style={selectedTab === "buy" ? {} : { width: 0, marginRight: 0 }}
                />
                Buy
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleTabChange("transactions")}
                className={`rounded-full px-2 sm:px-4 py-2 sm:py-3 h-8 lg:h-10 2xl:h-[50px] transition-all font-medium text-[9px] lg:text-[9px] xl:text-sm 2xl:text-base duration-200 ${selectedTab === "transactions"
                  ? "text-white shadow-lg border border-slate-600 hover:text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/30 border border-transparent"
                  }`}
                style={selectedTab === "transactions" ? {
                  background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
                } : {}}
              >
                <img
                  src="/images/wallet.png"
                  alt="Transactions"
                  className={`w-4 h-4 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 mr-1 transition-all duration-300 ${selectedTab === "transactions"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75"
                    }`}
                  style={selectedTab === "transactions" ? {} : { width: 0, marginRight: 0 }}
                />
                <span className="hidden sm:inline">Transactions</span>
                <span className="sm:hidden">Txns</span>
              </Button>
            </div>

            {/* Right Section - Currency and Wallet */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 sm:gap-4">
                <h1 className="font-normal text-[7px] lg:text-[8px] xl:text-sm 2xl:text-sm text-white hidden sm:block">
                  Currency
                </h1>
                <Select defaultValue="usd">
                  <SelectTrigger className="w-20 lg:w-28 2xl:w-[142px] h-8 lg:h-9 2xl:h-[64px] bg-[#1F375166] border-slate-600 text-white rounded-full p-2 lg:px-4 lg:py-6 2xl:p-6">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F375166] border-[#12283E] text-white text-[8px] lg:text-[8px] xl:text-sm 2xl:text-sm font-normal backdrop-blur-[34px]">
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center h-8 lg:h-[50px] 2xl:h-[64px] w-full lg:w-48 2xl:w-[237px] bg-[#1F375166] rounded-full p-1 2xl:p-2 pr-2 sm:pr-4 gap-1 sm:gap-2">
                <div className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-[48px] 2xl:h-[48px] min-w-6 lg:min-w-8 2xl:min-w-[48px] bg-[#1F3751CC] rounded-full flex items-center justify-center">
                  <Image src="/images/SHIB.png" alt="user" width={32} height={32} className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8" />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm text-ellipsis overflow-hidden whitespace-nowrap">bc17S92VF27rkFd8dff783bbsss844</span>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar Content */}
          <div className="lg:hidden flex flex-col space-y-6">
            {/* Close Button */}
            <div className="flex justify-between items-center">
            <div className="w-8 h-8  lg:w-9 lg:h-9 2xl:w-10 2xl:h-10 3xl:w-10 3xl:h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/images/mainLogo.png" alt="logo" className="w-full h-full object-cover object-center" width={50} height={50} />
            </div>
              <Button
                variant="ghost"
                onClick={() => setIsSidebarOpen(false)}
                className="text-white hover:bg-slate-600/30 p-2"
              >
                <X size={24} />
              </Button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-col space-y-4">
              <Button
                variant="ghost"
                onClick={() => handleTabChange("mining")}
                className={`w-full justify-start px-4 py-3 h-12 transition-all font-medium text-base duration-200 ${selectedTab === "mining"
                  ? "text-white shadow-lg border border-slate-600 hover:text-white bg-slate-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/30 border border-transparent"
                  }`}
                style={selectedTab === "mining" ? {
                  background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
                } : {}}
              >
                <img
                  src="/images/Dashboard.png"
                  alt="Dashboard"
                  className="w-6 h-6 mr-3"
                />
                Mining Dashboard
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleTabChange("buy")}
                className={`w-full justify-start px-4 py-3 h-12 transition-all font-medium text-base duration-200 ${selectedTab === "buy"
                  ? "text-white shadow-lg border border-slate-600 hover:text-white bg-slate-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/30 border border-transparent"
                  }`}
                style={selectedTab === "buy" ? {
                  background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
                } : {}}
              >
                <img
                  src="/images/shopping-cart.png"
                  alt="shopping-cart"
                  className="w-6 h-6 mr-3"
                />
                Buy
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleTabChange("transactions")}
                className={`w-full justify-start px-4 py-3 h-12 transition-all font-medium text-base duration-200 ${selectedTab === "transactions"
                  ? "text-white shadow-lg border border-slate-600 hover:text-white bg-slate-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-600/30 border border-transparent"
                  }`}
                style={selectedTab === "transactions" ? {
                  background: "linear-gradient(96.8deg, rgba(14, 26, 41, 0.5) 15.4%, rgba(82, 149, 139, 0.5) 87.93%)"
                } : {}}
              >
                <img
                  src="/images/wallet.png"
                  alt="Transactions"
                  className="w-6 h-6 mr-3"
                />
                Transactions
              </Button>
            </div>

            {/* Currency and Wallet Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="font-normal text-sm text-white">
                  Currency
                </h1>
                <Select defaultValue="usd">
                  <SelectTrigger className="w-24 h-10 bg-[#1F375166] border-slate-600 text-white rounded-full p-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1F375166] border-[#12283E] text-white text-sm font-normal backdrop-blur-[34px]">
                    <SelectItem value="usd">USD</SelectItem>
                    <SelectItem value="eur">EUR</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center h-12 w-full bg-[#1F375166] rounded-full p-2 pr-4 gap-2">
                <div className="w-8 h-8 min-w-8 bg-[#1F3751CC] rounded-full flex items-center justify-center">
                  <Image src="/images/SHIB.png" alt="user" width={32} height={32} className="w-6 h-6" />
                </div>
                <span className="text-slate-300 text-sm text-ellipsis overflow-hidden whitespace-nowrap">bc17S92VF27rkFd8dff783bbsss844</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
