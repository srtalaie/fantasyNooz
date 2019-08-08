import axios from 'axios';

export default {
    getFantasyProsADPs: function(){
        return axios.get('/api/getFFPADPs');
    },

    getRedditPosts: function(){
        return axios.get('/api/getRticles')
    },

    getRBStats: function(year){
        return axios.get(`/rbStats/${year}`)
    },

    getWRStats: function(year){
        return axios.get(`/wrStats/${year}`)
    },

    getTEStats: function(year){
        return axios.get(`/teStats/${year}`)
    },

    getQBStats: function(year){
        return axios.get(`/qbStats/${year}`)
    },

    getKStats: function(year){
        return axios.get(`/kStats/${year}`)
    },

    getDSTStats: function(year){
        return axios.get(`/dstStats/${year}`)
    }
}