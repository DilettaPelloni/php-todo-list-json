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
        getData() {
            axios.get('./read.php')
            .then((response) => {
                this.taskList = response.data.taskList;
            });
        },//getData
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
                this.getData();
                this.newTask= '';
            });
        },//addTask
        deleteTask(index) {
            axios.post('./delete.php', {
                index: index
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log(response);
                this.getData();
            });
        },//deleteTask
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
		this.getData();
	}//mounted
}).mount('#app');