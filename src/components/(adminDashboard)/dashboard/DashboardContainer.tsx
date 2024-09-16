import Statistic from './Statistic';
import LatestUser from './LatestUser';

const DashboardContainer = () => {
    return (
        <div>
            <Statistic></Statistic>
            <div className="mt-10">
            <LatestUser></LatestUser>
            </div>
        </div>
    );
};

export default DashboardContainer;