import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import SmallWidget from "../../components/smallWidget/SmallWidget";
import LargeWidget from "../../components/largeWidget/LargeWidget";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
}
