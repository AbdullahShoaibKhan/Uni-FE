import { StatsCards } from "@/components/stats-cards"
import { PurchaseForm } from "@/components/purchase-form"
import { InsightsPanel } from "@/components/insights-panel"
import { EfficiencyPanel } from "@/components/efficiency-panel"
import { MiningPoolChart } from "@/components/mining-pool-chart"
import { RecentPayouts } from "@/components/recent-payouts"

export function BuyTab() {
  // Dynamic values for the stats cards
  const statsData = {
    currentFundPrice: "$1.00",
    youWillReceive: "1000 Share",
    yourBalance: "$8,560",
    rewardsRate: "12.5% APY"
  }

  return (
    <main className=" py-8 flex flex-col gap-3 w-full">
      {/* Stats Cards Grid */}
      <StatsCards {...statsData} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        {/* Purchase Form - 7 columns */}
        <div className="lg:col-span-7">
          <PurchaseForm />
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="lg:col-span-1">
            <InsightsPanel />
          </div>

          {/* Efficiency Panel - 2 columns */}
          <div className="lg:col-span-1">
            <EfficiencyPanel />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MiningPoolChart />
        <RecentPayouts />
      </div>
    </main>
  )
}
