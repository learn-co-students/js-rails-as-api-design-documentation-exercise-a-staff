the route get '/dog_search' triggers the search method in the dogs controller.

the search text comes from the params

#search takes the query, or if that is nil, an empty string, and downcases it.
sort is set to the sort field in the params or "name"

Dog.all, then select to match a name, breed, phrase, or size.

returns the json
