<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mb-2" v-for="user in users" v-bind:key="user.id">
                    <div class="card-header">User Data:</div>
                    <ul class="list-group list-group-flush" :selected="true" >
                        <li class="list-group-item">Firstname:  {{user.firstname}} </li>
                        <li class="list-group-item">Lastname: {{user.lastname}} </li>
                        <li class="list-group-item">Email: {{user.email}} </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
  	data() {
  		return {
  			users: [],
  			user: {
  				id: '',
  				firstname: '',
  				lastname: '',
  				email: ''
  			},
  		}
  	},
  	created() {
  		this.fetchUsers();
  	},
  	methods:{
  		fetchUsers() {
  			fetch('api/users')
  			.then (res => res.json())
  			.then(res => {
  				this.users = res.data;
  			})
  		},
  	}
}
</script>