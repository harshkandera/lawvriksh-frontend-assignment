"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"



const products = [
  { name: "iPhone 14 Pro Max", stock: 524, price: 1099 },
  { name: "Apple Watch S8", stock: 320, price: 799 },
]

const team = [
  { name: "John Carter", email: "contact@sophiemoon.com", progress: 60, color: "bg-pink-500" },
  { name: "Sophie Moore", email: "contact@sophiemoon.com", progress: 33, color: "bg-purple-500" },
  { name: "Matt Cannon", email: "info@mattcannon.com", progress: 75, color: "bg-indigo-500" },
]

const websiteVisitors = [
  { name: "Sell", value: 400, color: "#a855f7" },
  { name: "Distribute", value: 300, color: "#3b82f6" },
  { name: "Return", value: 200, color: "#22d3ee" },
]

const chartConfig = {
  Sell: { label: "Sell", color: "#a855f7" },
  Distribute: { label: "Distribute", color: "#3b82f6" },
  Return: { label: "Return", color: "#22d3ee" },
}

export default function Dashboard() {
  const total = websiteVisitors.reduce((acc, cur) => acc + cur.value, 0)
  const percentage = Math.round((total * 80) / 100)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-white">
      
      {/* Products */}
      <Card className="bg-[#0B1739] border-none rounded-2xl text-white shadow-lg">
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {products.map((p, i) => (
            <div key={i} className="flex  justify-between items-center">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-gray-400">{p.stock} in stock</p>
              </div>
              <p>${p.price.toLocaleString()}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Team Progress */}
      <Card className="bg-[#0B1739] border-none rounded-2xl text-white shadow-lg">
        <CardHeader>
          <CardTitle>Team progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {team.map((member, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${member.color}`} />
                <div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-400">{member.email}</p>
                </div>
              </div>
              <p>{member.progress}%</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Website Visitors */}
      <Card className="bg-[#0B1739] border-none rounded-2xl text-white shadow-lg text-white">

        <CardHeader className="items-center pb-0">
          <CardTitle>Website Visitors</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 items-center pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[280px]"
          >
            <RadialBarChart
              data={websiteVisitors}
              startAngle={180}
              endAngle={0}
              innerRadius={90}
              outerRadius={130}
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 12}
                            className="fill-white text-3xl font-bold"
                          >
                            {percentage}%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 12}
                            className="fill-gray-400 text-sm"
                          >
                            Transactions
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>

              {websiteVisitors.map((item, i) => (
                <RadialBar
                  key={i}
                  dataKey="value"
                  data={[item]}
                  cornerRadius={5}
                  fill={item.color}
                  className="stroke-transparent stroke-2"
                />
              ))}
            </RadialBarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex justify-center ">
          <div className="flex gap-6 text-sm">
            {websiteVisitors.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </CardFooter>

      </Card>

    </div>
  )
}
