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
                 { fullname: 'Ben Pong', email: 'benpong89@gmail.com', zipcode: '11355', summary: 'teaches dance', description: 'test description', published: true, imgURL: 'testimgurl', resumeLink: 'testResumeLink' },
                 { fullname: 'John Smith', email: 'johnsmith90@gmail.com', zipcode: '10010', summary: 'teaches singing', description: 'test description2', published: true, imgURL: 'testimgurl', resumeLink: 'testResumeLink' },
                 { fullname: 'Jane Doe', email: 'janedoe91@gmail.com', zipcode: '02446', summary: 'teaches Boxing', description: 'test description3', published: true, imgURL: 'testimgurl', resumeLink: 'testResumeLink' }
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
