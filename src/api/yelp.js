import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer YeiMZoE8kqu0QuDmdqK-uD8LRV82soHhuBoxaOFv8uueGpYQP0BDdhP4CqMzxGJYEyfQkgnD7ekX2ZSpUKoL0h1Ehiod2m0p8440EZWEW8pmu3_-46A-6KWQClJ9YHYx" 
    }
});

