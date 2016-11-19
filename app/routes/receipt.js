import Ember from 'ember';

export default Ember.Route.extend({
	// model(params){
	// 	return [{id: '1', name: 'Maggie'}, 
	// 			{id: '2', name: 'Tom'}].findBy('id', params.order_id);
	// }
	model(){
		return [{id: '1', name: 'Maggie'}, 
				{id: '2', name: 'Tom'}];
	}
});
