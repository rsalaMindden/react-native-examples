import validateEmail from './validateEmail'

describe('Given a validateEmail function',()=>{
    describe('When incoming values of userEmail="example@example.com"',()=>{
        const userEmail="example@example.com"

        test('Should return false',()=>{
            expect(validateEmail(userEmail)).toEqual(true)
        })
    })
})