const { sum, inOneHour } = require ('./my-code')

describe('math fucntion', ()=>{
    
    it('sum 2 numbers', () =>{
        expect(sum(1,2)).toBe(3)
     })

    it('sum 2 numbers', () =>{
        expect(sum(1,2)).toBe(3)
     })
})

describe('time function', ()=>{
    const realDate = Date.now.bind(global.Date)
    it('return timestamp for one hour ahead', () =>{
       global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDate
        console.log(global.Date.now())
     })
})


