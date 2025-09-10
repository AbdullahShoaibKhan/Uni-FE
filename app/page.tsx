import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { PurchaseForm } from "@/components/purchase-form"
import { InsightsPanel } from "@/components/insights-panel"
import { EfficiencyPanel } from "@/components/efficiency-panel"
import { MiningPoolChart } from "@/components/mining-pool-chart"
import { RecentPayouts } from "@/components/recent-payouts"

export default function DashboardPage() {
  return (

    <div className="min-h-screen bg-slate-900 text-white" style={{ backgroundImage: 'url("/images/bg-image.jpeg")', backgroundSize: 'cover' }}>
      <div className="flex flex-col mx-auto max-w-7xl">
        <DashboardHeader />

        <main className="container px-2 py-8 space-y-8">
          {/* Stats Cards Grid */}
          <StatsCards />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2" >
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
            {/* Insights Panel - 2 columns */}

          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MiningPoolChart />
            <RecentPayouts />
          </div>
        </main>
      </div>
    </div>
  )
}
