import axios from 'axios';

export default {
    getFantasyProsADPs: function(){
        return axios.get('/api/getFFPADPs');
    },

    getRedditPosts: function(){
        return axios.get('/api/getRticles')
    },

    getRBStats: function(year, week){
        return axios.get(`/api/rbStats/${year}/${week}`)
    },

    getWRStats: function(year, week){
        return axios.get(`/api/wrStats/${year}/${week}`)
    },

    getTEStats: function(year, week){
        return axios.get(`/api/teStats/${year}/${week}`)
    },

    getQBStats: function(year, week){
        return axios.get(`/api/qbStats/${year}/${week}`)
    },

    getKStats: function(year, week){
        return axios.get(`/api/kStats/${year}/${week}`)
    },

    getDSTStats: function(year, week){
        return axios.get(`/api/dstStats/${year}/${week}`)
    },

    getFlexStats: function(year, week){
        return axios.get(`/api/flexStats/${year}/${week}`)
    },

    getFOTeamEff: function(year){
        return axios.get(`/api/fo/teameff/${year}`)
    },

    getFOTeamOff: function(year){
        return axios.get(`/api/fo/teamoff/${year}`)
    },

    getFOTeamDef: function(year){
        return axios.get(`/api/fo/teameff/${year}`)
    },

    getFOTeamST: function(year){
        return axios.get(`/api/fo/teamst/${year}`)
    }
}