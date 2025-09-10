import { Card } from "@/components/ui/card"

export function InsightsPanel() {
  return (
    <Card
      className="
        relative 
        p-6 
         h-[423px] 
        rounded-[12px] 
        border 
        overflow-hidden 
        backdrop-blur-[94px]
        shadow-[0px_4px_10px_0px_rgba(5,11,32,0.36),2px_4px_14px_0px_rgba(0,255,221,0.6)_inset]
      "
      style={{
        backgroundImage: 'url("/images/tester.jpeg")',

        background:
          "linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 255, 241, 0.1) 95.47%)",
        borderImageSource:
          "linear-gradient(207.74deg, rgba(48, 139, 164, 0.6) 16.89%, rgba(0, 7, 15, 0) 85.16%)",
        borderImageSlice: 1,
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5" />

      {/* AI Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-16 h-16 border border-cyan-400/30 rounded-lg flex items-center justify-center">
          <span className="text-cyan-400 font-bold text-lg">AI</span>
        </div>
        <div className="absolute bottom-4 left-4 text-cyan-400/20 text-xs">AI Chatbot</div>
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-semibold text-lg mb-6">AI Insights</h3>

        <div className="space-y-6">
          {/* Projection */}
          <div>
            <p className="text-slate-400 text-sm mb-2">
              Projection Next 30 Days Rewards
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">$12,450</span>
              <div className="flex items-center space-x-1 text-red-400">
                <span className="text-sm">↓</span>
                <span className="text-sm">(-6%)</span>
              </div>
            </div>
          </div>

          {/* Efficiency Gain */}
          <div>
            <p className="text-slate-400 text-sm mb-2">Efficiency Gain</p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-400">+4%</span>
              <span className="text-green-400 text-sm">↑</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}