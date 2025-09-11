import { Card } from "@/components/ui/card"

export function InsightsPanel() {
  return (
    <Card
      className="
        relative 
        px-4 sm:px-6 py-4 sm:py-6 lg:py-[30px] h-full
        rounded-[12px] 
        border-none
        bg-transparent
        overflow-hidden 
        backdrop-blur-[94px]
      "
      style={{
        backgroundImage: 'url(/images/AI.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 rounded-[12px]"
        style={{
          background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      />
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-base sm:text-lg lg:text-[20px] mb-4 sm:mb-6 lg:mb-[32px]">AI Insights</h3>

        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Projection */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-white font-normal text-sm sm:text-base">
              Projection Next 30 Days Rewards
            </p>
            <div className="flex items-center gap-2 text-[#0FEDBE] text-lg sm:text-xl lg:text-2xl font-normal">
              <span className="">$12,450</span>
              <span>(-6%)</span>
            </div>
          </div>

          {/* Efficiency Gain */}
          <div>
            <p className="text-white font-normal text-sm sm:text-base">Efficiency Gain</p>
            <div className="flex items-center gap-2 text-[#0FEDBE] text-lg sm:text-xl lg:text-2xl font-normal">
              <span>+4%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}