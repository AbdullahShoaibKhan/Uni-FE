import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PurchaseForm() {
  const paymentMethods = [
    { id: "usdt", name: "USDT", icon: "₮", selected: true },
    { id: "eth", name: "ETH", icon: "Ξ", selected: false },
    { id: "btc", name: "BTC", icon: "₿", selected: false },
    { id: "doge", name: "DOGE", icon: "Ð", selected: false },
    { id: "ltc", name: "LTC", icon: "Ł", selected: false },
  ]

  return (
    <Card
      className="
        relative 
        p-6 
        h-[423px] 
        rounded-[12px] 
        border 
        backdrop-blur-[94px] 
        shadow-[0px_4px_10px_0px_rgba(5,11,32,0.36),2px_4px_14px_0px_rgba(0,255,221,0.6)_inset]
      "
      style={{
        background:
          "linear-gradient(282.85deg, rgba(31, 55, 81, 0.1) 24.9%, rgba(85, 255, 241, 0.1) 95.47%)",
        borderImageSource:
          "linear-gradient(207.74deg, rgba(48, 139, 164, 0.6) 16.89%, rgba(0, 7, 15, 0) 85.16%)",
        borderImageSlice: 1,
      }}
    >
      <div className="space-y-6">
        {/* Minimum Buy Amount */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="text-white font-medium">Minimum Buy Amount</label>
            <Select defaultValue="usdt">
              <SelectTrigger className="w-24 bg-slate-700 border-slate-600 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="usdt" style={{backgroundColor:'#0A2636'}}>USDT</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="number"
            defaultValue="1000"
            className="bg-slate-700 border-slate-600 text-white text-lg font-semibold h-12"
          />
        </div>

        {/* Payment Method Selection */}
        <div>
          <label className="text-white font-medium mb-4 block">Select Payment Method</label>
          <div className="grid grid-cols-5 gap-2">
            {paymentMethods.map((method) => (
              <Button
                key={method.id}
                variant={method.selected ? "default" : "outline"}
                className={`h-16 flex flex-col items-center justify-center space-y-1 ${
                  method.selected
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-400"
                    : "bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600"
                }`}
              >
                <span className="text-lg font-bold">{method.icon}</span>
                <span className="text-xs">{method.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Buy Button */}
        <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold h-12 text-lg">
          Buy UNIL
        </Button>
      </div>
    </Card>
  )
}
