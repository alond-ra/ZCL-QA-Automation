describe('API Testing - ReqRes.in', () => {
    const baseUrl = 'https://reqres.in/api'
    
    it('should GET users list and validate response', () => {
        cy.request({
                method:'GET',
                url: `${baseUrl}/users?page=2`,
                headers: { 'x-api-key': 'reqres-free-v1' }
        })
            .then((response) => {
                expect(response.status).to.equal(200)
                
                // validate response structure
                expect(response.body).to.have.property('page', 2)
                expect(response.body).to.have.property('per_page')
                expect(response.body).to.have.property('total')
                expect(response.body).to.have.property('total_pages')
                expect(response.body).to.have.property('data').that.is.an('array')
                
                // validate data content
                if (response.body.data.length > 0) {
                    const user = response.body.data[0]
                    expect(user).to.have.property('id')
                    expect(user).to.have.property('email')
                    expect(user).to.have.property('first_name')
                    expect(user).to.have.property('last_name')
                    expect(user).to.have.property('avatar')
                }
            })
    })

    it('should POST new user and validate response', () => {
        const userData = {
            name: "John Doe",
            job: "QA Engineer"
        }
        
        cy.request({
            method: 'POST',
            url: `${baseUrl}/users`,
            body: userData,
            headers: { 'x-api-key': 'reqres-free-v1' }
        })
            .then((response) => {
                expect(response.status).to.equal(201)
                
                // validate response structure
                expect(response.body).to.have.property('name', userData.name)
                expect(response.body).to.have.property('job', userData.job)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('createdAt')
            })
    })

    it('should DELETE user and validate response', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/users/2`,
            headers: { 'x-api-key': 'reqres-free-v1' }
        })
            .then((response) => {
                expect(response.status).to.equal(204)
                
                // validate response body is empty for DELETE
                expect(response.body).to.be.empty
            })
    })
})