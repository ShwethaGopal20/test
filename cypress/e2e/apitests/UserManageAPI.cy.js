/// <reference types="cypress"/>

describe('UserManage Api automation test', () => {

    it('GET-list user', () => {
       cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
       expect(response.status).equal(200);
       expect(response.body.data[0].first_name).equal('Michael')
         });
    });

    it('POST-Create user ',()=>{
        //add user data in the body content
       var user={
        "name": "shwetha",
        "job": "leader"
    }
        //here we are using post method and copying the link address
        cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201) //added response code
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    
    it('Update User',()=>{
        //add user data in the body content
        var user1={
            "name": "Techieqa",
            "job": "youtube"
        }
          //here we are adding put method and copying the link address
             cy.request('PUT','https://reqres.in/api/users/2',user1).then((response)=>{
                expect(response.status).equal(200)    //added response code
                expect(response.body.name).equal(user1.name)
                expect(response.body.job).equal(user1.job)
             })
    })

    it('Delete User',()=>{
          //here we are adding delete method and copying the link address
             cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
                expect(response.status).equal(204)  //added response code
             }) 
            })
});
