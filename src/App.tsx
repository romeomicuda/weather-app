import { Forecast } from "./pages/Forecast";
import { HeatIndexCalculator } from "./pages/Heat-index-calculator";
import { LineChart } from "./pages/Line-chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="forecast" element={<Forecast />}/>
          <Route path="heat-index-calculator" element={<HeatIndexCalculator />} />
          <Route path="line-chart" element={<LineChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
