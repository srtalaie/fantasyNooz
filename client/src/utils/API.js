import axios from 'axios';

export default {
    getFantasyProsADPs: function(){
        return axios.get('/api/getFFPADPs');
    },

    getRedditPosts: function(){
        return axios.get('/api/getRticles')
    },

    getRBStats: function(year){
        return axios.get(`/api/rbStats/${year}`)
    },

    getWRStats: function(year){
        return axios.get(`/api/wrStats/${year}`)
    },

    getTEStats: function(year){
        return axios.get(`/api/teStats/${year}`)
    },

    getQBStats: function(year){
        return axios.get(`/api/qbStats/${year}`)
    },

    getKStats: function(year){
        return axios.get(`/api/kStats/${year}`)
    },

    getDSTStats: function(year){
        return axios.get(`/api/dstStats/${year}`)
    },

    getFlexStats: function(year){
        return axios.get(`/api/flexStats/${year}`)
    }
}