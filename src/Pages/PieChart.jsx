import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const PieChart = () => {
  const [selectedDonations, setSelectedDonations] = useState([]);
  const totalDonations = 12; 

  useEffect(() => {
    const storedSelectedDonations = JSON.parse(localStorage.getItem("selectedCardIds")) || [];
    setSelectedDonations(storedSelectedDonations)
    // const calculatedPercentage = ((storedSelectedDonations.length / totalDonations) * 100).toFixed(2);
  }, []);

  const data = [
    ["Task", "Percentage"],
    ["Your Donation", selectedDonations.length],
    ["Total Donation", totalDonations - selectedDonations.length],
  ]; 

  const options = {

  };

  return (
    <div>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      />
    </div>
  );
};

export default PieChart;
