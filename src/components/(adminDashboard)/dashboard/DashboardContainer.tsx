"use client"
import Statistic from './Statistic';
import LatestUser from './LatestUser';
import { useDashboardDataQuery } from '@/redux/api/userApi';

const DashboardContainer = () => {
    const {data, isLoading} = useDashboardDataQuery(undefined);
    return (
        <div>
            <Statistic totalEarnings={data?.data?.totalEarnings}></Statistic>
            <div className="mt-10">
            <LatestUser totalUsers={data?.data?.totalUsers} isLoading={isLoading}
            ></LatestUser>
            </div>
        </div>
    );
};

export default DashboardContainer;