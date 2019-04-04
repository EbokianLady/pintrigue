# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Board.delete_all
Pin.delete_all
PinJoin.delete_all

# u = User.create(
#   email: 'juneberry@fakemail.com',
#   password: 'vault66',
#   username: 'juneberry',
#   first_name: 'Juniper',
#   last_name: 'Moore',
#   location: 'Chicago',
#   description: 'My favorite things to do are gardening and cooking!'
# )

# Board.create(
#   name: 'Garden Scenes',
#   creator_id: 2
# )

# Board.create(
#   name: 'Kitchen Fun',
#   creator_id: 2
# )
