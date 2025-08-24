"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { Calendar } from "lucide-react"
import { Badge } from "./ui/badge"

const chartData = [
  { month: "Jan", clients: 36, subscribers: 25, newCustomers: 20 },
  { month: "Feb", clients: 72, subscribers: 42, newCustomers: 18 },
  { month: "Mar", clients: 90, subscribers: 38, newCustomers: 25 },
  { month: "Apr", clients: 68, subscribers: 30, newCustomers: 22 },
  { month: "May", clients: 28, subscribers: 20, newCustomers: 15 },
  { month: "Jun", clients: 60, subscribers: 40, newCustomers: 18 },
  { month: "Jul", clients: 16, subscribers: 12, newCustomers: 10 },
  { month: "Aug", clients: 92, subscribers: 48, newCustomers: 28 },
  { month: "Sep", clients: 36, subscribers: 22, newCustomers: 15 },
  { month: "Oct", clients: 48, subscribers: 28, newCustomers: 20 },
  { month: "Nov", clients: 42, subscribers: 26, newCustomers: 18 },
  { month: "Dec", clients: 54, subscribers: 32, newCustomers: 24 },
]

const chartConfig = {
  clients: {
    label: "Current clients",
    color: "#CB3CFF",
  },
  subscribers: {
    label: "Subscribers",
    color: "#375DFB",
  },
  newCustomers: {
    label: "New customers",
    color: "#00C2FF",
  },
}

export default function RevenueChart() {
  return (
    <Card className="flex flex-col bg-[#0B1739] text-white border-none shadow-lg rounded-2xl">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg font-medium text-white/80">
            Revenue by customer type
          </CardTitle>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold">$240.8K</span>
            <Badge className="bg-green-500/15 text-green-400 text-xs rounded-md px-2 py-0.5">
              14.8% ↑
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#081028] px-3 py-2 rounded-lg text-sm text-white/70 cursor-pointer">
          <Calendar className="w-4 h-4" />
          Jan 2024 - Dec 2024
        </div>
      </CardHeader>

      {/* Legend */}
      <div className="flex gap-6 px-6 pb-2 text-sm">
        {Object.entries(chartConfig).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: value.color }}
            />
            <span className="text-white/70">{value.label}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <CardContent className="px-6">
        <ChartContainer config={chartConfig} className="w-full h-[320px]">
          <BarChart data={chartData} barCategoryGap="25%" barSize={14}>
            <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "white", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "white", fontSize: 12 }}
              tickFormatter={(value) => `${value}K`}
            />
            <ChartTooltip
  cursor={false}
  content={
    <ChartTooltipContent
      className="bg-white border-none shadow-none text-black"
    />
  }
/>

            <Bar dataKey="clients" fill={chartConfig.clients.color} radius={6}  />
            {/* <Bar dataKey="subscribers" fill={chartConfig.subscribers.color} radius={6} /> */}
            {/* <Bar dataKey="newCustomers" fill={chartConfig.newCustomers.color} radius={6} /> */}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
