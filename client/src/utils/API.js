import axios from 'axios';

export default {
    getFantasyProsADPs: function(){
        return axios.get('/api/getFFPADPs');
    },

    getRedditPosts: function(){
        return axios.get('/api/getRticles')
    }
}