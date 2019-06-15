 import VueRouter from 'vue-router';

let routes = [
{
	name: 'users',
	path: '/',
	component: require('./components/Users').default
},
{
	name: 'updateUsers',
	path: '/update',
	component: require('./components/UpdateUser').default
},
{
	name: 'products',
	path: '/products',
	component: require('./components/Products').default
},
//  {
//     name: 'tms',
// 	path: '/',
// 	component: require('./views/Tms').default
// }
];
 export default new VueRouter ({
 	routes,
 	linkActiveClass:'is-active'
 });