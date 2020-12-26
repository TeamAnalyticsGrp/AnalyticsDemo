
import * as React from 'react';

import { filterBy } from '@progress/kendo-data-query';

import { Grid, Column, ColumnMenu } from './../components/Grid';

import { FullNameCell, FlagCell, OnlineCell, RatingCell, EngagementCell, CurrencyCell } from './../components/GridCells';


import { employees } from './../resources/employees';
import { teams } from './../resources/teams';
import { orders } from './../resources/orders';
import NavigationBar from './../components/NavigationBar';
import Footer from './../components/Footer';

const Home = () => {
    const [data, setData] = React.useState(employees);

    return (
        
        <>
        <NavigationBar></NavigationBar>        
            <div className="card-container grid">                    
                <div className="card-component">
                    <Grid data={filterBy(data)} style={{ height: 450 }} onDataChange={data => setData(data)}>
                        <Column title={'Employee'} groupable={false}>
                            <Column field={'fullName'} title={'Contact Name'} columnMenu={ColumnMenu} width={230} cell={FullNameCell} />
                            <Column field={'jobTitle'} title={'Job Title'} columnMenu={ColumnMenu} width={230} />
                            <Column field={'country'} title={'Country'} columnMenu={ColumnMenu} width={100} cell={FlagCell} />
                            <Column field={'isOnline'} title={'Status'} columnMenu={ColumnMenu} width={100} cell={OnlineCell} filter={'boolean'} />
                        </Column>
                        
                        <Column title={'Contacts'} groupable={false}>
                            <Column field={'phone'} title={'Phone'} columnMenu={ColumnMenu} width={130} />
                            <Column field={'address'} title={'Address'} columnMenu={ColumnMenu} width={200} />
                        </Column>
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default Home;

