import validatePassword from './validatePasword'

describe('Given a validatePassword function',()=>{
    describe('When incoming values of userPassword="Riki1234"',()=>{
        const userPassword="Riki1234"

        test('Should return false',()=>{
            expect(validatePassword(userPassword)).toEqual(true)
        })
    })
    describe('When incoming values of userPassword="Riki1234"',()=>{
        const userPassword=""

        test('Should return false',()=>{
            expect(validatePassword(userPassword)).toEqual(false)
        })
    })
})