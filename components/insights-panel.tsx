import { Card } from "@/components/ui/card"

export function InsightsPanel() {
  return (
    <Card
      className="
        relative 
        px-4 lg:px-5 2xl:px-6 py-4 lg:py-6 2xl:py-[30px] h-full
        rounded-[10px] 2xl:rounded-[12px] 
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
        className="absolute inset-0 rounded-[10px] 2xl:rounded-[12px]"
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
        <h3 className="text-white font-semibold text-base lg:text-base xl:text-xl 2xl:text-[20px] mb-4 md:mb-6 lg:mb-[28px] 2xl:mb-[32px]">AI Insights</h3>

        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
          {/* Projection */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-white font-normal text-xs lg:text-xs xl:text-sm 2xl:text-base">
              Projection Next 30 Days Rewards
            </p>
            <div className="flex items-center gap-2 text-[#0FEDBE] text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-normal">
              <span className="">$12,450</span>
              <span>(-6%)</span>
            </div>
          </div>

          {/* Efficiency Gain */}
          <div>
            <p className="text-white font-normal text-sm lg:text-xs xl:text-sm 2xl:text-base">Efficiency Gain</p>
            <div className="flex items-center gap-2 text-[#0FEDBE] text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-normal">
              <span>+4%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}