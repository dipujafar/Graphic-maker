"use client"
import React from 'react';
import EarningStatistic from './EarningStatistic';
import RecentTransactionsTable from './RecentTransactionsTable';
import { useEarningsQuery } from '@/redux/api/userApi';

const EarningContainer = () => {
    const {data: allEaring, isLoading} = useEarningsQuery(undefined);
    console.log(allEaring);
    
    return (
        <div>
            <EarningStatistic todayEarnings={allEaring?.data?.todayEarnings} totalEarnings={allEaring?.data?.totalEarnings}></EarningStatistic>
            <div className='mt-10'>
                <RecentTransactionsTable allTransitions={allEaring?.data?.allTransitions} isLoading={isLoading}></RecentTransactionsTable>
            </div>
        </div>
    );
};

export default EarningContainer;