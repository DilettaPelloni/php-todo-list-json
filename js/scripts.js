const { createApp } = Vue;

createApp({
    data() {
        return {
            taskList: [],
            newTask:'',
            response:'',
        }//return
    },//data
    methods: {
        readData() {
            axios.get('./read.php')
            .then((response) => {
                this.taskList = response.data.taskList;
            });
        },//readData
        addTask() {
            axios.post('./create.php', {
                newTask: this.newTask
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log(response);
                this.readData();
                this.newTask= '';
            });
        },//addTask
        toggleDone(task, index) {
            task.done = !task.done;
            axios.post('./update.php', {
                updateType: 'toggleDone',
                index: index,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => { console.log(response); });
        },//toggleDone
    },//methods
    created() {
		this.readData();
	}//mounted
}).mount('#app');