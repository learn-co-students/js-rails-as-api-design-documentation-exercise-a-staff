class DogController < ApplicationController

    def search
        query = (params[:query] || "").downcase
        sort = params[:sort_field] == "" ? "name" : params[:sort_field]

        dogs = Dog.all.select do |dog|
            dog.name.downcase.include?(query) ||
            dog.breed.downcase.include?(query) ||
            dog.phrase.downcase.include?(query) ||
            dog.size.downcase.include?(query)
        end
        dogs.sort_by!(&sort.to_sym)
        render json: dogs
    end
end
