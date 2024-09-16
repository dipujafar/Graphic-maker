import React from 'react';
import EarningStatistic from './EarningStatistic';
import RecentTransactionsTable from './RecentTransactionsTable';

const EarningContainer = () => {
    return (
        <div>
            <EarningStatistic></EarningStatistic>
            <div className='mt-10'>
                <RecentTransactionsTable></RecentTransactionsTable>
            </div>
        </div>
    );
};

export default EarningContainer;