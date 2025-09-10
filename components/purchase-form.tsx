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
        <div className="w-6 h-6 bg-cyan-500 rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-sm">T</span>
        </div>
      )
    },
    { 
      id: "eth", 
      name: "ETH", 
      icon: (
        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">Ξ</span>
        </div>
      )
    },
    { 
      id: "btc", 
      name: "BTC", 
      icon: (
        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">₿</span>
        </div>
      )
    },
    { 
      id: "doge", 
      name: "DOGE", 
      icon: (
        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">Ð</span>
        </div>
      )
    },
    { 
      id: "ltc", 
      name: "LTC", 
      icon: (
        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">Ł</span>
        </div>
      )
    },
  ]

  return (
    <Card
      className="
        relative 
        p-6 h-full
        rounded-[12px] 
        border 
        border-[#308BA499]
        backdrop-blur-[94px] 
      "
      style={{
        background: 'linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 255, 241, 0.1) 95.47%)'
      }}
    >
      <div className="">
        {/* Minimum Buy Amount */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-white font-semibold text-[20px]">Minimum Buy Amount</label>
            <Select defaultValue="usdt">
              <SelectTrigger className="w-24 bg-[#0A2636] border-[#0A2636] text-white test-sm font-normal">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#0A2636] border-[#0A2636] text-white text-sm font-normal">
                <SelectItem value="usdt">USDT</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="number"
            defaultValue="1000"
            className="bg-[#D9F6FA0D] border-[#2D4A57] text-white text-[20px] font-normal h-12 mt-[16px]"
          />
        </div>

        {/* Payment Method Selection */}
        <div className="mt-[20px]">
          <label className="text-white font-semibold text-[20px]">Select Payment Method</label>
          <div className="grid grid-cols-5 gap-2 mt-3">
            {paymentMethods.map((method) => (
              <Button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                variant="outline"
                className={`p-5 h-[64px] flex items-center justify-center gap-1 rounded-lg transition-all duration-200 ${
                  selectedMethod === method.id
                    ? "bg-[#D9F6FA33] border-[#D9F6FA33] text-white"
                    : "bg-transparent hover:bg-slate-600/40 text-white border-[#2D4A57] hover:border-[#2D4A57]"
                }`}
              >
                {method.icon}
                <span className="text-base font-medium text-white">{method.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Buy Button */}
        <Button className="w-full h-[58px] bg-gradient-to-r from-[#0FEDBE] to-[#2DD9FF] hover:from-emerald-500 hover:to-cyan-500 text-black font-medium text-[15px] py-5 rounded-[7px] mt-6">
          Buy UNIL
        </Button>
      </div>
    </Card>
  )
}
