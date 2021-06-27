class Calc{
    constructor(){
        this.collection = []
        this.result = 0
    }

    getCollection(){
        return this.collection
    }

    init(){
        
        ui.uiSeclectotors().result.textContent =this.result
    }
}



const calc = new Calc()

console.log(calc.getCollection());



class UI{
    constructor(){

    }

    uiSeclectotors(){
        return{
            toggles:document.querySelectorAll('.toggle'),
            toggle1:document.querySelector('#theme1'),
            toggle2:document.querySelector('#theme2'),
            appBody:document.querySelector('.appBody'),
            screen:document.querySelector('.screen'),
            main:document.querySelector('.main'),
            result:document.querySelector('#result'),
            toggle3:document.querySelector('#theme3'),
            keys:document.querySelector('.btn')
        }
    }
    themeOne(toggle){
            this.uiSeclectotors().appBody.classList.remove('theme_3')
            this.uiSeclectotors().appBody.classList.remove('theme_2')

            toggle.style.backgroundColor = 'red'
            this.uiSeclectotors().toggle1.style.backgroundColor = 'red'
            this.uiSeclectotors().toggle2.style.backgroundColor = '#232c43'
            this.uiSeclectotors().toggle3.style.backgroundColor = '#232c43'
            this.uiSeclectotors().appBody.style.backgroundColor = '#182749'
            this.uiSeclectotors().main.style.backgroundColor = '#3a47648c'
    }

    themeTwo(toggle){
        if (!this.uiSeclectotors().appBody.classList.contains('theme_2')) {                
            this.uiSeclectotors().appBody.classList.remove('theme_1')
            this.uiSeclectotors().appBody.classList.remove('theme_3')
            this.uiSeclectotors().appBody.classList.add('theme_2')
        }
            toggle.style.backgroundColor = 'red'
            this.uiSeclectotors().toggle1.style.backgroundColor = '#232c43'
            this.uiSeclectotors().toggle3.style.backgroundColor = '#232c43'
            this.uiSeclectotors().appBody.style.backgroundColor = 'hsl(0, 0%, 90%)'
            
    }

    themeThree(toggle){
        if (!this.uiSeclectotors().appBody.classList.contains('theme_3')) {                
            this.uiSeclectotors().appBody.classList.remove('theme_1')
            this.uiSeclectotors().appBody.classList.remove('theme_2')
            this.uiSeclectotors().appBody.classList.add('theme_3')
        }
            toggle.style.backgroundColor = '#07d5f0'
            this.uiSeclectotors().toggle2.style.backgroundColor = '#232c43'
            this.uiSeclectotors().toggle1.style.backgroundColor = '#232c43'
            this.uiSeclectotors().appBody.style.backgroundColor = 'hsl(268, 75%, 9%)'
            this.uiSeclectotors().screen.style.backgroundColor = '#58077d71'
            this.uiSeclectotors().main.style.backgroundColor = '#58077d71'
    }

    changeTheme(toggle){
       switch (toggle.id) {
           case 'theme1':
            this.themeOne(toggle)
            break;
           case 'theme2':
                this.themeTwo(toggle)
            break;
           case 'theme3':
            this.themeThree(toggle)
            break;
       }
       
    }

    init(){
            this.uiSeclectotors().appBody.classList.remove('theme_2')
            this.uiSeclectotors().appBody.classList.remove('theme_1')
            this.uiSeclectotors().toggle1.style.backgroundColor = 'red'
            this.uiSeclectotors().toggle2.style.backgroundColor = '#232c43'
            this.uiSeclectotors().toggle3.style.backgroundColor = '#232c43'
            this.uiSeclectotors().appBody.style.backgroundColor = '#182749'
            this.uiSeclectotors().main.style.backgroundColor = '#3a47648c'
    }
}



const ui = new UI()

ui.uiSeclectotors().toggles.forEach(toggle =>{
    toggle.addEventListener('click',e =>{
        ui.changeTheme(e.target)
    })
})

ui.init()
calc.init()
