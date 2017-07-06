angular.module('MyApp')
	.factory('Show', ['$resource', function($resource) {
		return $resource('/api/shows/:_id');
	}]);



/*
	The simplest service you will ever see thanks to the angular-resource.js module for doing all the heavy lifting for us. 
	The $resource service is the perfect companion for a RESTful backend. 
	This is all we need to query all shows and an individual show by id. 


	Remember our one-line Show service? By default it has the following methods:
	{ 'get':    {method:'GET'},
	  'save':   {method:'POST'},
	  'query':  {method:'GET', isArray:true},
	  'remove': {method:'DELETE'},
	  'delete': {method:'DELETE'} 
	};

	In other words, we use Show.get() to get a single show and Show.query() to get an array of shows.
*/