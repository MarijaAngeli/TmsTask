<template>
    <div class="container">
        <div class="row justify-content-center">
        	<form @submit.prevent="updateUser()" class="mb-3">
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Firstname" v-model="user.firstname">
        		</div>
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Lastname" v-model="user.lastname">
        		</div>
        		<div class="form-group">
        			<input type="text" class="form-control" placeholder="Email" v-model="user.email">
        		</div>
        		<button type="submit" class="btn btn-light btn-block">Update</button>
        	</form>
            <div class="col-md-8">
                <div class="card mb-2" v-for="user in users" v-bind:key="user.id">
                    <div class="card-header">User Data:</div>
                    <ul class="list-group list-group-flush" :selected="true" >
                        <li class="list-group-item">Firstname:  {{user.firstname}} </li>
                        <li class="list-group-item">Lastname: {{user.lastname}} </li>
                        <li class="list-group-item">Email: {{user.email}} </li>
                    </ul>
                    <hr>
                    <button @click="editUser(user)" class=" btn btn-warning btn-sm">Edit</button>
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
  			user_id: '',
  			pagination: {},
  			edit: false
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
  		editUser(user) {
  			this.edit = true;
  			this.user.id = user.id;
  			this.user.user_id = user.id;
  			this.user.firstname = user.firstname;
  			this.user.lastname = user.lastname;
  			this.user.email = user.email;
  		},
  		updateUser(user) {
  			fetch('api/user', {
  				method: 'put',
  				body: JSON.stringify(this.user),
  				headers: {
  					'content-type' : 'application/json'
  				}
  			})
  			.then(res => res.json())
  			.then(data => {
  				this.user.firstname = '';
  				this.user.lastname = '';
  				this.user.email = '';
  				alert('User updated');
  				this.fetchUsers();
  			})
  			.catch(err => console.log(err));
  		}
  	}
}
</script>