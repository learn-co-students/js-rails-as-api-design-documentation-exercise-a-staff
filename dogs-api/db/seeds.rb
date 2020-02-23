# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

250.times do
    name = Faker::Creature::Dog.name
    breed = Faker::Creature::Dog.breed
    age = Faker::Creature::Dog.age
    size = Faker::Creature::Dog.size
    phrase = Faker::Creature::Dog.meme_phrase
    Dog.create(name: name, breed: breed, age: age, size: size, phrase: phrase)
end
