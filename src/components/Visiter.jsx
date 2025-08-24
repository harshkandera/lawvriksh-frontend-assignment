"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"
import { Download } from "lucide-react"
import { Button } from "./ui/button"
import img from '../../public/image.png'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"

export const description = "A radial chart"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#0E43FB" },
  { browser: "safari", visitors: 200, fill: "#00C2FF" },
  { browser: "firefox", visitors: 187, fill: "#CB3CFF" },

]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#0E43FB",
  },
  safari: {
    label: "Safari",
    color: "#00C2FF",
  },
  firefox: {
    label: "Firefox",
    color: "#CB3CFF",
  },

};

  const totalVisitors = 150000


export default function ChartRadialSimple() {
  return (
    <Card className="flex flex-col bg-[#0B1739] text-white border-none">
        
      <CardHeader className="items-center pb-0 flex items-center justify-between">
        <CardTitle >Website Visitors</CardTitle>
         <Button
          size="sm"
          className="text-xs text-white bg-[#081028] hover:bg-[#081028]/80 cursor-pointer"
        >
          Export <Download className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 relative ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[280px]"
        >
          <RadialBarChart           
            data={chartData}
            innerRadius={60}
            outerRadius={100}
            barSize={8}
            startAngle={180}
            endAngle={-180}
              barCategoryGap={0}
              barGap={0}
 >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" cornerRadius={5} />
          </RadialBarChart>
        </ChartContainer>

         <div className="absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
          {totalVisitors.toLocaleString("en-US", { notation: "compact" })}
        </div>

      </CardContent>
         <CardFooter className="flex flex-col gap-3 text-sm mt-4">
        {chartData.map((item) => (
          <div key={item.fill} className="flex justify-between w-full">
            <span className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              >
                
                </div>
              {item.browser}
            </span>
            <span>{item.visitors}%</span>
          </div>
        ))}
      </CardFooter>

    </Card>
  )
}
