# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Profile.destroy_all
Category.destroy_all
ProfileCategory.destroy_all

User.create([
              { username: 'benpong89', password: '123456' },
              { username: 'johnsmith90', password: '123456' },
              { username: 'janedoe91', password: '123456' }

            ])

Profile.create([
                 { fullname: 'Steve Rogers', email: 'testemail@gmail.com', zipcode: '02446', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eget arcu a eleifend. Duis.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia eu nulla id lacinia. Maecenas sodales, turpis suscipit maximus elementum, elit risus vehicula eros, a mattis neque nibh vulputate tellus. Nunc id faucibus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi euismod, tellus id iaculis viverra.', published: true},
                 { fullname: 'Tony Stark', email: 'testemail@gmail.com', zipcode: '02446', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eget arcu a eleifend. Duis.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia eu nulla id lacinia. Maecenas sodales, turpis suscipit maximus elementum, elit risus vehicula eros, a mattis neque nibh vulputate tellus. Nunc id faucibus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi euismod, tellus id iaculis viverra.', published: true},
                 { fullname: 'Bruce Wayne', email: 'testemail@gmail.com', zipcode: '02446', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eget arcu a eleifend. Duis.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia eu nulla id lacinia. Maecenas sodales, turpis suscipit maximus elementum, elit risus vehicula eros, a mattis neque nibh vulputate tellus. Nunc id faucibus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi euismod, tellus id iaculis viverra.', published: true},
                 { fullname: 'Clark Kent', email: 'testemail@gmail.com', zipcode: '02446', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eget arcu a eleifend. Duis.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia eu nulla id lacinia. Maecenas sodales, turpis suscipit maximus elementum, elit risus vehicula eros, a mattis neque nibh vulputate tellus. Nunc id faucibus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi euismod, tellus id iaculis viverra.', published: true},
                 { fullname: 'Clint Barton', email: 'testemail@gmail.com', zipcode: '02446', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eget arcu a eleifend. Duis.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia eu nulla id lacinia. Maecenas sodales, turpis suscipit maximus elementum, elit risus vehicula eros, a mattis neque nibh vulputate tellus. Nunc id faucibus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi euismod, tellus id iaculis viverra.', published: true},
                 { fullname: 'Steve Banner', email: 'testemail@gmail.com', zipcode: '02446', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat eget arcu a eleifend. Duis.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia eu nulla id lacinia. Maecenas sodales, turpis suscipit maximus elementum, elit risus vehicula eros, a mattis neque nibh vulputate tellus. Nunc id faucibus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi euismod, tellus id iaculis viverra.', published: true}
               ])

Category.create([
                  { category: 'Dance' },
                  { category: 'Art' },
                  { category: 'Tutor' },
                  { category: 'Music' },
                  { category: 'Sports' },
                  { category: 'Martial Arts' },
                  { category: 'Cooking' },
                  { category: 'Photography' },
                  { category: 'Theater' },
                  { category: 'Chess' },
                  { category: 'Community Service' },
                  { category: 'Writing' },
                  { category: 'Book Club' },
                  { category: 'Gardening' },
                  { category: 'Other' },

                ])
