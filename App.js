import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShow from './src/screens/ResultsShow';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShow
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Business Search"
  }
});

export default createAppContainer(navigator);

//Client ID
// xZHMjSWxqmQxGbGqis4dqQ

// API Key
// YeiMZoE8kqu0QuDmdqK-uD8LRV82soHhuBoxaOFv8uueGpYQP0BDdhP4CqMzxGJYEyfQkgnD7ekX2ZSpUKoL0h1Ehiod2m0p8440EZWEW8pmu3_-46A-6KWQClJ9YHYx


