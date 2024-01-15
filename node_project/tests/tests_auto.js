describe('Testing title', ()=>{
    before(()=>{
        console.log("before everything do something")
    });
    beforeEach(()=>{
        console.log("do something before each")
    });
    it('test1', ()=>{
        console.log("this is test1");
    });
    it('test2', ()=>{
        console.log("this is test2");
    });
    afterEach(()=>{
        console.log("after each do something")
    });

    after(()=>{
        console.log("this is the end")
    });
});