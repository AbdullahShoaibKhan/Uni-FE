"use client"
import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { BuyTab } from "@/components/buy-tab"
import { TransactionsTab } from "@/components/transactions-tab"

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("buy")

  const renderTabContent = () => {
    switch (selectedTab) {
      case "buy":
        return <BuyTab />
      case "transactions":
        return <TransactionsTab />
      case "mining":
        return <BuyTab /> // For now, mining shows the same as buy
      default:
        return <BuyTab />
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ backgroundImage: 'url("/images/bg-image.jpeg")', backgroundSize: 'cover' }}>
      <div className="flex flex-col mx-auto max-w-[1900px] w-full px-[50px]">
        <DashboardHeader selectedTab={selectedTab} onTabChange={setSelectedTab} />
        {renderTabContent()}
      </div>
    </div>
  )
}
