import { AppAreaGradient } from "@/components/AppAreaChart";
import { AppBarChart } from "@/components/AppBarChart";
import { AppChartPie } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 px-4 ">
      <div className="bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2 rounded">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded">
        <CardList title="Latest Transactions"></CardList>
      </div>
      <div className="bg-primary-foreground p-4 rounded">
        <AppChartPie />
      </div>
      <div className="bg-primary-foreground p-4 rounded">
        <TodoList></TodoList>
      </div>
      <div className="bg-primary-foreground p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2 rounded">
        <AppAreaGradient />
      </div>
      <div className="bg-primary-foreground p-4 rounded">
        <CardList title="Popular Content"></CardList>
      </div>
    </div>
  );
}
