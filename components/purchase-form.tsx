import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function PurchaseForm() {
  const [selectedMethod, setSelectedMethod] = useState("usdt")

  const paymentMethods = [
    {
      id: "usdt",
      name: "USDT",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/USDT.png" alt="USDT" className="w-full h-full object-cover object-center" />
        </div>
      )
    },
    {
      id: "eth",
      name: "ETH",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/ETH.png" alt="ETH" className="w-full h-full object-cover object-center" />
        </div>
      )
    },
    {
      id: "btc",
      name: "BTC",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/BTC.png" alt="BTC" className="w-full h-full object-cover object-center" />
        </div>
      )
    },
    {
      id: "doge",
      name: "DOGE",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/DOGE.png" alt="DOGE" className="w-full h-full object-cover object-center" />
        </div>
      )
    },
    {
      id: "ltc",
      name: "LTC",
      icon: (
        <div className="w-6 h-6 ">
          <img src="/images/LTC.png" alt="LTC" className="w-full h-full object-cover object-center" />
        </div>
      )
    },
  ]

  return (
    <Card
      className="
        relative 
        p-4 sm:p-6 h-full
        rounded-[12px] 
        border-none
        backdrop-blur-[94px] 
      "
      style={{
        background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 255, 241, 0.1) 95.47%)'
      }}
    >
      <div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{
          background: 'linear-gradient(155.32deg, rgba(48, 139, 164, 0.6) 3.41%, rgba(0, 7, 15, 0) 75.52%)',
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
        }}
      />
      <div className="">
        {/* Minimum Buy Amount */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2 sm:gap-0">
            <label className="text-white font-semibold text-base sm:text-lg lg:text-[20px]">Minimum Buy Amount</label>
            <Select defaultValue="usdt">
              <SelectTrigger className="bg-[#0A2636] border-[#0A2636] text-white text-sm font-normal w-full sm:w-[135px] h-10 sm:h-[49px] rounded-[8px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0A2636] border-[#0A2636] text-white text-sm font-normal rounded-[8px]">
                <SelectItem value="usdt">USDT</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="number"
            placeholder="1000"
            className="bg-[#D9F6FA0D] border-[#2D4A57] text-white text-base sm:text-lg lg:!text-[20px] font-normal h-12 sm:h-16 lg:h-[83px] mt-2 sm:mt-[16px]"
          />
        </div>

        {/* Payment Method Selection */}
        <div className="mt-4 sm:mt-[20px]">
          <label className="text-white font-semibold text-base sm:text-lg lg:text-[20px]">Select Payment Method</label>
          <div className="flex p-1 w-full mt-3 bg-[#D9F6FA0D] rounded-lg">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 w-full">
              {paymentMethods.map((method) => (
                <Button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  variant="outline"
                  className={`p-2 sm:p-3 lg:p-5 h-12 sm:h-14 lg:h-[64px] flex items-center justify-center gap-1 rounded-lg transition-all duration-200 ${selectedMethod === method.id
                    ? "bg-[#D9F6FA33] border-2 border-[#D9F6FA33] text-white hover:bg-[#D9F6FA33]"
                    : "bg-transparent border-2 hover:bg-[#D9F6FA33] text-white border-[#2D4A57] hover:border-[#2D4A57]"
                    }`}
                >
                  {method.icon}
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-white">{method.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Buy Button */}
        <Button className="w-full h-12 sm:h-14 lg:h-[58px] bg-gradient-to-r from-[#0FEDBE] to-[#2DD9FF] hover:from-emerald-500 hover:to-cyan-500 text-black font-medium text-sm sm:text-base lg:text-[15px] py-3 sm:py-4 lg:py-5 rounded-[7px] mt-4 sm:mt-6">
          Buy UNIL
        </Button>
      </div>
    </Card>
  )
}
