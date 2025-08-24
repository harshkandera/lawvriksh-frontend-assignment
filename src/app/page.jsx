// Main Dashboard Component that uses the layout
import  WebsiteVisitors from '../components/Visiter';
import Revenue from '../components/Revenue';
import Analytic from '../components/Analytic';

const Dashboard = () => {
  return (
    <div>
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

        {/* Placeholder for WebsiteVisitors component */}
        
           <WebsiteVisitors/>

       

        {/* Placeholder for Revenue component */}
          <Revenue />
      
       
      </div>


      {/* Bottom Row */}
      <Analytic />
    </div>

  );
};

export default Dashboard;