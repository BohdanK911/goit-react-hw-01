import React from 'react';
import style from './App.module.css';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import planData from '../../mock/pricing-plan.json';
import transactions from '../../mock/transactions.json';

const user = {
  name: 'Timothy Grant',
  tag: '@tgrant',
  location: 'Sao Paulo, Brazil',
  avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940',
  stats: {
    followers: 198,
    views: 3685,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <div className={style.App}>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={planData} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;