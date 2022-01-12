let Student = [

    {
        name:"გიორგი",
        img:true,
        age:22,
        register:"27/03.2021",
        course:"front-end",
        daswreba: 20,
        stipendia: "no",

    },
    {
        name:"თორნიკე",
        img:true,
        age:21,
        register:"2020/09/22",
        course:"front-end",
        daswreba: 100,
        stipendia: "yes",

    },
    {
        name:"ალექსანდრე",
        img:true,
        age:23,
        register:"2020/09/22",
        course:"front-end",
        daswreba: 60,
        stipendia: "yes",

    },
    {
        name:"გიორგი",
        img:true,
        age:20,
        register:"27/03.2021",
        course:"front-end",
        daswreba: 60,
        stipendia: "no",

    },
    {
        name:"ლაშა",
        img:true,
        age:22,
        register:"27/03.2021",
        course:"php",
        daswreba: 30,
        stipendia: "yes",

    },
    {
        name:"თორნიკე",
        img:true,
        age:22,
        register:"27/03.2021",
        course:"python",
        daswreba: 100,
        stipendia: "no",

    },
    {
        name:"ალექსანდრე",
        img:true,
        age:20,
        register:"27/03.2021",
        course:"front-end",
        daswreba: 100,
        stipendia: "no",

    },
    {
        name:"ლაშა",
        img:true,
        age:19,
        register:"2020/09/22",
        course:"back-end",
        daswreba: 100,
        stipendia: "no",

    },
    {
        name:"ბექა",
        img:true,
        age:19,
        register:"27/03.2021",
        course:"front-end",
        daswreba: 100,
        stipendia: "no",

    },
    {
      

       name:"გიორგი",
       img:'aaa.png',
       age:22,
       register:"27/03.2021",
       course:"back-end",
       daswreba: 40,
       stipendia: "yes",
    },
   
 ]
 

 let agearr = Student.filter(els1=>{
    return els1.age == 22;
    
})
console.log(agearr);

let registarr = Student.filter(elmnt2=>{
    return elmnt2.register == "2020/09/22";
})
console.log(registarr);

let coursarr = Student.filter(elmnt3 =>{
    return elmnt3.course == "front-end";
})
console.log(coursarr);

let daswarr = Student.filter(elmnt4 =>{
    return elmnt4.daswreba == 100;
})
console.log(daswarr);

let stiparr = Student.filter(elmnt5 =>{
    return elmnt5.stipendia == "yes";
})
console.log(stiparr);

let namearr = Student.filter(elmnt6=>{
    return elmnt6.name == "გიორგი";
})
console.log(namearr);
