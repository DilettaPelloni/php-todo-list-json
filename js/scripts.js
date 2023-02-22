const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl:'./api.php',
            taskList: [],
        }//return
    },//data
    methods: {

    },//methods
    created() {
        axios.get(this.apiUrl)
        .then((response) => {
            this.taskList = response.data.taskList;
        });
		
	}//mounted
}).mount('#app');