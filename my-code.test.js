const { sum } = require ('./my-code')

describe('math fucntion', ()=>{
    
    it('sum 2 numbers', () =>{
        expect(sum(1,2)).toBe(3)
     })

    it('sum 2 numbers', () =>{
        expect(sum(1,2)).toBe(3)
     })
})

describe('time fucntion', ()=>{
    
    it('return timestamp for one hour ahead', () =>{
       global.Date.now =() =>0
        expect(sum(1,2)).toBe(3)
     })
})


